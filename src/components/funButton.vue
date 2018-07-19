<template>
  <div class="fun-button-container" @click="clickHandle">
    <!-- 功能按钮块 -->
    <div class="fun-button-block">
      <!-- 功能按钮图标 -->
      <i class="icon inBriefFont fun-button-icon" :class="[icon,{'fun-active':funActive}]"  :style="{color:iconColor}"></i>
      <!-- 功能名称 -->
      <span class="fun-button-name" :style="{color:nameColor}">{{name}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['funButtonData'],
    data: function () {
      return {
        name: this.funButtonData.btnName,
        nameColor: this.funButtonData.btnNameColor,
        icon: 'icon-' + this.funButtonData.btnIcon,
        iconColor: this.funButtonData.btnIconColor,
        funActive: false
      }
    },
    methods: {
      clickHandle: function (e) {
        this.funActive = true
        setTimeout(() => {
          this.funActive = false
          const url = '../circle/main'
          wx.navigateTo({ url })
        }, 400)
      }
    },
    created () {}
  }
</script>

<style>
  .fun-button-container {
    width: 375rpx;
    height: 375rpx;
    justify-content: center;
    align-items: center;
    display: flex;
  }

  .fun-button-block {
    text-align: center;
  }

  .fun-button-icon {
    font-size: 80rpx;
  }

  .fun-button-name {
    font-size: 40rpx;
  }

  .fun-active {
    transition: All 0.4s ease-in-out;
    -webkit-transition: All 0.4s ease-in-out;
    -moz-transition: All 0.4s ease-in-out;
    -o-transition: All 0.4s ease-in-out;
    transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
  }

</style>
