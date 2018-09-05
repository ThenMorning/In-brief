<template>
  <div class="hot-topic-container">
    <!-- 热门话题块 -->
    <div class="hot-topic-block">
      <!-- 话题内容块 -->
      <div class="hot-topic-content">
        <span>{{hotTopicData.content}}</span>
      </div>
      <!-- 话题拥有者块 -->
      <div class="hot-topic-name">
        <span class="hot-topic-name-text">——{{hotTopicData.user_name}}</span>
      </div>
      <!-- 话题创建时间块 -->
      <div class="hot-topic-time">
        <span class="hot-topic-time-text">{{hotTopicData.create_time}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['hotTopicData'],
    data: function () {
      return {
      }
    },
    created () {
    }
  }
</script>

<style>
  .hot-topic-container{
        width:100%;
  }

  .hot-topic-content {
    font-size: 37rpx;
    text-align: center;
  }

  .hot-topic-name {
    font-size: 35rpx;
    text-align: right;
  }

  .hot-topic-name-text{
    margin-right:40rpx;
  }

  .hot-topic-time {
    font-size: 30rpx;
    text-align: right;
  }

  .hot-topic-time-text{
    margin-right:40rpx;
  }
</style>
