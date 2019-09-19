<template>
  <div class="signup container">
    <h1 class="label">会員登録</h1>
    <b-field horizontal grouped label="ユーザー名" label-position="inside">
      <b-input type="text" placeholder="Username" v-model="username"></b-input>
    </b-field>
    <b-field horizontal label="パスワード">
      <b-input type="password" placeholder="Password" v-model="password"></b-input>
    </b-field>
    <button class="button is-info">登録する</button>
    <p>会員登録済みの方は<router-link to="/signin">こちらからログイン</router-link></p>
  </div>
</template>

<script>
export default {
  name: 'signup',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
p {
  padding-top: 1rem;
}
</style>