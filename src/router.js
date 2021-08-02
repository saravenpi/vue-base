import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home";
import About from "./views/About";
Vue.use(Router);


const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      props: false
    },
    {
      path: "/about",
      name: "about",
      component: About,
      props: false
    }
  ]
});

export default router;
