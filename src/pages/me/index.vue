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
      <button v-if="!userInfo.user_name" open-type="getUserInfo" @getuserinfo="bindGetUserInfo">登录</button>
    </div>
    <!-- 消息通知块 -->
    <div class="message-block" @click="clickHandle" v-if="messageCount > 0">
      <!-- 消息图标 -->
      <i class="icon inBriefFont icon-notice message-icon" :class="{active:messageCount > 0}"></i>
      <!-- 消息数量 -->
      <span class="message-count" >{{messageCount}}</span>
    </div>
    <!-- 用户功能块 -->
    <div class="userfun-block">
      <fun-button v-for="(fun,index) in funList" :key="index" :funButtonData="fun"></fun-button>
    </div>
  </div>
</template>

<script>
import funButton from '@/components/funButton'
import {PostData} from '@/utils/fetchData'
export default {
  data () {
    return {
      userInfo: this.$store.state.userInfo || {},
      messageCount: 0,
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
    },
    bindGetUserInfo (e) {
      let userInfo = e.mp.detail.userInfo
      wx.login({
        success: res => {
          let code = res.code
          // 调用微信用户信息接口 获取用户名
          // 通过code 在后台获取open_id 作为查询条件查询该用户
          const param = {
            code: code,
            name: userInfo.nickName,
            avatarUrl: userInfo.avatarUrl,
            city: userInfo.city,
            province: userInfo.province,
            country: userInfo.country,
            gender: userInfo.gender
          }
          PostData('user', param).then((res) => {
            wx.setStorageSync('userId', res.data[0].user_id)
            this.userInfo = res.data[0]
            // 将用户信息保存到store
            this.$store.dispatch('saveUserInfo', this.userInfo)
          })
        }
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
