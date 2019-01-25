import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import store from "./store";
//import "./registerServiceWorker";
import VueAnalytics from "vue-analytics";

Vue.config.productionTip = false;
Vue.filter("currency", function(value) {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
});
const isProd = process.env.NODE_ENV === "production";
Vue.use(VueAnalytics, {
  id: "UA-133197885-1",
  router,
  debug: {
    enabled: !isProd,
    sendHitTask: isProd
  }
});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
