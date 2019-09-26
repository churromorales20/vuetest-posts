<template>
  <div class="login-view">
    <div class="login-view-form">
      <div class="form-field">
        <label for="username">Email:</label>
        <input type="text" name="username" id="username" v-model="username">
      </div>
      <div class="form-field">
        <label for="password">Password:</label>
        <input type="password" name="password" id="password" v-model="password">
      </div>
      <div v-if="error != ''" class="error-message">
        <p>{{error}}</p>
      </div>
      <div class="form-buttons-container">
        <span class="btn btn-lg blue" @click="mkLogin()">Login</span>
        <span class="btn btn-default red" @click="$router.push('signup')">Create account</span>
      </div>
    </div>
  </div>
</template>
<script>
import firebase from 'firebase'
export default {
  name: 'Login',
  data: function(){
    return {
      username: '',
      password: '',
      error: ''
    }
  },
  mounted: function(){
    console.log(this.$router);
  },
  methods:{
    mkLogin(){
      firebase.auth().signInWithEmailAndPassword(this.username, this.password).then(
        (user) => {
          this.error = '';
          this.$router.push({name:'home'});
        },
        (err) => {
          this.error = 'Ooops ' + err.message
        }
      );
    }
  }
}
</script>
<style lang="scss">
  .login-view{
    display: flex;
    justify-content: center;
    height: 100vh;
    align-items: center;
    background-color: #FFFFFF;
    &-form{
      background-color: #e4e3e3;
      flex-wrap: wrap;
      width: 30vw;
      min-width: 300px;
      padding: 30px;
      border-radius: 10px;
    }
  }

</style>
