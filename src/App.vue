
<script>
  export default {
    methods: {
      getUserInfo () {
        // 调用登录接口
        wx.login({
          success: () => {
            wx.getUserInfo({
              success: (res) => {
                this.userInfo = res.userInfo
                // 通过微信用户名查询用户其他信息
                this.$store.dispatch('saveUserInfo', this.userInfo)
              }
            })
          }
        })
      }
    },
    created () {
      this.getUserInfo()
    }
  }
</script>

<style>
  .container {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    overflow: hidden;
    overflow-y: auto;
    margin: 0;
  }

  .active {
    color: red;
  }

  .vetically {
    display: flex;
    align-items: center;
    justify-content: center
  }


  /* this rule will be remove */

  * {
    transition: width 2s;
    -moz-transition: width 2s;
    -webkit-transition: width 2s;
    -o-transition: width 2s;
  }
</style>
