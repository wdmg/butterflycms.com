import Vue from "vue";
import App from "./App.vue";
import i18n from './i18n';
import router from "./router";
import Argon from "./plugins/argon-kit";
import './registerServiceWorker';

Vue.config.productionTip = false;
Vue.use(Argon);

new Vue({
  i18n,
  router,
  render: h => h(App)
}).$mount("#app");