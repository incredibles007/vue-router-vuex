import Vue from 'vue';
import { Store } from 'vuex';
import VueRouter from 'vue-router';
import { sync } from '../index'

const store = new Store({
  state: {}
});

const router = new VueRouter({
  routes: []
})

sync(store, router, {
  moduleName: 'foo'
})

const app = new Vue({
  store,
  router
})
