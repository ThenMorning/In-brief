<template>
  <div class="hot-topic-container">
    <!-- 热门话题块 -->
    <div class="hot-topic-block">
      <!-- 话题内容块 -->
      <div class="hot-tpic-content">
        <span>{{content}}</span>
      </div>
      <!-- 话题拥有者块 -->
      <div class="hot-tpic-name">
        <span>——{{name}}</span>
      </div>
      <!-- 话题创建时间块 -->
      <div class="hot-tpic-time">
        <span>{{time}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['hotTopicData'],
    data: function () {
      return {
        name: this.hotTopicData.name,
        content: this.hotTopicData.content,
        time: this.hotTopicData.time
      }
    },
    created () {}
  }
</script>

<style>

  .hot-tpic-content {
    font-size: 37rpx;
  }

  .hot-tpic-name {
    font-size: 35rpx;
    text-align: right;
  }

  .hot-tpic-time {
    font-size: 30rpx;
    text-align: right;
  }
</style>
