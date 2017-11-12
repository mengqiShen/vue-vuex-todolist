// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import {store} from './vuex/store'
import router from './router'
import './assets/jquery-3.2.1.js'
import './assets/css/bootstrap.min.css'
import './assets/js/bootstrap.min.js'
import ToolBar from './components/ToolBar.vue'
import NoteList from './components/NoteList.vue'
import EditorArea from './components/EditorArea.vue'
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  store: store,
  el: '#app',
  router,
  template: '<App/>',
  components: { App, ToolBar, NoteList}
})
