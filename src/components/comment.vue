<template>
  <div class="comment-container">
    <span id="commentName" class="comment-name">{{name}}</span>
    <span class="comment-symbol">:</span>
    <span class="comment-content">{{content}}</span>
  </div>
</template>

<script>
export default {
  props: ['commentData'],
  data: function () {
    return {
      name: this.commentData.commentName,
      content: this.commentData.commentContent
    }
  },
  created () {}
}
</script>

<style>
.comment-container{
  font-size:30rpx;
}
.comment-name{
  color: #384BBC;
}
.content-content{
  /* font-size:30rpx; */
}
</style>
