/* eslint-disable */
import { createApp } from "vue";
import App from "./App.vue";

import { API } from "@aws-amplify/api";
import awsconfig from "./aws-exports";
// import { applyPolyfills, defineCustomElements } from "aws-amplify";
API.configure(awsconfig);

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
