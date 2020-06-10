import Vue from "vue";
import VueRouter from "vue-router";


import VueAxios from "vue-axios";
import axios from "axios";

import App from "./App.vue";
import TaskList from "./components/TaskList.vue";
import CreateTask from "./components/CreateTask.vue";

Vue.use(VueRouter);


Vue.use(VueAxios, axios);

const routes = [
  {
    name: "home",
    path: "/",
    component: TaskList
  },
  {
    name: "TaskList",
    path: "/task_list",
    component: TaskList
  },
  {
    name: "CreateTask",
    path: "/create_task",
    component: CreateTask
  }
];

const router = new VueRouter({ mode: "history", routes: routes });

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router
}).$mount("#app");