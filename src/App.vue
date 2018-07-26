
<script>
  export default {
    methods: {
      getUserInfo () {
        // 调用登录接口
        wx.login({
          success: (res) => {
            let code = res.code
            // 调用微信用户信息接口 获取用户名
            wx.getUserInfo({
              success: (res) => {
                console.log(res)
                // 通过code 在后台获取open_id 作为查询条件查询该用户
                wx.request({
                  url: 'http://127.0.0.1:3000/api/user',
                  method: 'POST',
                  data: {
                    code: code,
                    name: res.userInfo.nickName,
                    avatarUrl: res.userInfo.avatarUrl,
                    city: res.userInfo.city,
                    province: res.userInfo.province,
                    country: res.userInfo.country,
                    gender: res.userInfo.gender
                  },
                  header: {
                    'content-type': 'application/json' // 默认值
                  },
                  success: (res) => {
                    // console.log(res.data[0])
                    this.userInfo = res.data[0]
                    // 将用户信息保存到store
                    this.$store.dispatch('saveUserInfo', this.userInfo)
                  }
                })
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
