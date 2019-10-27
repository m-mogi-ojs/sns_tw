<template>
  <div class="home">
    <AuthedHeader></AuthedHeader>
    <img alt="Vue logo" src="../assets/logo.svg" style="width: 50%;">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import firebase from 'firebase'

// @ is an alias to /src
import AuthedHeader from '@/components/AuthedHeader.vue'
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
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
