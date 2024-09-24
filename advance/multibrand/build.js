import StyleDictionary from "style-dictionary";

// REGISTER THE CUSTOM TRANSFORMS

StyleDictionary.registerTransform({
  name: 'custom/size/rem', // notice: the name is an override of an existing predefined method (yes, you can do it)
  type: 'value',

  filter: function (token) {
    console.log(`Token Type: ${token.$type} - Value: ${token.attributes.unit}`);
    return token.$type === '$fontSize' || token.$type === '$dimension' || token.attributes.unit === 'px' || token.attributes.unit === 'rem';
  },
  transform: function (token) {
    return `${token.$value}${token.attributes.unit}`;
  },
});

// REGISTER THE CUSTOM TRANSFORM GROUPS
StyleDictionary.registerTransformGroup({
  name: "web-group",
  transforms: ["attribute/cti", "name/camel"],
});

StyleDictionary.registerTransformGroup({
  name: "css-group",
  transforms: [
    "attribute/cti",
    "name/kebab",
    "time/seconds",
    "html/icon",
    "custom/size/rem",
    "color/css",
    "asset/url",
    "fontFamily/css",
    "cubicBezier/css",
    "strokeStyle/css/shorthand",
    "border/css/shorthand",
    "typography/css/shorthand",
    "transition/css/shorthand",
    "shadow/css/shorthand",
  ],
});

StyleDictionary.registerTransformGroup({
  name: "css-group-rgb",
  transforms: [
    "attribute/cti",
    "name/kebab",
    "time/seconds",
    "html/icon",
    "size/rem",
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
});

StyleDictionary.registerTransformGroup({
  name: "css-group-hsl",
  transforms: [
    "attribute/cti",
    "name/kebab",
    "time/seconds",
    "html/icon",
    "size/rem",
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
});

StyleDictionary.registerTransformGroup({
  name: "css-group-rem",
  transforms: [
    "attribute/cti",
    "name/kebab",
    "time/seconds",
    "html/icon",
    "custom/size/rem",
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
});

StyleDictionary.registerTransformGroup({
  name: "css-group-hsl",
  transforms: [
    "attribute/cti",
    "name/kebab",
    "time/seconds",
    "html/icon",
    "size/rem",
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
});

StyleDictionary.registerTransformGroup({
  name: "scss-group",
  transforms: ["attribute/cti", "name/kebab"],
});

StyleDictionary.registerTransformGroup({
  name: "json-group",
  transforms: ["attribute/cti", "name/kebab"],
});

function getStyleDictionaryConfig(brand, platform) {
  return {
    source: [`tokens/brands/${brand}/*.@(json|json5)`],
    platforms: {
      // WEB
      'custom/web': {
        transformGroup: "web-group",
        buildPath: `build/web/${brand}/js/`,
        files: [
          {
            destination: "module/tokens.module.js",
            format: "javascript/module",
          },
          {
            destination: "object/tokens.object.js",
            format: "javascript/object",
          },
          {
            destination: "es6/tokens.es6.js",
            format: "javascript/es6",
          },

          {
            destination: "module/tokens-color.module.js",
            format: "javascript/module",
            filter: { $type: "color" },
          },
          {
            destination: "module/tokens-dimension.module.js",
            format: "javascript/module",
            filter: { $type: "dimension" },
          },
          {
            destination: "module/tokens-typography.module.js",
            format: "javascript/module",
            filter: { $type: "typography" },
          },
          {
            destination: "module/tokens-transition.module.js",
            format: "javascript/module",
            filter: { $type: "transition" },
          },
          {
            destination: "module/tokens-border.module.js",
            format: "javascript/module",
            filter: { $type: "border" },
          },
          {
            destination: "module/tokens-shadow.module.js",
            format: "javascript/module",
            filter: { $type: "shadow" },
          },
          {
            destination: "module/tokens-fontFamily.module.js",
            format: "javascript/module",
            filter: { $type: "fontFamily" },
          },
          {
            destination: "module/tokens-fontSize.module.js",
            format: "javascript/module",
            filter: { $type: "fontSize" },
          },
          {
            destination: "module/tokens-fontWeight.module.js",
            format: "javascript/module",
            filter: { $type: "fontWeight" },
          },
          {
            destination: "module/tokens-number.module.js",
            format: "javascript/module",
            filter: { $type: "number" },
          },

          {
            destination: "object/tokens-color.object.js",
            format: "javascript/object",
            filter: { $type: "color" },
          },
          {
            destination: "object/tokens-dimension.object.js",
            format: "javascript/object",
            filter: { $type: "dimension" },
          },
          {
            destination: "object/tokens-typography.object.js",
            format: "javascript/object",
            filter: { $type: "typography" },
          },
          {
            destination: "object/tokens-transition.object.js",
            format: "javascript/object",
            filter: { $type: "transition" },
          },
          {
            destination: "object/tokens-border.object.js",
            format: "javascript/object",
            filter: { $type: "border" },
          },
          {
            destination: "object/tokens-shadow.object.js",
            format: "javascript/object",
            filter: { $type: "shadow" },
          },
          {
            destination: "object/tokens-fontFamily.object.js",
            format: "javascript/object",
            filter: { $type: "fontFamily" },
          },
          {
            destination: "object/tokens-fontSize.object.js",
            format: "javascript/object",
            filter: { $type: "fontSize" },
          },
          {
            destination: "object/tokens-fontWeight.object.js",
            format: "javascript/object",
            filter: { $type: "fontWeight" },
          },
          {
            destination: "object/tokens-number.object.js",
            format: "javascript/object",
            filter: { $type: "number" },
          },

          {
            destination: "es6/tokens-color.es6.js",
            format: "javascript/es6",
            filter: { $type: "color" },
          },
          {
            destination: "es6/tokens-dimension.es6.js",
            format: "javascript/es6",
            filter: { $type: "dimension" },
          },
          {
            destination: "es6/tokens-typography.es6.js",
            format: "javascript/es6",
            filter: { $type: "typography" },
          },
          {
            destination: "es6/tokens-transition.es6.js",
            format: "javascript/es6",
            filter: { $type: "transition" },
          },
          {
            destination: "es6/tokens-border.es6.js",
            format: "javascript/es6",
            filter: { $type: "border" },
          },
          {
            destination: "es6/tokens-shadow.es6.js",
            format: "javascript/es6",
            filter: { $type: "shadow" },
          },
          {
            destination: "es6/tokens-fontFamily.es6.js",
            format: "javascript/es6",
            filter: { $type: "fontFamily" },
          },
          {
            destination: "es6/tokens-fontSize.es6.js",
            format: "javascript/es6",
            filter: { $type: "fontSize" },
          },
          {
            destination: "es6/tokens-fontWeight.es6.js",
            format: "javascript/es6",
            filter: { $type: "fontWeight" },
          },
          {
            destination: "es6/tokens-number.es6.js",
            format: "javascript/es6",
            filter: { $type: "number" },
          },
        ],
      },

      // CSS
      "custom/css": {
        transformGroup: "css-group",
        buildPath: `build/web/${brand}/css/`,
        files: [
          {
            destination: "variables/tokens.css",
            format: "css/variables",
          },

          {
            destination: "variables/tokens-color.css",
            format: "css/variables",
            filter: { $type: "color" },
          },
          {
            destination: "variables/tokens-dimension.css",
            format: "css/variables",
            filter: { $type: "dimension" },
            transform: ["size/rem"],
          },
          {
            destination: "variables/tokens-typography.css",
            format: "css/variables",
            filter: { $type: "typography" },
          },
          {
            destination: "variables/tokens-transition.css",
            format: "css/variables",
            filter: { $type: "transition" },
          },
          {
            destination: "variables/tokens-border.css",
            format: "css/variables",
            filter: { $type: "border" },
          },
          {
            destination: "variables/tokens-shadow.css",
            format: "css/variables",
            filter: { $type: "shadow" },
          },
          {
            destination: "variables/tokens-fontFamily.css",
            format: "css/variables",
            filter: { $type: "fontFamily" },
          },
          {
            destination: "variables/tokens-fontSize.css",
            format: "css/variables",
            filter: { $type: "fontSize" },
          },
          {
            destination: "variables/tokens-fontWeight.css",
            format: "css/variables",
            filter: { $type: "fontWeight" },
          },
          {
            destination: "variables/tokens-number.css",
            format: "css/variables",
            filter: { $type: "number" },
          },
        ],
      },

      // CSS - RGB
      "custom/css/rgb": {
        transformGroup: "css-group-rgb",
        buildPath: `build/web/${brand}/css/`,
        files: [
          {
            destination: "variables/tokens-rgb.css",
            format: "css/variables",
          },

          {
            destination: "variables/tokens-color-rgb.css",
            format: "css/variables",
            filter: { $type: "color" },
          },
        ],
      },

      // CSS - HSL
      "custom/css/hsl": {
        transformGroup: "css-group-hsl",
        buildPath: `build/web/${brand}/css/`,
        files: [
          {
            destination: "variables/tokens-hsl.css",
            format: "css/variables",
          },

          {
            destination: "variables/tokens-color-hsl.css",
            format: "css/variables",
            filter: { $type: "color" },
          },
        ],
      },

      // CSS - REM
      "custom/css/rem": {
        transformGroup: "css-group-rem",
        buildPath: `build/web/${brand}/css/`,
        files: [
          {
            destination: "variables/tokens-rem.css",
            format: "css/variables",
          },

          {
            destination: "variables/tokens-dimension-rem.css",
            format: "css/variables",
            filter: { $type: "dimension" }
          },
          {
            destination: "variables/tokens-typography-rem.css",
            format: "css/variables",
            filter: { $type: "typography" },
          },
        ],
      },

      // SCSS
      'custom/scss': {
        transformGroup: "scss-group",
        buildPath: `build/web/${brand}/scss/`,
        files: [
          {
            destination: "tokens-variables.scss",
            format: "scss/variables",
          },
          {
            destination: "tokens-map-deep.scss",
            format: "scss/map-deep",
          },
        ],
      },

      // JSON
      'custom/json': {
        transformGroup: "json-group",
        buildPath: `build/web/${brand}/json/`,
        files: [
          {
            destination: "tokens.json",
            format: "json",
          },
          {
            destination: "tokens.flat.json",
            format: "json/flat",
          },
          {
            destination: "tokens.nested.json",
            format: "json/nested",
          },
        ],
      },
    },
  };
}

console.log("Build started...");

["brand-1"].map(function (brand) {
  [
    "custom/web",
    "custom/css",
    "custom/css/rgb",
    "custom/css/hsl",
    "custom/css/rem",
    "custom/scss",
    "custom/json",
  ].map(function (platform) {
    console.log("\n==============================================");
    console.log(`\nProcessing: [${platform}] [${brand}]`);

    const sd = new StyleDictionary(getStyleDictionaryConfig(brand, platform));
    sd.buildPlatform(platform);
  });
});

console.log("\n==============================================");
console.log("\nBuild completed!");
