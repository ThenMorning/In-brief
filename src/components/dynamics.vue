<template>
  <div class="dynamics-container">
    <!-- 用户信息块 -->
    <div class="userinfo">
      <!-- 用户头像 -->
      <img class="userinfo-icon" v-if="dynamicsUserInfo.iconUrl" :src="dynamicsUserInfo.iconUrl" background-size="cover" />
      <!-- 文字区域 -->
      <div class="userinfo-text">
        <!-- 用户名 -->
        <span class="userinfo-text-name">{{dynamicsUserInfo.name}}</span>
        <!-- 座右铭 -->
        <span class="userinfo-text-motto">{{dynamicsUserInfo.motto}}</span>
      </div>
      <!-- 动态创建时间 -->
      <!-- <span class="content-create-time">{{dynamicsContent.createTime}}</span> -->
    </div>
    <!-- 动态内容块 -->
    <div class="content">
      <!-- 动态内容 -->
      <p class="content-text">{{dynamicsContent.text}}</p>
    </div>
    <!-- 访客行为块 -->
    <div class="visitorinfo">
      <!-- 喜欢按钮 -->
      <div class="visitorinfo-vetically visitorinfo-like">
        <!-- 喜欢图标 -->
        <i class="icon inBriefFont icon-like" :class="{active:dynamicsVisitorInfo.isLike}"></i>
        <!-- 喜欢个数 -->
        <lable>{{dynamicsVisitorInfo.likeCount}}</lable>
      </div>
      <!-- 不喜欢按钮 -->
      <div class="visitorinfo-vetically visitorinfo-unlike">
        <!-- 不喜欢图标 -->
        <i class="icon inBriefFont icon-unlike" :class="{active:dynamicsVisitorInfo.isUnlike}"></i>
        <!-- 不喜欢个数 -->
        <lable>{{dynamicsVisitorInfo.unlikeCount}}</lable>
      </div>
      <!-- 评论按钮 -->
      <div class="visitorinfo-vetically visitorinfo-comment">
        <!-- 评论图标 -->
        <i class="icon inBriefFont icon-comment"></i>
        <!-- 评论个数 -->
        <lable>{{dynamicsVisitorInfo.commentCount}}</lable>
      </div>
    </div>
    <!-- 评论内容块 -->
    <div class="comments">
      <comment v-for="(comment,index) in dynamicsComments" :commentData="comment" :key="index"></comment>
    </div>
  </div>
</template>

<script>
  import comment from '@/components/comment'
  export default {
    props: ['dynamicsData'],
    components: {
      comment
    },
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
    margin-bottom: 10rpx;
    padding: 20rpx;
    background: #ffffff;
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

  .userinfo-text {
    margin: 20rpx;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .userinfo-text-name {
  }

  .userinfo-text-motto {
    font-size:25rpx;
  }

  .content-text {
    margin: 20rpx 0 20rpx 45rpx;
  }

  .content-create-time {
    /* position: absolute;
    right: 0rpx; */
  }

  .visitorinfo {
    display: flex;
    justify-content: space-around;
  }

  .visitorinfo-vetically {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .active{
    color:red;
  }

  .visitorinfo-like {
    margin-left: 375rpx;
  }

  .comments {
    margin: 20rpx 0rpx 0rpx 45rpx;
    padding: 40rpx 0;
    border-top: 1px solid #cbf5fb;
  }
</style>
