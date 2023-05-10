import { createApp } from "vue";
import App from "./App.vue";

import Amplify from "aws-amplify";
import awsmobile from "./aws-exports";

createApp(App).mount("#app");
Amplify.configure({
    awsmobile,
    Analytics: { 
        disabled: true
    }
 });