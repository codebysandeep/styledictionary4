import StyleDictionary from "style-dictionary";

// Helper function to create output file configurations
const createFile = (destination, format, filter) => ({
  destination,
  format,
  ...(filter && { filter }),
});

const generateFiles = (type = "") => {
  const format = type ? `.${type}` : "";
  console.log(`\nProcessing generateFiles: type:${type}`);
  return [
    // web-group-hex (all tokens with hex color)
    createFile(`es6/all/all.es6.js`, `javascript/module`),
    // web-group-hex (only color in hex)
    createFile(`es6/color/colors-hex.js`, `javascript/module`, { $type: "color" }),
  ];
}

// Register Custom Transforms
const customTransforms = [
  {
    name: "custom/size/unit",
    type: "value",
    filter: (token) =>
      ["$fontSize", "$dimension"].includes(token.$type) || ["px", "rem"].includes(token.attributes.unit),
    transform: (token) => `${token.$value}${token.attributes.unit}`,
  },
  {
    name: "custom/size/unit/rem",
    type: "value",
    filter: (token) => ["$fontSize", "$dimension"].includes(token.$type) || token.attributes.unit === "rem",
    transform: (token) => `${token.$value}rem`,
  },
];

customTransforms.forEach((transform) => StyleDictionary.registerTransform(transform));

// Register Transform Groups dynamically
const transformGroups = [
  { name: "web-group-hex", transforms: ["attribute/cti", "name/camel", "custom/size/unit", "color/hex"] },
  { name: "web-group-rgb", transforms: ["attribute/cti", "name/camel", "custom/size/unit", "color/rgb"] },
  { name: "web-group-hsl", transforms: ["attribute/cti", "name/camel", "custom/size/unit", "color/hsl"] },
];

transformGroups.forEach(({ name, transforms }) => {
  StyleDictionary.registerTransformGroup({ name, transforms });
});

// Helper function to configure platforms
// brand = brand-1
// platform = web
// group = web-group-hex
// format = javascript/es6
const getPlatformConfig = (brand, platform, group, buildPathLastFix) => {
  console.log(`\getPlatformConfig: brand:${brand} platform:${platform} group:${group} buildPathLastFix:${buildPathLastFix}`);

  return {
    transformGroup: group,
    buildPath: `build/${platform}/${brand}/${buildPathLastFix}/`,
    files: generateFiles(),
  };
};
``
// Generate Style Dictionary Config`
const getStyleDictionaryConfig = (brand) => ({
  source: [`tokens/brands/${brand}/*.@(json|json5)`],
  platforms: {
    "custom/web/hex": getPlatformConfig(brand, "web", "web-group-hex", "js"),
    "custom/web/rgb": getPlatformConfig(brand, "web", "web-group-rgb", "js"),
    "custom/web/hsl": getPlatformConfig(brand, "web", "web-group-hsl", "js"),
  },
});

// Main build function
const brands = ["brand-1"];
const platforms = ["custom/web/hex", "custom/web/rgb", "custom/web/hsl"];

console.log("Build started...");

brands.forEach((brand) => {
  platforms.forEach((platform) => {
    console.log("\n==============================================");
    console.log(`\nProcessing: [${platform}] [${brand}]`);

    const sd = new StyleDictionary(getStyleDictionaryConfig(brand, platform));
    sd.buildPlatform(platform);
  });
});

console.log("\n==============================================");
console.log("\nBuild completed!");
