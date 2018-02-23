<template>
  <div id="app">
      <link href="https://use.fontawesome.com/releases/v5.0.6/css/all.css" rel="stylesheet">
        <router-view v-on:login="login" v-on:logout="logout"></router-view>
      </transition>        
      <b-loading :active.sync="isLoading" :canCancel="true"></b-loading>
  </div>
</template>

<script>
import axios from './axios/myAxios'

export default {
  name: 'app',
  data: function(){
    return {
      isLoading: false
    }
  },
   methods: {
     /**
      * ログイン
      */
    login (username, password) {
      this.isLoading = true
      console.log(username)
      console.log(password)
      axios.get( 'https://qiita.com/api/v2/users/diggymo/items')
      .then(res => {
        console.log("#OKOK")
        console.log(res)
        localStorage.setItem('jwt-token', 'ABCDEFG')
        this.isLoading = false
      })
      .catch(res=> {
        console.log("NGNG")
        console.log(res)
        this.isLoading = false
      })
      this.$router.push({path: "users"})
      this.$toast.open({
        duration: 3000,
        message: `ログインしました`,
        position: 'is-bottom',
        type: 'is-danger'
      })
    },

    /**
     * ログアウト
     */
    logout () {
      this.isLoading = true
      localStorage.removeItem('jwt-token')
      console.log("#######")
      this.isLoading = false 
      this.$router.push({path: "/session"})
      this.$toast.open({
        duration: 3000,
        message: `ログアウトしました`,
        position: 'is-bottom',
        type: 'is-danger'
      })
    },
     /**
     * ログアウト
     */
    signUp (username, password, email) {
      this.isLoading = true
      axios.get( 'https://qiita.com/api/v2/users/diggymo/items')
      .then(res => {
        console.log("#OKOK")
        console.log(res)
        localStorage.setItem('jwt-token', 'ABCDEFG')
        this.isLoading = false
      })
      .catch(res=> {
        console.log("NGNG")
        console.log(res)
        this.isLoading = false
      })
      this.isLoading = false
    }
  }
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
  margin-top: 40px;
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495e;
  color: #ffffff;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: 0.02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}
</style>
