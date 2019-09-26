import Vue from 'vue'
import Vuex from 'vuex'
import {db} from '@/main'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loading: true,
    filter: 'all',
    posts: [],
  },
  getters: {
    getPosts: state => {
      return state.posts;
    }
  },
  mutations: {
    getPosts: state => {
      let items = []
      db.collection('items20').orderBy('created_at','desc').onSnapshot((snapshot) => {
        let posts = []
        snapshot.forEach((doc) => {
          console.log(doc);
          posts.push({ id: doc.id, title: doc.data().title, content: doc.data().content })
        })
        state.posts = posts
      })
    }
  },
  actions: {
    getPosts: context =>{
      context.commit('getPosts');
    }
  }
})
