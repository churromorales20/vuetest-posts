<template>
  <div class="signup-view">
    <div class="signup-view-form">
      <div class="form-field">
        <label for="username">Email:</label>
        <input type="text" name="username" id="username" v-model="username">
      </div>
      <div class="form-field">
        <label for="password">Password:</label>
        <input type="password" name="password" id="password" v-model="password">
      </div>
      <div class="form-field">
        <label for="passwordconf">Password confirmation:</label>
        <input type="password" name="passwordconf" id="passwordconf" v-model="passwordconf">
      </div>
      <div v-if="error != ''" class="error-message">
        <p>{{error}}</p>
      </div>
      <div class="form-buttons-container">
        <span class="btn btn-default blue" @click="createAccount()">Create account</span>
        <span class="btn btn-lg red" @click="$router.go(-1)">Cancel</span>
      </div>
    </div>
  </div>
</template>
<script>
const validateEmail = (email) => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
import firebase from 'firebase'
export default {
  name: 'SignUp',
  data: function(){
    return {
      username: '',
      password: '',
      passwordconf: '',
      error: ''
    }
  },
  methods:{
    createAccount(){
      console.log('OBLIGACION',this.username.length);
      if(this.username.length < 4){
        this.error = 'Email should be at least 4 chars';
        return false;
      }else if(!validateEmail(this.username)){
        this.error = 'Email seems invalid';
        return false;
      }else if(this.password.length < 6 ){
        this.error = 'Password should be at least 6 chars';
        return false;
      }else if(this.password != this.passwordconf){
        this.error = "Password doesn't match";
        return false;
      }
      this.error = '';
      firebase.auth().createUserWithEmailAndPassword(this.username, this.password).then(
        (user) => {
          this.$router.push({name:'home'});
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }
}
</script>
<style lang="scss">
  .signup-view{
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
