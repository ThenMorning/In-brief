<template>
  <div class="dynamics-container">
    <!-- 用户信息块 -->
    <div class="userinfo">
      <img class="userinfo-icon" v-if="dynamicsUserInfo.iconUrl" :src="dynamicsUserInfo.iconUrl" background-size="cover" />
    </div>
    <!-- 动态内容块 -->
    <div>
    </div>
    <!-- 访客行为块 -->
    <div>
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
.dynamics-container{
  width:100%;
  height: auto;
}
.userinfo{

}
.userinfo-icon {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}
</style>
