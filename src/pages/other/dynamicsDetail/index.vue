<template>
    <div class="container" @click="clickHandle">
        <!-- 动态内容 -->
        <div class="content">
            <!-- 用户信息块 -->
            <div class="userinfo-block">
                <!-- 用户头像 -->
                <img id="userIcon" class="userinfo-icon" v-if="dynamics.avatar_url" :src="dynamics.avatar_url" background-size="cover" />
                <!-- 文字区域 -->
                <div class="userinfo-text">
                    <!-- 用户名 -->
                    <span class="userinfo-text-name">{{dynamics.user_name}} <span class="userinfo-icon-gender" :class="{pink:!dynamics.gender}">{{dynamics.gender?"♂":"♀"}}</span></span>
                    <!-- 座右铭 -->
                    <span class="userinfo-text-motto">{{dynamics.motto}}</span>
                </div>
            </div>
            <!-- 内容块 -->
            <div class="contentinfo-block">
                <!-- 内容 -->
                <div class="contentinfo">
                    <span class="contentinfo-text">{{dynamics.content}}</span>
                    <!-- 动态创建时间 -->
                    <span class="contentinfo-create-time">发布于{{dynamics.create_time}}</span>
                </div>
            </div>
            <!-- 操作按钮块 -->
            <div class="actioninfo-block">
                <!-- 喜欢 -->
                <!-- 喜欢图标 -->
                <i id="likeBtn" class="icon inBriefFont icon-like action-btn" style="margin-right:90rpx;" :class="{active: isLike}"></i>
                <!-- 喜欢个数 -->
                <lable class="action-count-text" v-if="dynamics.like_count && (dynamics.is_current_user_like && dynamics.like_count != 1)">{{dynamics.like_count}}</lable>
                <!-- 评论 -->
                <!-- 评论图标 -->
                <i id="commentBtn" class="icon inBriefFont icon-comment action-btn"></i>
                <!-- 评论个数 -->
                <lable class="action-count-text" v-if="dynamics.comment_count">{{dynamics.comment_count}}</lable>
            </div>
        </div>
        <!-- 评论内容 -->
        <div class="comment" v-for="(comment,index) in dynamics.comments" :key="index">
            <div class="comment-box">
                <span class="comment-name-text">{{dynamics.user_name}}</span>:
                <span class="comment-content-text">{{dynamics.content}}</span>
            </div>
            <div class="time-box">
                <span class="comment-create-time-text">{{dynamics.create_time}}</span>
            </div>
        </div>
        <!-- 评论组件 -->
        <div class="comment-component">
            <input class="comment-input" :bindfocus="inputFocusHandle" maxlength="20" placeholder="随便说些什么吧，限制20字以内哦" :focus="focus" />
        </div>
    </div>
</template>

<script>
import { GetData, PostData } from '@/utils/fetchData'
export default {
  data () {
    return {
      dynamics: {},
      isLike: null,
      focus: false
    }
  },
  components: {},
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
        case 'commentBtn':
          this.focus = true
          break
        case 'commentName':
          console.log('评论人姓名')
          break
        default:
          break
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
        dynamics_id: this.dynamics.dynamics_id,
        user_id: this.$store.state.userInfo.user_id,
        user_name: this.$store.state.userInfo.user_name
      }
      PostData('likes', param).then((res) => {
        if (res.status) {
          this.isLike = res.data.likeStatus
          wx.setStorageSync('isLike', res.data.likeStatus)
          wx.setStorageSync('dynamics_id', this.dynamics.dynamics_id)
        } else {
          wx.showToast({
            title: res.message,
            icon: 'none',
            duration: 2000,
            mask: true
          })
        }
      })
    },
    inputFocusHandle: function (e) {
      console.log(e)
    }
  },
  onLoad (option) {
    GetData('dynamics', { dynamics_id: option.dynamicsId }).then(res => {
      this.dynamics = res.data[0]
      this.isLike = res.data[0].is_current_user_like
    })
  },
  onShow () {},
  onHide () {}
}
</script>

<style scoped>
.content {
    width: 100%;
    background: #f4f4f4;
}

.userinfo-block {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 10rpx;
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

.userinfo-icon-gender {
    color: blueviolet;
}

.pink {
    color: pink;
}

.userinfo-text-motto {
    font-size: 25rpx;
}

.contentinfo {
    margin-left: 40rpx;
    margin-top: 30rpx;
}

.contentinfo-create-time {
    display: block;
    text-align: right;
    margin-right: 10rpx;
    font-size: 25rpx;
}

.actioninfo-block {
    padding: 40rpx;
    text-align: right;
}

.action-btn {
    display: inline;
    font-size: 60rpx;
}

.action-count-text {
    font-size: 25rpx;
}

.comment {
    width: 100%;
}

.comment-box {
    margin-left: 20rpx;
    padding: 20rpx;
}

.comment-name-text {
    font-size: 35rpx;
    color: #384BBC;
}

.comment-content-text {
    font-size: 30rpx;
}

.comment-create-time-text {
    font-size: 25rpx;
}

.time-box {
    text-align: right;
    margin-right: 20rpx;
}

.comment-component {
    width: 100%;
    position: fixed;
    bottom: 0;
}

.comment-input {
    margin: 0 auto;
    padding: 0 10px;
    height: 34px;
    border: 1px solid rgba(255,255,255,.8);
    border-radius: 2px;
    color: #fff;
    background: rgba(0,0,0,.15);
　　font-family: "helvetica neue",arial,sans-serif;
}

</style>
