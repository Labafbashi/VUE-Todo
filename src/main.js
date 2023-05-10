/* eslint-disable */
import { createApp } from "vue";
import App from "./App.vue";

import Amplify from "aws-amplify";
import awsmobile from "./aws-exports";
// import { applyPolyfills, defineCustomElements } from "aws-amplify";

createApp(App).mount("#app");
// Amplify.configure({
//   awsmobile,
//   Analytics: {
//     disabled: true,
//   },
// });
// applyPolyfills().then(() => {
//   defineCustomElements(window);
// });
