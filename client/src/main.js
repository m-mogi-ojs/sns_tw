import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import firebase from 'firebase'

Vue.config.productionTip = false
Vue.use(Buefy)
Vue.component('AuthedHeader', () => import('./components/AuthedHeader.vue'))

const firebaseConfig = {
  apiKey: 'AIzaSyBy66U0S5WIIiIv30hLG9azqiL1W_xGlg0',
  authDomain: 'm-mogi-ojs-twitter.firebaseapp.com',
  databaseURL: 'https://m-mogi-ojs-twitter.firebaseio.com',
  projectId: 'm-mogi-ojs-twitter',
  storageBucket: '',
  messagingSenderId: '775625246791',
  appId: '1:775625246791:web:f5a97bc87921efac788962'
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
