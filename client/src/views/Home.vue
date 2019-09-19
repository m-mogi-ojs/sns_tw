<template>
  <div class="home">
    <div>{{ name }}さん</div>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button @click="signOut">ログアウト</button>
  </div>
</template>

<script>
import firebase from 'firebase'

// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  data() {
    return {
      name: firebase.auth().currentUser.email
    }
  },
  components: {
    HelloWorld
  },
  methods: {
    signOut: function () {
      firebase.auth().signOut().then(() => {
        this.$router.push('/')
      })
    }
  }
}
</script>
