<template>
  <div class="signup container">
    <h1 class="label">会員登録</h1>
    <div id="error-message" class="panel has-text-danger" v-if="errorMessage != ''">{{ errorMessage }}</div>
    <b-field horizontal label="ユーザー名" label-position="inside">
      <b-input type="text" placeholder="Username" v-model="username"></b-input>
    </b-field>
    <b-field horizontal label="パスワード">
      <b-input type="password" placeholder="Password" v-model="password"></b-input>
    </b-field>
    <button @click="signUp" class="button is-info">登録する</button>
    <p>会員登録済みの方は<router-link to="/signin">こちらからログイン</router-link></p>
  </div>
</template>

<script>
import firebase from 'firebase/app'

export default {
  name: 'signup',
  data () {
    return {
      username: '',
      password: '',
      errorMessage: ''
    }
  },
  methods: {
    signUp: function () {
      firebase.auth().createUserWithEmailAndPassword(this.username, this.password)
        .then(user => {
          // this.$router.push('/signin')
        })
        .catch(error => {
          console.log(error)
          this.errorMessage = error.message
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
