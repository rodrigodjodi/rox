import Vue from "vue";
import Router from "vue-router";
import Home from "./views/HomeView.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/apartamentos",
      name: "apartamentos",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "tour" */ "./views/ApartamentosView.vue")
    },
    {
      path: "/apartamentos/:ap",
      name: "apartamento",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "tour" */ "./views/ApView.vue")
    },
    {
      path: "/areascomuns",
      name: "areascomuns",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "tour" */ "./views/AreasComunsView.vue")
    }
  ]
});
