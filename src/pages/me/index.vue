<template>
  <div class="container" @click="clickHandle('test click', $event)">
    <!-- 用户信息块 -->
    <div class="userinfo-block">
      <img class="userinfo-avatar" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover" />
      <div class="userinfo-nickname">
        <span>{{userInfo.nickName}}</span>
      </div>
    </div>
    <!-- 用户功能块 -->
    <div></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      userInfo: {}
    }
  },

  computed: {
  },

  methods: {
  },

  onShow () {
    this.userInfo = this.$store.state.userInfo
    console.log(this.userInfo)
  }
}
</script>

<style scoped>
.userinfo {
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
}

.usermotto {
  margin-top: 150px;
}


</style>
