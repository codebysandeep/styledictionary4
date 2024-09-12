import StyleDictionary from "style-dictionary";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

console.log("Build started...");
console.log("\n==============================================");

// REGISTER THE CUSTOM TRANSFORMS

StyleDictionary.registerTransform({
  name: "size/px", // notice: the name is an override of an existing predefined method (yes, you can do it)
  type: "value",
  filter: (token) => token.type === "fontSize" || token.type === "dimension",
  transform: ({ value }) => `${value}px`,
});

StyleDictionary.registerFilter({
  name: "colors-only",
  type: "value",
  filter: (token) => { 
    console.log(token.type);
    return token.$type === "color"
  },
});
StyleDictionary.registerFilter({
  name: "fontSize-only",
  filter: (token) => token.type === "fontSize",
});
StyleDictionary.registerFilter({
  name: "dimension-only",
  filter: (token) => token.type === "dimension",
});

StyleDictionary.registerTransformGroup({
  name: "custom/web",
  transforms: ["attribute/cti", "name/camel", "color/rgb", "size/px"],
});

StyleDictionary.registerTransformGroup({
  name: "custom/css",
  transforms: ["attribute/cti", "name/kebab", "color/hex", "size/rem"],
});

StyleDictionary.registerTransformGroup({
  name: "custom/scss",
  // this is to show one possibility for adding a few transforms to a pre-defined group
  // (however, we suggest to use the previous approach, which is more explicit and clear)
  transforms: StyleDictionary.hooks.transformGroups.scss.concat([
    "attribute/cti",
    "name/kebab",
    "color/hsl-4",
    "size/px",
  ]),
});

// APPLY THE CONFIGURATION
// IMPORTANT: the registration of custom transforms
// needs to be done _before_ applying the configuration
const sd = new StyleDictionary(__dirname + "/config.json");

// FINALLY, BUILD ALL THE PLATFORMS
await sd.buildAllPlatforms();

console.log("\n==============================================");
console.log("\nBuild completed!");
