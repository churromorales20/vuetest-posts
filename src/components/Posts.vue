<template> 
  <div class="home">
    <div class="home-header">
      Hello there <a href="#" @click="logout()">Logout</a>
    </div>
    <div class="home-post-form">
      <div class="form-field">
        <label for="title">Title:</label>
        <input type="text" name="title" id="title" v-model="post_title">
      </div>
      <div class="form-field">
        <label for="content">Your post:</label>
        <textarea id="content" name="content" v-model="post_content" rows="8" cols="80"></textarea>
      </div>
      <div class="form-buttons-container">
        <span class="btn btn-lg blue" @click="insertPost()">Crear Post</span>
      </div>
    </div>
    <h3>Post List</h3>
    <div class="home-post-list">
      <div class="home-post-list-item" v-for="post in this.$store.getters.getPosts" :key="post.id">
        <h4 class="post-title">{{ post.title }}</h4>
        <p class="post-content">{{ post.content }}</p>
        <span class="post-comments">See comments</span>
      </div>
    </div>
  </div>
</template>
<script>
import { db } from '@/main'
import firebase from 'firebase'
export default {
  data: function(){
    return {
      post_title : '',
      post_content : '',
      user: null,
    }
  },
  beforeCreate: function(){
    this.$store.dispatch('getPosts');
  },
  methods:{
    logout(){
      firebase.auth().signOut().then(() =>{
        this.$router.push({name: 'login'});
      });
    },
    insertPost(){
      this.post_title = '';
      this.post_content = '';
      db.collection('posts').add({
        title: this.post_title,
        content : this.post_content,
        created_at: Date.now()
      }).then((response) => {
        if (response) {
          console.log('response',response);
        }
      }).catch((error) => {
        console.log('error',error);
      });
    }
  }
}
</script>
<style lang="scss">
  .home{
    &-header{
      padding: 2rem 1rem;
      background-color: #cececece;
    }
    &-post{
      &-form{
        width: 20vw;
        margin: 2rem auto 0px;
      }
      &-list{
        margin: auto;
        width: 40vw;
        &-item{
          background-color: #eee;
          padding: 1rem 1rem 2rem;
          width: 100%;
          margin-bottom: 1rem;
          .post{
            &-title{
              font-size: 1.2rem;
              text-align: left;
            }
            &-content{
              font-size: 1rem;
              text-align: left;
            }
            &-comments{
              font-size: .9rem;
              cursor: pointer;
              float: right;
            }
          }
        }
      }
    }
  }
</style>
