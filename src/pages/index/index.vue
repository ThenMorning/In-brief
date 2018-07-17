<template>
  <div class="container">
    <dynamics v-for="(dynamics,index) in dynamicsList" :key="index" :dynamicsData="dynamics"></dynamics>
  </div>
</template>

<script>
import dynamics from '@/components/dynamics'
export default {
  data () {
    return {
      dynamicsList: [
        {
          dynamicsUserInfo: {
            name: '张三',
            iconUrl: 'http://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKAbaMQAYk7vNU7bG7eicOkr0t6mEIM5hlia32B25LGItXyvicswzZxe4RZTSnBeoaINNBy5GqXF1icLw/132'
          },
          dynamicsContent: {
            text: '今天天气很好',
            createTime: '2018-07-17'
          },
          dynamicsVisitorInfo: {
            likeCount: 10,
            unlikeCount: 10,
            commentCount: 20
          },
          dynamicsComments: [
            {
              commentName: '李四',
              commentContent: '今天天气并不是很好啊',
              commentTime: '2018-07-17'
            },
            {
              commentName: '王五',
              commentContent: '今天天气还好啊',
              commentTime: '2018-07-17'
            }
          ]
        },
        {
          dynamicsUserInfo: {
            name: '李四',
            iconUrl: 'http://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKAbaMQAYk7vNU7bG7eicOkr0t6mEIM5hlia32B25LGItXyvicswzZxe4RZTSnBeoaINNBy5GqXF1icLw/132'
          },
          dynamicsContent: {
            text: '今天天气还行吧',
            createTime: '2018-07-16'
          },
          dynamicsVisitorInfo: {
            likeCount: 4,
            unlikeCount: 13,
            commentCount: 10
          },
          dynamicsComments: [
            {
              commentName: 'halo',
              commentContent: '今天天气太棒了',
              commentTime: '2018-07-17'
            },
            {
              commentName: '王五',
              commentContent: '今天天气还好啊',
              commentTime: '2018-07-17'
            }
          ]
        }
      ]
    }
  },
  components: {
    dynamics
  },
  methods: {},
  mounted () {},
  created () {}
}
</script>

<style scoped>
.container{
  padding:20rpx;
}
</style>
