<template>
  <b-navbar v-if="isSigned()" class="Header" type="is-light">
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img src="../assets/logo.svg" width="32" height="32">
      </b-navbar-item>
    </template>
    <template slot="start">
    <b-navbar-item href="/">about</b-navbar-item>
    <b-navbar-item href="/home" active>home</b-navbar-item>
    <b-navbar-item href="/search">search</b-navbar-item>
    </template>
    <template slot="end">
      <b-navbar-item tag="div">
        {{getAccountName()}}さん
      </b-navbar-item>
      <b-navbar-item tag="div">
        <a @click="signOut" class="button is-light">ログアウト</a>
      </b-navbar-item>
    </template>
  </b-navbar>
  <b-navbar v-else>
    <template slot="brand">
      <b-navbar-item href="/">
        <ul>
          <li><router-link to="/">top</router-link></li>
          <li><router-link to="/home">home</router-link></li>
          <li><router-link to="/signin">signin</router-link></li>
          <li><router-link to="/signup">signup</router-link></li>
          <li><router-link to="/search">search</router-link></li>
          <!--<li>{{getAccountName()}}</li>-->
        </ul>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
import firebase from 'firebase/app'

export default {
  name: 'Header',
  data () {
    return {
      user: {}
    }
  },
  methods: {
    signOut: async function () {
      let router = this.$router
      let isSuccessPush = false
      await firebase.auth().signOut().then(async function () {
        isSuccessPush = true
      })
      if (isSuccessPush) {
        router.push({ name: 'about' })
      }
    },
    isSigned: function() {
      return this.user.user
    },
    getAccountName: function() {
      return this.user.user ? this.user.user.email : null
    }
  },
  created() {
    let _this = this
    firebase.auth().onAuthStateChanged(function(user){
      //_this.user = user
      _this.$set(_this.user, 'user', user)
    })
  }
}
</script>

<style scoped lang="scss">
</style>
