<template>
  <div class="container">
    <!-- 发布内容块 -->
    <div class="publish-content-block">
      <textarea class="publish-content-textarea" placeholder="请输入想要发表的内容" name="textarea" v-model="publishTxaOption.content" :maxlength="publishTxaOption.maxlength" :focus="publishTxaOption.focus" />
      <button type="primary" :loading="publishBtnOption.loading" bindtap="primary" @click="clickHandle"> 发表 </button>
    </div>
    <!-- 发布说明块 -->
    <div class="publish-desc-block">

    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        content: '',
        publishTxaOption: {
          content: '',
          maxlength: 20,
          focus: true
        },
        publishBtnOption: {
          loading: false
        }
      }
    },
    methods: {
      clickHandle: function () {
        this.publishBtnOption.loading = true
      }
    },
    onLoad () {
      // console.log('page index onLoad', this)
    },
    onShow () {
      this.publishTxaOption.focus = true
    },
    onHide () {
      this.publishTxaOption.focus = false
    }
  }
</script>

<style scoped>

</style>
