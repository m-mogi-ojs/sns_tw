<template>
  <b-navbar class="Header" type="is-light">
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img src="../assets/logo.svg" width="32" height="32">
      </b-navbar-item>
    </template>
    <template slot="start">
      <router-link tag="a" to="/"       exact-active-class="is-active" exact class="navbar-item">about</router-link>
      <router-link tag="a" to="/home"   exact-active-class="is-active" class="navbar-item">home</router-link>
      <router-link tag="a" to="/search" exact-active-class="is-active" class="navbar-item">search</router-link>
    </template>
    <template v-if="isSigned()" slot="end">
      <b-navbar-item tag="div">
        {{getAccountName()}}さん
      </b-navbar-item>
      <b-navbar-item tag="div">
        <a @click="signOut" class="button is-light">ログアウト</a>
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
      user: {},
      selectTab: null
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
