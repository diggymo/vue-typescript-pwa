// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
/**
 * cssの設定
 */
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'
Vue.use(Buefy);

/**
 * vuexの設定
 * 別ファイルにしたいが、別にすると`TypeError: this.$store is undefined`
 */
Vue.use(Vuex);

import axios from 'axios';
const LOGIN = "LOGIN";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGOUT = "LOGOUT";

const store = new Vuex.Store({
  state: {
    isLoggedIn: !!localStorage.getItem("token"),
    pending: true,
    count: 0
  },
  mutations: {
    [LOGIN](state) {
      state.pending = true;
    },
    [LOGIN_SUCCESS](state) {
      state.isLoggedIn = true;
      state.pending = false;
    },
    [LOGOUT](state) {
      state.isLoggedIn = false;
    },
    increment(state) {
      state.count++
    }
  },
  actions: {
    login({ commit }, creds) {
      // commitはコールバック関数
      // ローディング画面などを表示する場合に使用
      commit(LOGIN);
      // axios.get('').then(res => {
      //   localStorage.setItem("token", "###");
      // }).catch(err => {
      // });
    },
    logout({ commit }) {
      localStorage.removeItem("token");
      commit(LOGOUT);
    }
  }
});


Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  store
});