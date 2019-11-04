<template>
  <div class="search">
    <div class="container">
      <b-input type="text" placeholder="検索ワード" v-model="word"></b-input>
      <div class="panel">
      <b-radio v-model="radio" name="target" native-value="user">ユーザー名</b-radio>
      <b-radio v-model="radio" name="target" native-value="tweet">呟き</b-radio>
      <button @click="search" class="button is-info">検索</button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'search',
  data () {
    return {
      word: '',
      radio: 'user'
    }
  },
  methods: {
    search: function () {
      console.log('search')
    }
  }
}
</script>

<style scoped>

</style>
