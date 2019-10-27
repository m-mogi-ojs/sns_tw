<template>
  <b-navbar class="authed-header" type="is-light">
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
        {{ accountName }}さん
      </b-navbar-item>
      <b-navbar-item tag="div">
        <a @click="signOut" class="button is-light">ログアウト</a>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
import firebase from 'firebase'
import Vue from 'vue'

export default {
  name: 'AuthedHeader',
  data() {
    return {
      accountName: firebase.auth().currentUser.email
    }
  },
  methods: {
    signOut: async function () {
      let router = this.$router
      let isSuccessPush = false
      await firebase.auth().signOut().then(async function() {
        isSuccessPush = true
      })
      if (isSuccessPush) {
        router.push({ name: 'about' })
      }
    }
  }
}


</script>

<style scoped lang="scss">
</style>
