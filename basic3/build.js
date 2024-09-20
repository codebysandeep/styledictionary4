import StyleDictionary from "style-dictionary";

export default {
  hooks: {
    formats: {},
    transforms: {
        // Now we can use the transform 'myTransform' below
        myTransform: {
          type: 'name',
          transform: (token) => { 
            console.log(`token: ${token.name}, type: ${token.value}`);
            return token.path.join('_').toUpperCase() 
            },
        },
      },
  },
  source: ["tokens/**/*.@(json|json5)"],
  platforms: {
    css: {
      //   transforms: StyleDictionary.hooks.transformGroups.scss.concat("color/rgb"),
      //   transforms: ['attribute/cti','myTransform','color/rgb'],
      transformGroup: "css",
      buildPath: "build/css/",
      files: [
        {
          destination: "_base.css",
          format: "css/variables",
          filter: {
            $type: "base",
          },
        },
        {
          destination: "_colorRGB.css",
          format: "css/variables",
          filter: {
            $type: "color",
          },
        },
        {
          destination: "_colorHEX.css",
          format: "css/variables",
          filter: {
            $type: "color",
          },
        },
        {
          destination: "_colorHSL.css",
          format: "css/variables",
          filter: {
            $type: "color",
          },
        },
      ],
    },
  },
};
