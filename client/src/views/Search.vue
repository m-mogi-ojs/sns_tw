<template>
  <div class="search">
    <AuthedHeader></AuthedHeader>
    <div class="container">
      <b-input type="text" placeholder="検索ワード" v-model="word"></b-input>
      <b-radio v-model="radio" name="target" native-value="user">ユーザー名</b-radio>
      <b-radio v-model="radio" name="target" native-value="tweet">呟き</b-radio>
      <button @click="search" class="button is-info">検索</button>
    </div>
  </div>
</template>

<script>
import AuthedHeader from '@/components/AuthedHeader.vue'

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
  },
}
</script>

<style scoped>

</style>