import Vue from 'vue'
import VueRouter from 'vue-router'
import firebase from 'firebase'
import { store } from './store'
import App from './App.vue'
import Login from './components/Login.vue'
import Posts from './components/Posts.vue'
import SignUp from './components/SignUp.vue'
Vue.config.productionTip = false
const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/login', component: Login, name: 'login' },
    { path: '/signup', component: SignUp, name: 'signup' },
    { path: '/', component: Posts, name: 'home' }
  ]
})
router.beforeEach((to, from, next) => {
  const authUser = firebase.auth().currentUser;
  if(!authUser && to.name != 'login' && to.name != 'signup'){
    next('login');
  }else{
    next();
  }
  console.log((to, from));
})
var firebaseConfig = {
  apiKey: "AIzaSyCIOV1AiVKDINvru8NlKIYOD_pl1p1Lg0s",
  authDomain: "vue-firebase-posts.firebaseapp.com",
  databaseURL: "https://vue-firebase-posts.firebaseio.com",
  projectId: "vue-firebase-posts",
  storageBucket: "",
  messagingSenderId: "105197035490",
  appId: "1:105197035490:web:c5297510db09bb4caae3bb"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
Vue.use(VueRouter)
let app = null;
firebase.auth().onAuthStateChanged(function(user) {
  if(!app){
    app = new Vue({
      render: h => h(App),
      store: store,
      router: router,
    }).$mount('#app')
  }
});
