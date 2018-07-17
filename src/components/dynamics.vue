<template>
  <div class="dynamics-container">
    <!-- 用户信息块 -->
    <div class="userinfo">
      <!-- 用户头像 -->
      <img class="userinfo-icon" v-if="dynamicsUserInfo.iconUrl" :src="dynamicsUserInfo.iconUrl" background-size="cover" />
      <!-- 用户名 -->
      <span class="userinfo-name">{{dynamicsUserInfo.name}}</span>
    </div>
    <!-- 动态内容块 -->
    <div class="content">
      <!-- 动态内容 -->
      <p class="content-text">{{dynamicsContent.text}}</p>
      <!-- 动态创建时间 -->
      <p class="content-create-time">-{{dynamicsContent.createTime}}</p>
    </div>
    <!-- 访客行为块 -->
    <div class="visitorinfo">
      <!-- 喜欢按钮 -->
      <div class="visitorinfo-like">
        <!-- 喜欢图标 -->
        <i class="icon inBriefFont icon-like"></i>
        <!-- 喜欢个数 -->
        <lable></lable>
      </div>
      <!-- 不喜欢按钮 -->
      <div class="visitorinfo-like">
        <!-- 不喜欢图标 -->
        <i class="icon inBriefFont icon-unlike"></i>
        <!-- 不喜欢个数 -->
        <lable></lable>
      </div>
      <!-- 评论按钮 -->
      <div class="visitorinfo-comment">
        <!-- 评论图标 -->
        <i class="icon inBriefFont icon-comment"></i>
        <!-- 评论个数 -->
        <lable></lable>
      </div>
    </div>
    <!-- 评论内容块 -->
    <div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['dynamicsData'],
  data: function () {
    return {
      dynamicsUserInfo: this.dynamicsData.dynamicsUserInfo,
      dynamicsContent: this.dynamicsData.dynamicsContent,
      dynamicsVisitorInfo: this.dynamicsData.dynamicsVisitorInfo,
      dynamicsComments: this.dynamicsData.dynamicsComments
    }
  },
  created () {}
}
</script>

<style>
.dynamics-container {
  width: 100%;
  height: auto;
}
.userinfo {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.userinfo-icon {
  width: 90rpx;
  height: 90rpx;
  border-radius: 50%;
}
.userinfo-name {
  margin: 20rpx;
}
.content-text{
  margin: 20rpx 0 20rpx 45rpx;
}
.content-create-time{
  text-align: right;
  margin-right: 20rpx;
}
.visitorinfo-like{}
.visitorinfo-comment{}
</style>
