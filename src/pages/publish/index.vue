<template>
  <div class="container">
    <!-- 发布内容块 -->
    <div class="publish-content-block">
      <textarea class="publish-content-textarea" placeholder="请输入想要发表的内容" name="textarea" v-model="publishTxaOption.content" :maxlength="publishTxaOption.maxlength" :focus="publishTxaOption.focus" />
      <button type="primary" :loading="publishBtnOption.loading" :disabled="publishBtnOption.loading" bindtap="primary" @click="clickHandle"> 发表 </button>
    </div>
    <!-- 发布说明块 -->
    <div class="publish-desc-block">

    </div>
  </div>
</template>

<script>
import {PostData} from '@/utils/fetchData'
export default {
  data () {
    return {
      content: '',
      publishTxaOption: {
        content: '',
        maxlength: 20,
        focus: false
      },
      publishBtnOption: {
        loading: false
      }
    }
  },
  methods: {
    clickHandle: function () {
      this.publishBtnOption.loading = true
      PostData('dynamics', {content: this.publishTxaOption.content}).then((res) => {
        wx.showToast({
          title: res.message,
          icon: res.status ? 'success' : 'none',
          duration: 2000,
          mask: true,
          success: () => {
            if (res.status) {
              this.publishTxaOption.content = ''
            }
            this.publishBtnOption.loading = false
          }
        })
      })
    }
  },
  onLoad () {
    // console.log('page index onLoad', this)
  },
  onShow () {
    this.publishTxaOption.focus = true
  },
  onHide () {

  }
}
</script>

<style scoped>

</style>
