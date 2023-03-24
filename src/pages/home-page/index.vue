<template>
  <div>
    <img
      class="dayline"
      src="~@/static/mp-weixin/home-page/day.png" />
    <div class="local-day">
      <div>
        <div
          class="location"
          @click="handleChangeLocal">
          <img src="~@/static/mp-weixin/home-page/local.png" />
          海尔空气楼c02
        </div>
        <div class="real-location">{{ addressNameCity }} {{ addressNameDistrict }}</div>
      </div>
      <div>
        <div class="local-day-text">12/{{ temperature }}℃</div>
        <div class="day-text">{{ weather }}</div>
      </div>
    </div>
    <div class="home-content">
      <div class="home-weibao">
        <div class="tips">
          <img src="@/static/mp-weixin/home-page/warn.png" />
          <div>上次维保时间：</div>
        </div>
        <img src="@/static/mp-weixin/home-page/warn.png" />
      </div>
      <div></div>
      <div></div>
    </div>
    <van-popup
      :show="popupShow"
      position="bottom"
      custom-style="height: 40%;"
      round
      closeable
      @close="onClosepopup">
      内容
      <div>
        <van-picker
          :columns="columns"
          @change="onChange" />
      </div>
    </van-popup>
  </div>
</template>
<script setup lang="ts">
import { onLoad } from '@dcloudio/uni-app'
import { onMounted, ref } from 'vue'
import AMapWX from '@/common/amap-wx.js'
const AampWX = ref('a57256414435de85874911887f3b47f6')
const amapPlugin = ref()
const addressNameCity = ref('青岛市')
const addressNameDistrict = ref('崂山区')
const temperature = ref(15)
const weather = ref('晴')
const popupShow = ref(false)
const columns = ref(['杭州', '宁波', '温州', '嘉兴', '湖州'])
//路径更改
onLoad(() => {
  amapPlugin.value = new AMapWX({
    key: AampWX.value,
  })
  getRegeo()
  getWeather()
})
const onChange = (event: any) => {
  const { picker, value, index } = event.detail
  console.log(picker, value, index)
}
const onClosepopup = () => {
  popupShow.value = false
  console.log(1111)
}
const getRegeo = () => {
  amapPlugin.value.getRegeo({
    success: (data: any) => {
      console.log(data)
      addressNameCity.value = data[0].regeocodeData.addressComponent.city
      addressNameDistrict.value = data[0].regeocodeData.addressComponent.district
    },
  })
}
const getWeather = () => {
  amapPlugin.value.getWeather({
    success: (data: any) => {
      console.log(data)
      temperature.value = data.temperature.data
      weather.value = data.weather.data
    },
  })
}
const handleChangeLocal = () => {
  popupShow.value = true
}
</script>
<style lang="scss">
.dayline {
  width: 100%;
  position: absolute;
  top: 0;
  z-index: -1;
}
.local-day {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 208rpx;
  padding: 0 42rpx;
  .location {
    font-size: 40rpx;
    font-weight: 500;
    color: #333333;
    line-height: 56rpx;
    display: flex;
    align-items: center;
    image {
      width: 32rpx;
      height: 40rpx;
      margin-right: 12rpx;
    }
  }
  .real-location {
    font-size: 28rpx;
    font-weight: 400;
    color: #333333;
    line-height: 40rpx;
    margin-left: 44rpx;
  }
  .local-day-text {
    font-size: 48rpx;
    font-weight: 400;
    color: #333333;
    line-height: 66rpx;
  }
  .day-text {
    font-size: 28rpx;
    font-weight: 400;
    color: #666666;
    line-height: 40rpx;
  }
}
.home-content {
  margin: 0 16rpx;
  border-radius: 8rpx 8rpx 0rpx 0rpx;
  margin-top: 48rpx;
  padding: 0 16rpx;
  border: 2rpx solid red;
  background-color: #fff;
  .home-weibao {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 96rpx;
    padding: 0 16rpx;
    font-size: 24rpx;
    font-weight: 400;
    color: #666666;
    line-height: 34rpx;
    .tips {
      display: flex;
      align-items: center;
    }
    image {
      width: 40rpx;
      height: 40rpx;
    }
  }
}
</style>
