import StyleDictionary from "style-dictionary";

// Helper function to create output file configurations
const createFile = (destination, format, filter) => ({
  destination,
  format,
  ...(filter && { filter }),
});

// Generate standard output file groups
const generateFiles = (basePath, type = "") => {
  const format = type ? `.${type}` : "";
  console.log(`\nProcessing 123: basepath:${basePath} format:${format}`);
  return [
    createFile(`module/all/all${format}.module.js`, `javascript/module`),

    createFile(`object/all/all${format}.object.js`, `javascript/object`),
    createFile(`es6/all/all${format}.es6.js`, `javascript/es6`),
    createFile(`module/color/colors${format}.module.js`, `javascript/module`, { $type: "color" }),
    createFile(`module/dimension/dimensions${format}.module.js`, `javascript/module`, { $type: "dimension" }),
    createFile(`module/typography/typography${format}.module.js`, `javascript/module`, { $type: "typography" }),
    createFile(`module/typography/fontFamily${format}.module.js`, `javascript/module`, { $type: "fontFamily" }),
  ];
};

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
  { name: "web-group", transforms: ["attribute/cti", "name/camel", "custom/size/unit"] },
  { name: "web-group-rgb", transforms: ["attribute/cti", "name/camel", "custom/size/unit", "color/rgb"] },
  { name: "css-group", transforms: ["attribute/cti", "name/kebab", "custom/size/unit", "color/css", "asset/url"] },
  { name: "css-group-rgb-rem", transforms: ["attribute/cti", "name/kebab", "size/pxToRem", "color/rgb"] },
];

transformGroups.forEach(({ name, transforms }) => {
  StyleDictionary.registerTransformGroup({ name, transforms });
});

// Helper function to configure platforms
const getPlatformConfig = (brand, platform, group) => ({
  transformGroup: group,
  buildPath: `build/${platform}/${brand}/`,
  files: generateFiles(`build/${platform}/${brand}/`, platform.includes('css') ? 'css' : ''),
});

// Generate Style Dictionary Config
const getStyleDictionaryConfig = (brand) => ({
  source: [`tokens/brands/${brand}/*.@(json|json5)`],
  platforms: {
    "custom/web": getPlatformConfig(brand, "web", "web-group"),
    "custom/web/rgb": getPlatformConfig(brand, "web/rgb", "web-group-rgb"),
    "custom/css": getPlatformConfig(brand, "css", "css-group"),
    "custom/css/rem": getPlatformConfig(brand, "css/rem", "css-group-rgb-rem"),
  },
});

// Main build function
const brands = ["brand-1"];
const platforms = ["custom/web", "custom/web/rgb", "custom/css", "custom/css/rem"];

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
