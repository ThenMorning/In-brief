<template>
  <div class="container">
    <!-- 用户信息块 -->
    <div class="userinfo-block">
      <img class="userinfo-avatar" v-if="userInfo.avatar_url" :src="userInfo.avatar_url" background-size="cover" />
      <div class="userinfo-nickname">
        <span>{{userInfo.user_name}}</span>
      </div>
      <div class="userinfo-motto" v-if="userInfo.motto">
        <span>{{userInfo.motto}}</span>
      </div>
    </div>
    <!-- 消息通知块 -->
    <div class="message-block" @click="clickHandle">
      <!-- 消息图标 -->
      <i class="icon inBriefFont icon-notice message-icon" :class="{active:messageCount > 0}"></i>
      <!-- 消息数量 -->
      <span class="message-count" v-if="messageCount > 0">{{messageCount}}</span>
    </div>
    <!-- 用户功能块 -->
    <div class="userfun-block">
      <fun-button v-for="(fun,index) in funList" :key="index" :funButtonData="fun"></fun-button>
    </div>
  </div>
</template>

<script>
import funButton from '@/components/funButton'
export default {
  data () {
    return {
      userInfo: {},
      messageCount: 1,
      funList: [
        {
          btnName: '我的发表',
          btnNameColor: '#000000',
          btnIcon: 'record',
          btnIconColor: '#a2e1d4',
          btnCode: 'publish'
        },
        {
          btnName: '我的喜欢',
          btnNameColor: '#000000',
          btnIcon: 'like',
          btnIconColor: '#e3c887',
          btnCode: 'like'
        },
        {
          btnName: '设置',
          btnNameColor: '#000000',
          btnIcon: 'setting',
          btnIconColor: '#acf6ef',
          btnCode: 'setting'
        },
        {
          btnName: '更多',
          btnNameColor: '#000000',
          btnIcon: 'more',
          btnIconColor: '#cbf5fb',
          btnCode: 'more'
        }
      ]
    }
  },
  components: {
    funButton
  },
  methods: {
    clickHandle: function () {
      wx.navigateTo({
        url: 'application/notice/main'
      })
    }
  },

  onShow () {
    this.userInfo = this.$store.state.userInfo
    // 这里获取消息数量
  }
}
</script>

<style scoped>
.userinfo-block {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
  text-align: center;
}

.userinfo-motto {
  margin-top: 10px;
}

.message-block {
  margin-top: 30rpx;
}

.message-icon {
  font-size: 70rpx;
}

.message-count {
  color: red;
  float: right;
  margin-top: -90rpx;
}

.userfun-block {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex: 1;
  /* justify-content: space-around; */
  flex-wrap: wrap;
}
</style>
