import React from "react";
// import { withThemesProvider } from "themeprovider-storybook";
// import light from "../src/theme/light";
// import dark from "../src/theme/dark";
// import ResetCSS from "../src/ResetCSS";
// import { ModalProvider } from "../src/widgets/Modal";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: "fullscreen",
};

// const globalDecorator = (StoryFn) => (
//   <div>
//     <ResetCSS />
//     <StoryFn />
//   </div>
// );

// const themes = [
//   {
//     name: "Light",
//     backgroundColor: light.colors.background,
//     ...light,
//   },
//   {
//     name: "Dark",
//     backgroundColor: dark.colors.background,
//     ...dark,
//   },
// ];

// export const decorators = [globalDecorator, withThemesProvider(themes)];
export const decorators = [];
