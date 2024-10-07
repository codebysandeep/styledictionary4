import StyleDictionary from "style-dictionary";

// Helper function to register multiple transform groups
function registerTransformGroups(groups) {
  groups.forEach(group => {
    StyleDictionary.registerTransformGroup(group);
  });
}

// Helper function to register multiple transforms
function registerTransforms(transforms) {
  transforms.forEach(transform => {
    StyleDictionary.registerTransform(transform);
  });
}

// CUSTOM TRANSFORMS
const customTransforms = [
  {
    name: "custom/size/unit",
    type: "value",
    filter: (token) => (
      ["$fontSize", "$dimension"].includes(token.$type) || ["px", "rem"].includes(token.attributes.unit)
    ),
    transform: (token) => `${token.$value}${token.attributes.unit}`,
  },
  {
    name: "custom/size/unit/rem",
    type: "value",
    filter: (token) => (
      ["$fontSize", "$dimension"].includes(token.$type) || ["px", "rem"].includes(token.attributes.unit)
    ),
    transform: (token) => `${token.$value}rem`,
  }
];

registerTransforms(customTransforms);

// CUSTOM TRANSFORM GROUPS
const baseTransforms = [
  "attribute/cti", "name/camel", "custom/size/unit", "color/hex"
];

const baseTransformGroups = [
  // Color
  { name: "custom-base-color-hex", transforms: [...baseTransforms, "color/hex"] },
  { name: "custom-base-color-rgb", transforms: [...baseTransforms, "color/rgb"] },
  { name: "custom-base-color-hsl", transforms: [...baseTransforms, "color/hsl"] },

  // Size
  { name: "custom-base-size-px", transforms: [...baseTransforms, "size/px"] },
  { name: "custom-base-size-rem", transforms: [...baseTransforms, "size/pxToRem"] },
];

const webTransformGroups = [
  { name: "web-group", transforms: baseTransforms },
  { name: "web-group-rgb", transforms: [...baseTransforms, "color/rgb"] },
  { name: "web-group-hsl", transforms: [...baseTransforms, "color/hsl"] },
  { name: "web-group-rem", transforms: [...baseTransforms, "size/pxToRem"] },
  { name: "web-group-rgb-rem", transforms: [...baseTransforms, "size/pxToRem", "color/rgb"] },
  { name: "web-group-hsl-rem", transforms: [...baseTransforms, "size/pxToRem", "color/hsl"] },

  { name: "custom-base-js-hex", transforms: [...baseTransforms, "color/hex"] },
  { name: "custom-base-js-rgb", transforms: [...baseTransforms, "color/rgb"] },
  { name: "custom-base-js-hsl", transforms: [...baseTransforms, "color/hsl"] },

];

const cssTransforms = [
  "attribute/cti", "name/kebab", "time/seconds", "html/icon", "custom/size/unit", 
  "color/hex8", "asset/url", "fontFamily/css", "cubicBezier/css", 
  "strokeStyle/css/shorthand", "border/css/shorthand", 
  "typography/css/shorthand", "transition/css/shorthand", "shadow/css/shorthand"
];

const cssTransformGroups = [
  { name: "css-group", transforms: cssTransforms },
  { name: "css-group-rgb", transforms: [...cssTransforms, "color/rgb"] },
  { name: "css-group-hsl", transforms: [...cssTransforms, "color/hsl"] },
  { name: "css-group-rem", transforms: [...cssTransforms, "size/pxToRem", "color/hex"] },
  { name: "css-group-rgb-rem", transforms: [...cssTransforms, "size/pxToRem", "color/rgb"] },
  { name: "css-group-hsl-rem", transforms: [...cssTransforms, "size/pxToRem", "color/hsl"] }
];

const otherTransformGroups = [
  { name: "scss-group", transforms: ["attribute/cti", "name/kebab", "custom/size/unit"] },
  { name: "json-group", transforms: ["attribute/cti", "name/kebab", "custom/size/unit"] }
];

registerTransformGroups([...baseTransformGroups,...webTransformGroups, ...cssTransformGroups, ...otherTransformGroups]);

function getStyleDictionaryConfig(brand, platform) {
  const platformToTransformGroup = {

    "custom/base/hex": "custom-base-color-hex",
    "custom/base/rgb": "custom-base-color-rgb", 
    "custom/base/hsl": "custom-base-color-hsl",
    "custom/base/size/px": "custom-base-size-px",
    "custom/base/size/rem": "custom-base-size-rem",


    // "custom/web": "web-group",
    // "custom/web/rgb": "web-group-rgb",
    // "custom/web/hsl": "web-group-hsl",
    // "custom/web/rem": "web-group-rem",
    // "custom/web/rgb/rem": "web-group-rgb-rem",
    // "custom/web/hsl/rem": "web-group-hsl-rem",
  };

  // Map formats based on platform
  const platformFiles = {

    "custom/base/hex": [
      // javascript/es6
      // color
      { destination: "js/es6/color/color-hex.js", format: "javascript/es6", filter: { $type: "color" } },
      // javascript/object
      // color
      { destination: "js/object/color/color-hex.js", format: "javascript/object", filter: { $type: "color" } },
      // javascript/module
      // color
      { destination: "js/module/color/color-hex.js", format: "javascript/module", filter: { $type: "color" } },
    ],

    "custom/base/rgb": [
      // javascript/es6
      // color
      { destination: "js/es6/color/color-rgb.js", format: "javascript/es6", filter: { $type: "color" } },
      // javascript/object
      // color
      { destination: "js/object/color/color-rgb.js", format: "javascript/object", filter: { $type: "color" } },
      // javascript/module
      // color
      { destination: "js/module/color/color-rgb.js", format: "javascript/module", filter: { $type: "color" } },
    ],

    "custom/base/hsl": [
      // javascript/es6
      // color
      { destination: "js/es6/color/color-hsl.js", format: "javascript/es6", filter: { $type: "color" } },
      // javascript/object
      // color
      { destination: "js/object/color/color-hsl.js", format: "javascript/object", filter: { $type: "color" } },
      // javascript/module
      // color
      { destination: "js/module/color/color-hsl.js", format: "javascript/module", filter: { $type: "color" } },
    ],

    "custom/base/size/px": [
      // javascript/es6
      // dimension
      { destination: "js/es6/dimension/dimension-px.js", format: "javascript/es6", filter: { $type: "dimension" } },
      // typography
      { destination: "js/es6/typography/fontSize-px.js", format: "javascript/es6", filter: { $type: "fontSize" } },
      // border
      { destination: "js/es6/border/border-px.js", format: "javascript/es6", filter: { $type: "border" } },
      // shadow
      { destination: "js/es6/shadow/shadow-px.js", format: "javascript/es6", filter: { $type: "shadow" } },

      // javascript/object
      // dimension
      { destination: "js/object/dimension/dimension-px.js", format: "javascript/object", filter: { $type: "dimension" } },
      // typography
      { destination: "js/object/typography/fontSize-px.js", format: "javascript/object", filter: { $type: "fontSize" } },
      // border
      { destination: "js/object/border/border-px.js", format: "javascript/object", filter: { $type: "border" } },
      // shadow
      { destination: "js/object/shadow/shadow-px.js", format: "javascript/object", filter: { $type: "shadow" } },    

      // javascript/module
      // dimension
      { destination: "js/module/dimension/dimension-px.js", format: "javascript/module", filter: { $type: "dimension" } },
      // typography
      { destination: "js/module/typography/fontSize-px.js", format: "javascript/module", filter: { $type: "fontSize" } },
      // border
      { destination: "js/module/border/border-px.js", format: "javascript/module", filter: { $type: "border" } },
      // shadow
      { destination: "js/module/shadow/shadow-px.js", format: "javascript/module", filter: { $type: "shadow" } },
    ],

    "custom/base/size/rem": [
      // javascript/es6
      // dimension
      { destination: "js/es6/dimension/dimension-rem.js", format: "javascript/es6", filter: { $type: "dimension" } },
      // typography
      { destination: "js/es6/typography/fontSize-rem.js", format: "javascript/es6", filter: { $type: "fontSize" } },
      // border
      { destination: "js/es6/border/border-rem.js", format: "javascript/es6", filter: { $type: "border" } },
      // shadow
      { destination: "js/es6/shadow/shadow-rem.js", format: "javascript/es6", filter: { $type: "shadow" } },
      
      // javascript/object
      // dimension
      { destination: "js/object/dimension/dimension-rem.js", format: "javascript/object", filter: { $type: "dimension" } },
      // typography
      { destination: "js/object/typography/fontSize-rem.js", format: "javascript/object", filter: { $type: "fontSize" } },
      // border
      { destination: "js/object/border/border-rem.js", format: "javascript/object", filter: { $type: "border" } },
      // shadow
      { destination: "js/object/shadow/shadow-rem.js", format: "javascript/object", filter: { $type: "shadow" } },

      // javascript/module
      // dimension
      { destination: "js/module/dimension/dimension-rem.js", format: "javascript/module", filter: { $type: "dimension" } },
      // typography
      { destination: "js/module/typography/fontSize-rem.js", format: "javascript/module", filter: { $type: "fontSize" } },
      // border
      { destination: "js/module/border/border-rem.js", format: "javascript/module", filter: { $type: "border" } },
      // shadow
      { destination: "js/module/shadow/shadow-rem.js", format: "javascript/module", filter: { $type: "shadow" } },
    ],

    "custom/base/typography": [
      // javascript/es6
      // typography
      { destination: "js/es6/typography/typography.js", format: "javascript/es6", filter: { $type: "typography" } },
      { destination: "js/es6/typography/fontFamily.js", format: "javascript/es6", filter: { $type: "fontFamily" } },
      { destination: "js/es6/typography/fontWeight.js", format: "javascript/es6", filter: { $type: "fontWeight" } },

      // javascript/object
      // typography
      { destination: "js/object/typography/typography.js", format: "javascript/object", filter: { $type: "typography" } },
      { destination: "js/object/typography/fontFamily.js", format: "javascript/object", filter: { $type: "fontFamily" } },
      { destination: "js/object/typography/fontWeight.js", format: "javascript/object", filter: { $type: "fontWeight" } },

      // javascript/module
      // typography
      { destination: "js/module/typography/typography.js", format: "javascript/module", filter: { $type: "typography" } },
      { destination: "js/module/typography/fontFamily.js", format: "javascript/module", filter: { $type: "fontFamily" } },
      { destination: "js/module/typography/fontWeight.js", format: "javascript/module", filter: { $type: "fontWeight" } },
    ],

    "custom/base/number": [
      // javascript/es6
      // number
      { destination: "js/es6/number/number.js", format: "javascript/es6", filter: { $type: "number" } },
      
      // javascript/object
      // number
      { destination: "js/object/number/number.js", format: "javascript/object", filter: { $type: "number" } },

      // javascript/module
      // number
      { destination: "js/module/number/number.js", format: "javascript/module", filter: { $type: "number" } },
    ],

    // "custom/web": [
    //   { destination: "es6/all/all.es6.js", format: "javascript/es6" },
    //   { destination: "es6/color/colorsHEX.js", format: "javascript/es6", filter: { $type: "color" } },
    //   { destination: "es6/dimension/dimensionsPX.js", format: "javascript/es6", filter: { $type: "dimension" } },
    // ],
    // "custom/web/rgb": [
    //   { destination: "es6/all/all-rgb.es6.js", format: "javascript/es6" },
    //   { destination: "es6/color/colorsGRB.js", format: "javascript/es6", filter: { $type: "color" } },
    // ],
    // "custom/web/hsl": [
    //   { destination: "es6/all/all-hsl.es6.js", format: "javascript/es6" },
    //   { destination: "es6/color/colorsHSL.js", format: "javascript/es6", filter: { $type: "color" } },
    // ],
    // "custom/web/rem": [
    //   { destination: "es6/all/all-rem.es6.js", format: "javascript/es6" },
    //   { destination: "es6/dimension/dimensionsREM.js", format: "javascript/es6", filter: { $type: "dimension" } }
    // ],
    // "custom/web/rgb/rem": [
    //   { destination: "es6/all/all-rgb-rem.es6.js", format: "javascript/es6" }
    // ],
    // "custom/web/hsl/rem": [
    //   { destination: "es6/all/all-hsl-rem.es6.js", format: "javascript/es6" }
    // ],
  };

  return {
    source: [`tokens/brands/${brand}/*.@(json|json5)`],
    platforms: {
      [platform]: {
        transformGroup: platformToTransformGroup[platform],
        buildPath: `build/${brand}/${platform.split('/')[1]}/`,
        files: platformFiles[platform] // Correctly assign file formats based on platform
      }
    }
  };
}

console.log("Build started...");

["brand-1"].forEach((brand) => {
  const platforms = [
    "custom/base/hex", 
    "custom/base/rgb", 
    "custom/base/hsl",
    "custom/base/hex",
    "custom/base/rgb",
    "custom/base/hsl",
    "custom/base/size/px",
    "custom/base/size/rem",
    
    // "custom/web", "custom/web/rgb", "custom/web/hsl", "custom/web/rem", "custom/web/rgb/rem", "custom/web/hsl/rem"
  ];

  platforms.forEach((platform) => {
    console.log(`\nProcessing: [${platform}] [${brand}]`);
    const sd = new StyleDictionary(getStyleDictionaryConfig(brand, platform));
    sd.buildPlatform(platform);
  });
});

console.log("Build completed!");
