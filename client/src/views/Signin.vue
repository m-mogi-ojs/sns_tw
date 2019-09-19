<template>
  <div class="signin container">
    <h1 class="label">ログイン</h1>
    <b-field horizontal label="ユーザー名" label-position="inside">
      <b-input type="text" placeholder="Username" v-model="username"></b-input>
    </b-field>
    <b-field horizontal label="パスワード">
      <b-input type="password" placeholder="Password" v-model="password"></b-input>
    </b-field>
    <button @click="signIn" class="button is-info">ログインする</button>
    <p>会員登録がまだお済みでない方は<router-link to="/signup">こちらから会員登録</router-link></p>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'signin',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    signIn: function () {
      firebase.auth().signInWithEmailAndPassword(this.username, this.password)
        .then(user => {
          this.$router.push('/home')
        })
        .catch(error => {
          alert(error.message)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
p {
  padding-top: 1rem;
}
</style>