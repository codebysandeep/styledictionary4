import StyleDictionary from "style-dictionary";

// Reusable filter for color type tokens
const colorFilter = {
  $type: "color",
};

// Reusable file configurations
const createColorFile = (destination, format) => ({
  destination,
  format: "css/variables",
  filter: colorFilter,
});

// Reusable platform configuration
const createPlatform = (buildPath, transform) => ({
  transforms: ["attribute/cti", "name/kebab", transform],
  transformGroup: "css",
  buildPath: buildPath,
  files: [
    createColorFile("_baseColor.css", "css/variables"),
    createColorFile(`_color${transform.toUpperCase()}.css`, "css/variables"),
  ],
});

export default {
  hooks: {
    formats: {},
    transforms: {
      myTransform: {
        type: "name",
        transform: (token) => {
          console.log(`token: ${token.name}, type: ${token.value}`);
          return token.path.join("_").toUpperCase();
        },
      },
    },
  },
  source: ["tokens/**/*.@(json|json5)"],
  platforms: {
    // Define platforms with reusable configuration
    colorRGB: createPlatform("build/css/", "color/rgb"),
    colorHEX: createPlatform("build/css/", "color/hex"),
    colorHSL: createPlatform("build/css/", "color/hsl"),
    css: {
      transformGroup: "css",
      buildPath: "build/css/",
      files: [
        createColorFile("_base.css", "css/variables"),
        createColorFile("_colorHEX.css", "css/variables"),
        createColorFile("_colorHSL.css", "css/variables"),
      ],
    },
  },
};
