import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
const EventBus = new Vue();
// Object.defineProperties(Vue.prototype, {
//   $bus: {
//     get: function () {
//       return EventBus
//     }
//   }
// })
export default EventBus;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
