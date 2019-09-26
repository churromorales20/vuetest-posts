<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
}
</script>

<style lang="scss">
$blue-color : #575fef;
$red-color: #d84949;
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #484747;
  font-size: 16px;
}
body{
  margin: 0px;
  padding: 0px;
}
.form{
  &-buttons-container{
    margin-top: 1rem;
    display: flex;
    justify-content: space-around;
  }
  &-field{
    text-align: left;
    margin-bottom: 10px;
    margin-left: -15px;
    margin-right: -15px;
    label{
      display: block;
      margin-bottom: 5px;
      font-size: .9rem;
      font-weight: 600;
    }
    input, textarea{
      width: 96%;
      border-radius: 5px;
      padding: 10px 5px;
      border: 2px solid #adadad;
    }
  }
}
.error-message{
  p{
    text-align: left;
    color: #da1c1c;
    font-weight: 600;
  }
}
.btn{
  padding: 10px;
  background-color: #FFFFFF;
  border-radius: 20px;
  font-size: .9rem;
  cursor: pointer;
  color: #ffffff;
  &.btn-lg{
    padding: 10px 40px;
  }
  &.blue{
    background-color:$blue-color;
  }
  &.red{
    background-color:$red-color;
  }
}
</style>
