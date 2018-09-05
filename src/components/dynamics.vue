<template>
  <div class="dynamics-container" @click="clickHandle">
    <!-- 用户信息块 -->
    <div class="userinfo-block">
      <!-- 用户头像 -->
      <img id="userIcon" class="userinfo-icon" v-if="dynamicsData.avatar_url" :src="dynamicsData.avatar_url" background-size="cover" />
      <!-- 文字区域 -->
      <div class="userinfo-text">
        <!-- 用户名 -->
        <span class="userinfo-text-name">{{dynamicsData.user_name}}</span>
        <!-- 座右铭 -->
        <span class="userinfo-text-motto">{{dynamicsData.motto}}</span>
      </div>
      <!-- 动态创建时间 -->
      <!-- <span class="content-create-time">{{dynamicsContent.createTime}}</span> -->
    </div>
    <!-- 动态内容块 -->
    <div class="content-block">
      <!-- 动态内容 -->
      <p class="content-text">{{dynamicsData.content}}</p>
    </div>
    <!-- 访客行为块 -->
    <div class="visitorinfo-block">
      <!-- 喜欢按钮 -->
      <div class="visitorinfo-vetically visitorinfo-like">
        <!-- 喜欢图标 -->
        <i id="likeBtn" class="icon inBriefFont icon-like" :class="{active: isLike}"></i>
        <!-- 喜欢个数 -->
        <lable class="count-text" v-if="dynamicsData.like_count && (dynamicsData.is_current_user_like && dynamicsData.like_count != 1)">{{dynamicsData.like_count}}</lable>
      </div>
      <!-- 不喜欢按钮 -->
      <!-- <div class="visitorinfo-vetically visitorinfo-unlike"> -->
        <!-- 不喜欢图标 -->
        <!-- <i id="unLikeBtn" class="icon inBriefFont icon-unlike" :class="{active:dynamicsVisitorInfo.isUnlike}"></i> -->
        <!-- 不喜欢个数 -->
        <!-- <lable v-if="dynamicsData.unlike_count">{{dynamicsData.unlike_count}}</lable> -->
      <!-- </div> -->
      <!-- 评论按钮 -->
      <div class="visitorinfo-vetically visitorinfo-comment">
        <!-- 评论图标 -->
        <i id="commentBtn" class="icon inBriefFont icon-comment"></i>
        <!-- 评论个数 -->
        <lable class="count-text" v-if="dynamicsData.comment_count">{{dynamicsData.comment_count}}</lable>
      </div>
    </div>
    <!-- 评论内容块 -->
    <div class="comments-block" v-if="dynamicsData.comments.length">
      <comment v-for="(comment,index) in dynamicsData.comments" :commentData="comment" :key="index"></comment>
    </div>
  </div>
</template>

<script>
  import {PostData} from '@/utils/fetchData'
  import comment from '@/components/comment'
  export default {
    props: ['dynamicsData'],
    components: {
      comment
    },
    data: function () {
      return {
        isLike: this.dynamicsData.is_current_user_like
      }
    },
    methods: {
      clickHandle: function (e) {
        switch (e.target.id) {
          case 'userIcon':
            console.log('用户头像')
            break
          case 'likeBtn':
            this.likeDynamics()
            break
          // case 'unLikeBtn':
          //   console.log('不喜欢按钮')
          //   break
          // case 'commentBtn':
          //   console.log('评论按钮')
          //   break
          case 'commentName':
            console.log('评论人姓名')
            break
          default:
            wx.navigateTo({
              url: '../other/dynamicsDetail/main?dynamicsId=' + this.dynamicsData.dynamics_id
            })
        }
      },
      likeDynamics: function () {
        if (!this.$store.state.userInfo.user_id) {
          wx.showToast({
            title: '请先登录!',
            icon: 'none',
            duration: 2000,
            mask: true
          })
          return
        }
        const param = {
          dynamics_id: this.dynamicsData.dynamics_id,
          user_id: this.$store.state.userInfo.user_id,
          user_name: this.$store.state.userInfo.user_name
        }
        PostData('likes', param).then((res) => {
          if (res.status) {
            this.isLike = res.data.likeStatus
          } else {
            wx.showToast({
              title: res.message,
              icon: 'none',
              duration: 2000,
              mask: true
            })
          }
        })
      }
    },
    created () {
    },
    onShow () {
      const _id = wx.getStorageSync('dynamics_id')
      if (_id && _id === this.dynamicsData.dynamics_id) {
        this.isLike = wx.getStorageSync('isLike')
      }
    }
  }
</script>

<style>
  .dynamics-container {
    width: 100%;
    margin-bottom: 10rpx;
    padding: 20rpx;
    background: #ffffff;
  }

  .userinfo-block {
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

  .userinfo-text-motto {
    font-size: 25rpx;
  }

  .content-text {
    margin: 20rpx 0 20rpx 45rpx;
    font-size: 35rpx;
  }

  .visitorinfo-block {
    display: flex;
    justify-content: space-around;
  }

  .visitorinfo-vetically {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .visitorinfo-like {
    margin-left: 375rpx;
  }

  .comments-block {
    margin: 20rpx 0rpx 0rpx 45rpx;
    padding: 40rpx 0;
    border-top: 1px solid #cbf5fb;
  }

  .count-text{
    font-size: 20rpx;
  }
</style>
