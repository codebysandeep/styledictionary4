import StyleDictionary from "style-dictionary";

// REGISTER THE CUSTOM TRANSFORMS

// CUSTOM TRANSFORMS - SIZE / UNIT
StyleDictionary.registerTransform({
  name: "custom/size/unit",
  type: "value",

  filter: function (token) {
    // console.log(`Token Type: ${token.$type} - Value: ${token.attributes.unit}`);
    return (
      token.$type === "$fontSize" ||
      token.$type === "$dimension" ||
      token.attributes.unit === "px" ||
      token.attributes.unit === "rem"
    );
  },
  transform: function (token) {
    return `${token.$value}${token.attributes.unit}`;
  },
});

// CUSTOM TRANSFORMS - SIZE / UNIT / REM
StyleDictionary.registerTransform({
  name: "custom/size/unit/rem",
  type: "value",

  filter: function (token) {
    console.log(`Token Type: ${token.$type} - Value: ${token.attributes.unit}`);
    return (
      token.$type === "$fontSize" ||
      token.$type === "$dimension" ||
      token.attributes.unit === "px" ||
      token.attributes.unit === "rem"
    );
  },
  transform: function (token) {
    return `${token.$value}rem`;
  },
});

// REGISTER THE CUSTOM TRANSFORM GROUPS

// CUSTOM TRANSFORM GROUPS - WEB
StyleDictionary.registerTransformGroup({
  name: "web-group",
  transforms: ["attribute/cti", "name/camel", "custom/size/unit"],
});

// CUSTOM TRANSFORM GROUPS - WEB / RGB
StyleDictionary.registerTransformGroup({
  name: "web-group-rgb",
  transforms: ["attribute/cti", "name/camel", "custom/size/unit", "color/rgb"],
});

// CUSTOM TRANSFORM GROUPS - WEB / HSL
StyleDictionary.registerTransformGroup({
  name: "web-group-hsl",
  transforms: ["attribute/cti", "name/camel", "custom/size/unit", "color/hsl"],
});


// CUSTOM TRANSFORM GROUPS - WEB / SIZE / UNIT / REM
StyleDictionary.registerTransformGroup({
  name: "web-group-rem",
  transforms: [
    "attribute/cti", "name/camel", "size/pxToRem", "color/hsl"
  ],
});

// CUSTOM TRANSFORM GROUPS - WEB / RGB / REM
StyleDictionary.registerTransformGroup({
  name: "web-group-rgb-rem",
  transforms: [
    "attribute/cti", 
    "name/camel",
    "size/pxToRem",
    "color/rgb",
  ],
});

// CUSTOM TRANSFORM GROUPS - WEB / HSL / REM
StyleDictionary.registerTransformGroup({
  name: "web-group-hsl-rem",
  transforms: [
    "attribute/cti", 
    "name/camel",
    "size/pxToRem",
    "color/hsl",
  ],
});



// CUSTOM TRANSFORM GROUPS - CSS
StyleDictionary.registerTransformGroup({
  name: "css-group",
  transforms: [
    "attribute/cti",
    "name/kebab",
    "time/seconds",
    "html/icon",
    "custom/size/unit",
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

// CUSTOM TRANSFORM GROUPS - CSS / RGB
StyleDictionary.registerTransformGroup({
  name: "css-group-rgb",
  transforms: [
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
});

// CUSTOM TRANSFORM GROUPS - CSS / HSL
StyleDictionary.registerTransformGroup({
  name: "css-group-hsl",
  transforms: [
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
});

// CUSTOM TRANSFORM GROUPS - CSS / SIZE / UNIT / REM
StyleDictionary.registerTransformGroup({
  name: "css-group-rem",
  transforms: [
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
});

// CUSTOM TRANSFORM GROUPS - CSS / RGB / REM
StyleDictionary.registerTransformGroup({
  name: "css-group-rgb-rem",
  transforms: [
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
});

// CUSTOM TRANSFORM GROUPS - CSS / HSL / REM
StyleDictionary.registerTransformGroup({
  name: "css-group-hsl-rem",
  transforms: [
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
});

StyleDictionary.registerTransformGroup({
  name: "scss-group",
  transforms: ["attribute/cti", "name/kebab", "custom/size/unit"],
});

StyleDictionary.registerTransformGroup({
  name: "json-group",
  transforms: ["attribute/cti", "name/kebab", "custom/size/unit"],
});

function getStyleDictionaryConfig(brand, platform) {
  return {
    source: [`tokens/brands/${brand}/*.@(json|json5)`],
    platforms: {
      // WEB
      "custom/web": {
        transformGroup: "web-group",
        buildPath: `build/web/${brand}/js/`,
        files: [
          {
            destination: "module/all/all.module.js",
            format: "javascript/module",
          },
          {
            destination: "object/all/all.object.js",
            format: "javascript/object",
          },
          {
            destination: "es6/all/all.es6.js",
            format: "javascript/es6",
          },

          // Module
          {
            destination: "module/color/colors-hex.module.js",
            format: "javascript/module",
            filter: { $type: "color" },
          },
          {
            destination: "module/dimension/dimensions.module.js",
            format: "javascript/module",
            filter: { $type: "dimension" },
          },
          {
            destination: "module/typography/typography.module.js",
            format: "javascript/module",
            filter: { $type: "typography" },
          },
          {
            destination: "module/typography/fontFamily.module.js",
            format: "javascript/module",
            filter: { $type: "fontFamily" },
          },
          {
            destination: "module/typography/fontSize.module.js",
            format: "javascript/module",
            filter: { $type: "fontSize" },
          },
          {
            destination: "module/typography/fontWeight.module.js",
            format: "javascript/module",
            filter: { $type: "fontWeight" },
          },
          {
            destination: "module/transition/transition.module.js",
            format: "javascript/module",
            filter: { $type: "transition" },
          },
          {
            destination: "module/border/border.module.js",
            format: "javascript/module",
            filter: { $type: "border" },
          },
          {
            destination: "module/shadow/shadow.module.js",
            format: "javascript/module",
            filter: { $type: "shadow" },
          },
          {
            destination: "module/number/number.module.js",
            format: "javascript/module",
            filter: { $type: "number" },
          },

          // Object
          {
            destination: "object/typography/fontFamily.object.js",
            format: "javascript/object",
            filter: { $type: "fontFamily" },
          },
          {
            destination: "object/typography/fontSize.object.js",
            format: "javascript/object",
            filter: { $type: "fontSize" },
          },
          {
            destination: "object/typography/fontWeight.object.js",
            format: "javascript/object",
            filter: { $type: "fontWeight" },
          },
          {
            destination: "object/transition/transition.object.js",
            format: "javascript/object",
            filter: { $type: "transition" },
          },
          {
            destination: "object/border/border.object.js",
            format: "javascript/object",
            filter: { $type: "border" },
          },
          {
            destination: "object/shadow/shadow.object.js",
            format: "javascript/object",
            filter: { $type: "shadow" },
          },
          {
            destination: "object/number/number.object.js",
            format: "javascript/object",
            filter: { $type: "number" },
          },

          // es6
          {
            destination: "es6/typography/fontFamily.es6.js",
            format: "javascript/es6",
            filter: { $type: "fontFamily" },
          },
          {
            destination: "es6/typography/fontSize.es6.js",
            format: "javascript/es6",
            filter: { $type: "fontSize" },
          },
          {
            destination: "es6/typography/fontWeight.es6.js",
            format: "javascript/es6",
            filter: { $type: "fontWeight" },
          },
          {
            destination: "es6/transition/transition.es6.js",
            format: "javascript/es6",
            filter: { $type: "transition" },
          },
          {
            destination: "es6/border/border.es6.js",
            format: "javascript/es6",
            filter: { $type: "border" },
          },
          {
            destination: "es6/shadow/shadow.es6.js",
            format: "javascript/es6",
            filter: { $type: "shadow" },
          },
          {
            destination: "es6/number/number.es6.js",
            format: "javascript/es6",
            filter: { $type: "number" },
          },
        ],
      },

      // WEB - RGB
      "custom/web/rgb": {
        transformGroup: "web-group-rgb",
        buildPath: `build/web/${brand}/js/`,
        files: [
          {
            destination: "module/all/all-rgb.module.js",
            format: "javascript/module",
          },
          {
            destination: "object/all/all-rgb.object.js",
            format: "javascript/object",
          },
          {
            destination: "es6/all/all-rgb.es6.js",
            format: "javascript/es6",
          },

          // Module
          {
            destination: "module/color/colors-rgb.module.js",
            format: "javascript/module",
            filter: { $type: "color" },
          },

          // Object
          {
            destination: "object/color/colors-rgb.object.js",
            format: "javascript/object",
            filter: { $type: "fontFamily" },
          },

          // es6
          {
            destination: "es6/color/colors-rgb.es6.js",
            format: "javascript/es6",
            filter: { $type: "fontFamily" },
          },
        ],
      },

      // WEB - HSL
      "custom/web/hsl": {
        transformGroup: "web-group-hsl",
        buildPath: `build/web/${brand}/js/`,
        files: [
          {
            destination: "module/all/all-hsl.module.js",
            format: "javascript/module",
          },
          {
            destination: "object/all/all-hsl.object.js",
            format: "javascript/object",
          },
          {
            destination: "es6/all/all-hsl.es6.js",
            format: "javascript/es6",
          },

          // Module
          {
            destination: "module/color/colors-hsl.module.js",
            format: "javascript/module",
            filter: { $type: "color" },
          },

          // Object
          {
            destination: "object/color/colors-hsl.module.js",
            format: "javascript/object",
            filter: { $type: "fontFamily" },
          },

          // es6
          {
            destination: "es6/color/colors-hsl.module.js",
            format: "javascript/es6",
            filter: { $type: "fontFamily" },
          },
        ],
      },

      // WEB - REM
      "custom/web/rem": {
        transformGroup: "web-group-rem",
        buildPath: `build/web/${brand}/js/`,
        files: [

          {
            destination: "module/all/all-rem.module.js",
            format: "javascript/module",
          },
          {
            destination: "object/all/all-rem.object.js",
            format: "javascript/object",
          },
          {
            destination: "es6/all/all-rem.es6.js",
            format: "javascript/es6",
          },

          // Module
          {
            destination: "module/dimension/dimensions-rem.js",
            format: "javascript/module",
            filter: { $type: "dimension" },
          },
          {
            destination: "module/typography/typography-rem.js",
            format: "javascript/module",
            filter: { $type: "typography" },
          },
          {
            destination: "module/typography/fontSize-rem.js",
            format: "javascript/module",
            filter: { $type: "fontSize" },
          },
          {
            destination: "module/border/border-rem.js",
            format: "javascript/module",
            filter: { $type: "border" },
          },
          {
            destination: "module/shadow/shadow-rem.js",
            format: "javascript/module",
            filter: { $type: "shadow" },
          },

          // Object
          {
            destination: "object/dimension/dimensions-rem.js",
            format: "javascript/object",
            filter: { $type: "dimension" },
          },
          {
            destination: "object/typography/typography-rem.js",
            format: "javascript/object",
            filter: { $type: "typography" },
          },
          {
            destination: "object/typography/fontSize-rem.js",
            format: "javascript/object",
            filter: { $type: "fontSize" },
          },
          {
            destination: "object/border/border-rem.js",
            format: "javascript/object",
            filter: { $type: "border" },
          },
          {
            destination: "object/shadow/shadow-rem.js",
            format: "javascript/object",
            filter: { $type: "shadow" },
          },

          // ES6
          {
            destination: "es6/dimension/dimensions-rem.js",
            format: "javascript/es6",
            filter: { $type: "dimension" },
          },
          {
            destination: "es6/typography/typography-rem.js",
            format: "javascript/es6",
            filter: { $type: "typography" },
          },
          {
            destination: "es6/typography/fontSize-rem.js",
            format: "javascript/es6",
            filter: { $type: "fontSize" },
          },
          {
            destination: "es6/border/border-rem.js",
            format: "javascript/es6",
            filter: { $type: "border" },
          },
          {
            destination: "es6/shadow/shadow-rem.js",
            format: "javascript/es6",
            filter: { $type: "shadow" },
          },

        ],
      },

       // WEB - RGB/REM
       "custom/web/rgb/rem": {
        transformGroup: "web-group-rgb-rem",
        buildPath: `build/web/${brand}/js/`,
        files: [
          {
            destination: "module/all/all-rgb-rem.module.js",
            format: "javascript/module",
          },
          {
            destination: "object/all/all-rgb-rem.object.js",
            format: "javascript/object",
          },
          {
            destination: "es6/all/all-rgb-rem.es6.js",
            format: "javascript/es6",
          },
        ],
      },

      // WEB - HSL/REM
      "custom/web/hsl/rem": {
        transformGroup: "web-group-hsl-rem",
        buildPath: `build/web/${brand}/js/`,
        files: [
          {
            destination: "module/all/all-hsl-rem.module.js",
            format: "javascript/module",
          },
          {
            destination: "object/all/all-hsl-rem.object.js",
            format: "javascript/object",
          },
          {
            destination: "es6/all/all-hsl-rem.es6.js",
            format: "javascript/es6",
          },
        ],
      },

      // CSS
      "custom/css": {
        transformGroup: "css-group",
        buildPath: `build/web/${brand}/css/`,
        files: [
          {
            destination: "all/all.css",
            format: "css/variables",
          },
          {
            destination: "color/colors-hex.css",
            format: "css/variables",
            filter: { $type: "color" },
          },
          {
            destination: "dimension/dimensions.css",
            format: "css/variables",
            filter: { $type: "dimension" },
          },
          {
            destination: "typography/typography.css",
            format: "css/variables",
            filter: { $type: "typography" },
          },
          {
            destination: "typography/fontFamily.css",
            format: "css/variables",
            filter: { $type: "fontFamily" },
          },
          {
            destination: "typography/fontSize.css",
            format: "css/variables",
            filter: { $type: "fontSize" },
          },
          {
            destination: "typography/fontWeight.css",
            format: "css/variables",
            filter: { $type: "fontWeight" },
          },
          {
            destination: "transition/transition.css",
            format: "css/variables",
            filter: { $type: "transition" },
          },
          {
            destination: "border/border.css",
            format: "css/variables",
            filter: { $type: "border" },
          },
          {
            destination: "shadow/shadow.css",
            format: "css/variables",
            filter: { $type: "shadow" },
          },
          {
            destination: "number/number.css",
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
            destination: "all/all-rgb.css",
            format: "css/variables",
          },
          {
            destination: "color/colors-rgb.css",
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
            destination: "all/all-hsl.css",
            format: "css/variables",
          },
          {
            destination: "color/colors-hsl.css",
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
            destination: "all/all-rem.css",
            format: "css/variables",
          },
          {
            destination: "dimension/dimensions-rem.css",
            format: "css/variables",
            filter: { $type: "dimension" },
          },
          {
            destination: "typography/typography-rem.css",
            format: "css/variables",
            filter: { $type: "typography" },
          },
          {
            destination: "typography/fontSize-rem.css",
            format: "css/variables",
            filter: { $type: "fontSize" },
          },
          {
            destination: "border/border-rem.css",
            format: "css/variables",
            filter: { $type: "border" },
          },
          {
            destination: "shadow/shadow-rem.css",
            format: "css/variables",
            filter: { $type: "shadow" },
          },
        ],
      },

      // CSS - RGB/REM
      "custom/css/rgb/rem": {
        transformGroup: "css-group-rgb-rem",
        buildPath: `build/web/${brand}/css/`,
        files: [
          {
            destination: "all/all-rgb-rem.css",
            format: "css/variables",
          },
        ],
      },

      // CSS - HSL/REM
      "custom/css/hsl/rem": {
        transformGroup: "css-group-hsl-rem",
        buildPath: `build/web/${brand}/css/`,
        files: [
          {
            destination: "all/all-hsl-rem.css",
            format: "css/variables",
          },
        ],
      },

      // SCSS
      "custom/scss": {
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
      "custom/json": {
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
    "custom/web/rgb",
    "custom/web/hsl",
    "custom/web/rgb/rem",
    "custom/web/hsl/rem",
    "custom/web/rem",
    "custom/css",
    "custom/css/rgb",
    "custom/css/hsl",
    "custom/css/rgb/rem",
    "custom/css/hsl/rem",
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
