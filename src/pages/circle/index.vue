<template>
  <div class="container">
    <!-- 轮播块 -->
    <div class="swiper-block">
      <swiper class="swiper" indicator-dots="true" autoplay="true" interval="5000" duration="1000">
        <block v-for="(swiperItem, index) in swiperList" :key="index">
          <swiper-item class="vetically">
            <hot-topic :hotTopicData="swiperItem"></hot-topic>
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
  import {GetData} from '@/utils/fetchData'
  export default {
    data () {
      return {
        swiperList: [
          {
            name: '张三',
            content: '我本可以忍受黑暗，假若我不曾见过光明。',
            time: '2018-07-17'
          }
        ],
        dynamicsList: []
      }
    },
    components: {
      dynamics,
      hotTopic
    },
    methods: {},
    created () {
      // 调用动态列表接口
      GetData('dynamics').then((res) => {
        this.dynamicsList = res.data
      })
    },
    mounted () {
    },
    onLoad () {

    },
    onShow () {
    },
    onUnload () {
    },
    onHide () {
    }
  }
</script>

<style scoped>
  .container {
    background: #f2f2f2;
  }

  .swiper-block {
    width: 100%;
  }

  .dynamics-block {
    width: 100%;
  }
</style>
