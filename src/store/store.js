import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";

let tthiti_api = "https://tthiti-api.herokuapp.com/api/task/";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    tasks: []
  },

  mutations: {
    fetchTask(state, { res }) {
      state.tasks = res.data;
    },
    addTask(state, { payload }) {
      state.tasks.push(payload);
    },
    deleteTask(state, { payload }) {
      state.tasks.splice(payload.index, 1);
    },
    editTask(state, { payload }) {
      state.tasks[payload.index].task = payload.task;
      state.tasks[payload.index].date = payload.date;
      state.tasks[payload.index].dueDate = payload.dueDate;
    }
  },

  actions: {
    async fetchTask({ commit }) {
      await Axios.get(tthiti_api)
        .then(res => commit("fetchTask", { res }))
        .catch(err => alert(err));
    },
    async addTask({ commit }, payload) {
      await Axios.post(tthiti_api, payload)
        .then(() => commit("addTask", { payload }))
        .catch(err => alert(err));
    },
    async deleteTask({ commit }, payload) {
      alert("ลบ");
      await Axios.delete(tthiti_api + payload._id)
        .then(() => commit("deleteTask", { payload }))
        .catch(err => alert(err));
    },
    async editTask({ commit }, payload) {
      await Axios.put(tthiti_api + payload._id, payload)
        .then(() => commit("editTask", { payload }))
        .catch(err => alert(err));
    }
  },

  getters: {
    tasks: state => state.tasks
  }
});