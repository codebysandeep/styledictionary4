import StyleDictionary from "style-dictionary";

// Custom transforms
const customTransforms = {
  "custom/size/unit": {
    type: "value",
    transitive: true,
    filter: (token) => token.$type === "dimension" || token.attributes?.unit,
    transform: (token) => `${token.$value}${token.attributes?.unit || ""}`,
  },
  "custom/size/unit/rem": {
    type: "value",
    transitive: true,
    filter: (token) => token.$type === "dimension" || token.attributes?.unit,
    transform: (token) => `${token.$value}rem`,
  },
};

// Register custom transforms
Object.entries(customTransforms).forEach(([name, transform]) => {
  StyleDictionary.registerTransform({ name, ...transform });
});

// Define transform groups
const transformGroups = {
  "web-group": ["attribute/cti", "name/camel", "custom/size/unit", "color/hex"],
  "web-group-rgb": [
    "attribute/cti",
    "name/camel",
    "custom/size/unit",
    "color/rgb",
  ],
  "web-group-hsl": [
    "attribute/cti",
    "name/camel",
    "custom/size/unit",
    "color/hsl",
  ],
  "web-group-rem": ["attribute/cti", "name/camel", "size/pxToRem", "color/hsl"],
  "web-group-rgb-rem": [
    "attribute/cti",
    "name/camel",
    "size/pxToRem",
    "color/rgb",
  ],
  "web-group-hsl-rem": [
    "attribute/cti",
    "name/camel",
    "size/pxToRem",
    "color/hsl",
  ],
  "css-group": [
    "attribute/cti",
    "name/kebab",
    "time/seconds",
    "html/icon",
    "custom/size/unit",
    "color/hex8",
    "asset/url",
    "fontFamily/css",
    "cubicBezier/css",
    "strokeStyle/css/shorthand",
    "border/css/shorthand",
    "typography/css/shorthand",
    "transition/css/shorthand",
    "shadow/css/shorthand",
  ],
  "css-group-rgb": [
    "attribute/cti",
    "name/kebab",
    "time/seconds",
    "html/icon",
    "custom/size/unit",
    "color/rgb",
    "asset/url",
    "fontFamily/css",
    "cubicBezier/css",
    "strokeStyle/css/shorthand",
    "border/css/shorthand",
    "typography/css/shorthand",
    "transition/css/shorthand",
    "shadow/css/shorthand",
  ],
  "css-group-hsl": [
    "attribute/cti",
    "name/kebab",
    "time/seconds",
    "html/icon",
    "custom/size/unit",
    "color/hsl",
    "asset/url",
    "fontFamily/css",
    "cubicBezier/css",
    "strokeStyle/css/shorthand",
    "border/css/shorthand",
    "typography/css/shorthand",
    "transition/css/shorthand",
    "shadow/css/shorthand",
  ],
  "css-group-rem": [
    "attribute/cti",
    "name/kebab",
    "time/seconds",
    "html/icon",
    "size/pxToRem",
    "color/hex",
    "asset/url",
    "fontFamily/css",
    "cubicBezier/css",
    "strokeStyle/css/shorthand",
    "border/css/shorthand",
    "typography/css/shorthand",
    "transition/css/shorthand",
    "shadow/css/shorthand",
  ],
  "css-group-rgb-rem": [
    "attribute/cti",
    "name/kebab",
    "time/seconds",
    "html/icon",
    "size/pxToRem",
    "color/rgb",
    "asset/url",
    "fontFamily/css",
    "cubicBezier/css",
    "strokeStyle/css/shorthand",
    "border/css/shorthand",
    "typography/css/shorthand",
    "transition/css/shorthand",
    "shadow/css/shorthand",
  ],
  "css-group-hsl-rem": [
    "attribute/cti",
    "name/kebab",
    "time/seconds",
    "html/icon",
    "size/pxToRem",
    "color/hsl",
    "asset/url",
    "fontFamily/css",
    "cubicBezier/css",
    "strokeStyle/css/shorthand",
    "border/css/shorthand",
    "typography/css/shorthand",
    "transition/css/shorthand",
    "shadow/css/shorthand",
  ],
  "scss-group": ["attribute/cti", "name/kebab", "custom/size/unit"],
  "json-group": ["attribute/cti", "name/kebab", "custom/size/unit"],
};

// Register transform groups
Object.entries(transformGroups).forEach(([name, transforms]) => {
  StyleDictionary.registerTransformGroup({ name, transforms });
});

// Define file configurations
const fileConfigs = {
  js: [
    { destination: "module/all/all.module.js", format: "javascript/module" },
    { destination: "object/all/all.object.js", format: "javascript/object" },
    { destination: "es6/all/all.es6.js", format: "javascript/es6" },
  ],
  css: [{ destination: "all/all.css", format: "css/variables" }],
  scss: [
    { destination: "tokens-variables.scss", format: "scss/variables" },
    { destination: "tokens-map-deep.scss", format: "scss/map-deep" },
  ],
  json: [
    { destination: "tokens.json", format: "json" },
    { destination: "tokens.flat.json", format: "json/flat" },
    { destination: "tokens.nested.json", format: "json/nested" },
  ],
};

// Helper function to create file configurations
const createFileConfigs = (baseConfig, types, suffix = "") => {
  return types.flatMap((type) =>
    baseConfig.map((config) => ({
      ...config,
      destination: config.destination.replace("all", `${type}${suffix}`),
      filter: { $type: type },
    }))
  );
};

// Define platform configurations
const platformConfigs = {
  "custom/web": {
    transformGroup: "web-group",
    files: [
      ...fileConfigs.js,
      ...createFileConfigs(fileConfigs.js, [
        "color",
        "dimension",
        "typography",
        "fontFamily",
        "fontSize",
        "fontWeight",
        "transition",
        "border",
        "shadow",
        "number",
      ]),
    ],
  },
  "custom/web/rgb": {
    transformGroup: "web-group-rgb",
    files: [
      ...fileConfigs.js.map((f) => ({
        ...f,
        destination: f.destination.replace("all", "all-rgb"),
      })),
      ...createFileConfigs(fileConfigs.js, ["color"], "-rgb"),
    ],
  },
  "custom/web/hsl": {
    transformGroup: "web-group-hsl",
    files: [
      ...fileConfigs.js.map((f) => ({
        ...f,
        destination: f.destination.replace("all", "all-hsl"),
      })),
      ...createFileConfigs(fileConfigs.js, ["color"], "-hsl"),
    ],
  },
  "custom/web/rem": {
    transformGroup: "web-group-rem",
    files: [
      ...fileConfigs.js.map((f) => ({
        ...f,
        destination: f.destination.replace("all", "all-rem"),
      })),
      ...createFileConfigs(
        fileConfigs.js,
        ["dimension", "typography", "fontSize", "border", "shadow"],
        "-rem"
      ),
    ],
  },
  "custom/web/rgb/rem": {
    transformGroup: "web-group-rgb-rem",
    files: fileConfigs.js.map((f) => ({
      ...f,
      destination: f.destination.replace("all", "all-rgb-rem"),
    })),
  },
  "custom/web/hsl/rem": {
    transformGroup: "web-group-hsl-rem",
    files: fileConfigs.js.map((f) => ({
      ...f,
      destination: f.destination.replace("all", "all-hsl-rem"),
    })),
  },
  "custom/css": {
    transformGroup: "css-group",
    files: [
      ...fileConfigs.css,
      ...createFileConfigs(fileConfigs.css, [
        "color",
        "dimension",
        "typography",
        "fontFamily",
        "fontSize",
        "fontWeight",
        "transition",
        "border",
        "shadow",
        "number",
      ]),
    ],
  },
  "custom/css/rgb": {
    transformGroup: "css-group-rgb",
    files: [
      ...fileConfigs.css.map((f) => ({
        ...f,
        destination: f.destination.replace("all", "all-rgb"),
      })),
      ...createFileConfigs(fileConfigs.css, ["color"], "-rgb"),
    ],
  },
  "custom/css/hsl": {
    transformGroup: "css-group-hsl",
    files: [
      ...fileConfigs.css.map((f) => ({
        ...f,
        destination: f.destination.replace("all", "all-hsl"),
      })),
      ...createFileConfigs(fileConfigs.css, ["color"], "-hsl"),
    ],
  },
  "custom/css/rem": {
    transformGroup: "css-group-rem",
    files: [
      ...fileConfigs.css.map((f) => ({
        ...f,
        destination: f.destination.replace("all", "all-rem"),
      })),
      ...createFileConfigs(
        fileConfigs.css,
        ["dimension", "typography", "fontSize", "border", "shadow"],
        "-rem"
      ),
    ],
  },
  "custom/css/rgb/rem": {
    transformGroup: "css-group-rgb-rem",
    files: fileConfigs.css.map((f) => ({
      ...f,
      destination: f.destination.replace("all", "all-rgb-rem"),
    })),
  },
  "custom/css/hsl/rem": {
    transformGroup: "css-group-hsl-rem",
    files: fileConfigs.css.map((f) => ({
      ...f,
      destination: f.destination.replace("all", "all-hsl-rem"),
    })),
  },
  "custom/scss": { transformGroup: "scss-group", files: fileConfigs.scss },
  "custom/json": { transformGroup: "json-group", files: fileConfigs.json },
};

// Helper function to get Style Dictionary config
const getStyleDictionaryConfig = (brand, platform) => ({
  source: [`tokens/brands/${brand}/*.@(json|json5)`],
  platforms: {
    [platform]: {
      transformGroup: platformConfigs[platform].transformGroup,
      buildPath: `build/web/${brand}/${platform.split("/")[1] || "js"}/`,
      files: platformConfigs[platform].files,
    },
  },
});

// Main build function
const buildTokens = () => {
  console.log("Build started...");

  ["brand-1"].forEach((brand) => {
    Object.keys(platformConfigs).forEach((platform) => {
      console.log(`\nProcessing: [${platform}] [${brand}]`);
      const sd = new StyleDictionary(getStyleDictionaryConfig(brand, platform));
      sd.buildPlatform(platform);
    });
  });

  console.log("\nBuild completed!");
};

buildTokens();
