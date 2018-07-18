<template>
  <div class="container">
    <!-- 轮播块 -->
    <div class="swiper-block">
      <swiper class="swiper" indicator-dots="true" autoplay="true" interval="5000" duration="1000">
        <block v-for="(swiperItem, index) in swiperList" :key="index">
          <swiper-item>
            <hot-topic></hot-topic>
          </swiper-item>
        </block>
      </swiper>
    </div>
    <!-- 搜索块 -->
    <!-- <div class="search-block"></div> -->
    <!-- 动态列表块 -->
    <div class="dynamics-block">
      <dynamics v-for="(dynamics,index) in dynamicsList" :key="index" :dynamicsData="dynamics"></dynamics>
    </div>
  </div>
</template>

<script>
  import dynamics from '@/components/dynamics'
  import hotTopic from '@/components/hotTopic'
  export default {
    data () {
      return {
        swiperList: [
          'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
          'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
          'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
        ],
        dynamicsList: [{
          dynamicsUserInfo: {
            name: '张三',
            motto: '但行好事，莫问前程。',
            iconUrl: 'http://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKAbaMQAYk7vNU7bG7eicOkr0t6mEIM5hlia32B25LGItXyvicswzZxe4RZTSnBeoaINNBy5GqXF1icLw/132'
          },
          dynamicsContent: {
            text: '我本可以忍受黑暗，假若我不曾见过光明。',
            createTime: '2018-07-17'
          },
          dynamicsVisitorInfo: {
            likeCount: 10,
            unlikeCount: 10,
            commentCount: 20,
            isLike: true,
            isUnlike: false
          },
          dynamicsComments: [{
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
            motto: '莫愁前路无知己，天下谁人不识君。',
            iconUrl: 'http://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKAbaMQAYk7vNU7bG7eicOkr0t6mEIM5hlia32B25LGItXyvicswzZxe4RZTSnBeoaINNBy5GqXF1icLw/132'
          },
          dynamicsContent: {
            text: '床前明月光，疑是地上霜。',
            createTime: '2018-07-16'
          },
          dynamicsVisitorInfo: {
            likeCount: 4,
            unlikeCount: 13,
            commentCount: 10,
            isLike: false,
            isUnlike: true
          },
          dynamicsComments: [{
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
        },
        {
          dynamicsUserInfo: {
            name: '李四',
            motto: '我本可以忍受黑暗，假若我不曾见过光明。',
            iconUrl: 'http://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKAbaMQAYk7vNU7bG7eicOkr0t6mEIM5hlia32B25LGItXyvicswzZxe4RZTSnBeoaINNBy5GqXF1icLw/132'
          },
          dynamicsContent: {
            text: '横看成岭侧成峰，远近高低各不同。',
            createTime: '2018-07-16'
          },
          dynamicsVisitorInfo: {
            likeCount: 4,
            unlikeCount: 13,
            commentCount: 10,
            isLike: false,
            isUnlike: false
          },
          dynamicsComments: [{
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
        },
        {
          dynamicsUserInfo: {
            name: '李四',
            motto: '我曾经跨过山和大海，也穿过人山人海。',
            iconUrl: 'http://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKAbaMQAYk7vNU7bG7eicOkr0t6mEIM5hlia32B25LGItXyvicswzZxe4RZTSnBeoaINNBy5GqXF1icLw/132'
          },
          dynamicsContent: {
            text: '今天天气还行吧',
            createTime: '2018-07-16'
          },
          dynamicsVisitorInfo: {
            likeCount: 4,
            unlikeCount: 13,
            commentCount: 10,
            isLike: true,
            isUnlike: false
          },
          dynamicsComments: [{
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
        },
        {
          dynamicsUserInfo: {
            name: '李四',
            motto: '比你优秀的人都在努力，你有什么资格停下。',
            iconUrl: 'http://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKAbaMQAYk7vNU7bG7eicOkr0t6mEIM5hlia32B25LGItXyvicswzZxe4RZTSnBeoaINNBy5GqXF1icLw/132'
          },
          dynamicsContent: {
            text: '横看成岭侧成峰，远近高低各不同。',
            createTime: '2018-07-16'
          },
          dynamicsVisitorInfo: {
            likeCount: 4,
            unlikeCount: 13,
            commentCount: 10,
            isLike: true,
            isUnlike: false
          },
          dynamicsComments: [{
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
      dynamics,
      hotTopic
    },
    methods: {},
    mounted () {},
    created () {}
  }
</script>

<style scoped>
  .container {
    margin: 0;
    padding: 0;
    background: #f2f2f2;
    overflow: hidden;
    overflow-y: auto;
  }

  .swiper-block {
    width: 100%;
  }

  .dynamics-block {
    width: 100%;
  }
</style>
