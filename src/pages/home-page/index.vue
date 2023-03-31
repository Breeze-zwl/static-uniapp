<template>
  <page-meta :page-style="popupShow ? 'overflow: hidden;' : ''"></page-meta>
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
          {{ chooselocal }}
          <img
            class="local-choose"
            src="~@/static/mp-weixin/home-page/chooseselect.png" />
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
        <img src="@/static/mp-weixin/home-page/selectright.png" />
      </div>
      <div>
        <div class="cycle-box">
          <div class="cycle">
            <img src="~@/static/mp-weixin/home-page/scycle.png" />
            <div class="cycle-op">
              <div class="cycle-jieneng">28</div>
              <div class="cycle-jietext">节能率</div>
            </div>
          </div>
          <div class="sort-timing">
            <div
              class="timing"
              @click="handleToCOP">
              <div class="react-text">3.8</div>
              <div class="react-desc">实时COP</div>
            </div>
            <div class="timing">
              <div class="react-text">3.8</div>
              <div class="react-desc">实时COP</div>
            </div>
          </div>
        </div>
        <div class="other-box">
          <div class="local-engc otherdivstyle">
            <div class="react-text">3.8</div>
            <div class="react-desc">实时COP</div>
          </div>
          <div class="local-error otherdivstyle">
            <div class="react-text-red">3.8</div>
            <div class="react-desc">实时COP</div>
          </div>
        </div>
      </div>
      <div class="handle-center">
        <div
          class="comhandelstyle"
          @click="handleTotimingcontrol">
          <img src="~@/static/mp-weixin/home-page/check.png" />
          <div class="handle-center-text">
            <div class="handle-center-hand">
              <div>实时监测</div>
              <div>
                <div
                  v-if="false"
                  class="zhuangtai">
                  <div class="bluepoint boxsty"></div>
                  <div class="bluetext">在线</div>
                </div>
                <div
                  v-else
                  class="zhuangtai">
                  <div class="graypoint boxsty"></div>
                  <div class="graytext">离线</div>
                </div>
              </div>
            </div>
            <div class="handle-center-hand">
              <div
                v-if="false"
                class="handle-myutext group-close-box group-black">
                群控关闭
              </div>
              <div
                v-else
                class="handle-myutext group-close-box group-green">
                群控开启
              </div>
              <div class="handle-myutext">今日运行时长：100h</div>
            </div>
          </div>
        </div>
        <div
          class="comhandelstyle"
          @click="handleToDatacenter">
          <img src="~@/static/mp-weixin/home-page/datacenter.png" />
          <div class="handle-center-text">
            <div class="handle-center-hand">
              <div>数据中心</div>
              <div>
                <div
                  v-if="false"
                  class="zhuangtai">
                  <div class="bluepoint boxsty"></div>
                  <div class="bluetext">正常</div>
                </div>
                <div
                  v-else
                  class="zhuangtai">
                  <div class="redpiont boxsty"></div>
                  <div class="redtext">异常</div>
                </div>
              </div>
            </div>
            <div class="handle-center-hand">
              <div class="handle-myutext">今日能耗：20000kmh</div>
              <div class="handle-myutext">设备总数：200台</div>
            </div>
          </div>
        </div>
        <div
          class="comhandelstyle"
          @click="handleToPolicecenter">
          <img src="~@/static/mp-weixin/home-page/plice-center.png" />
          <div class="handle-center-text">
            <div class="handle-center-hand">
              <div>报警中心</div>
              <div class="zhuangtai">
                <div class="redpiont boxsty"></div>
                <div class="redtext">严重：0</div>
              </div>
            </div>
            <div class="handle-center-hand">
              <div class="handle-myutext">紧急：0</div>
              <div class="handle-myutext">提示：0</div>
              <div class="handle-myutext">一般：0</div>
            </div>
          </div>
        </div>
        <div
          class="comhandelstyle"
          @click="handleToTime">
          <img src="~@/static/mp-weixin/home-page/timing.png" />
          <div class="handle-center-text">
            <div class="handle-center-hand">
              <div>智能定时</div>
              <div>
                <div
                  v-if="false"
                  class="zhuangtai">
                  <div class="greenpoint boxsty"></div>
                  <div class="greentext">启用中</div>
                </div>
                <div
                  v-else
                  class="zhuangtai">
                  <div class="graypoint boxsty"></div>
                  <div class="graytext">未启用</div>
                </div>
              </div>
            </div>
            <div class="handle-center-hand">
              <div></div>
              <div class="handle-myutext">定时条数：周定时</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <van-popup
      :show="popupShow"
      position="bottom"
      custom-style="height: 50%;"
      round
      @close="onClosepopup">
      <div>
        <van-picker
          show-toolbar
          title="请选择"
          :columns="columns"
          @cancel="handleonCancel"
          @confirm="handleonConfirm" />
      </div>
    </van-popup>
  </div>
</template>
<script setup lang="ts">
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import AMapWX from '@/common/amap-wx.js'
const AampWX = ref('a57256414435de85874911887f3b47f6')
const amapPlugin = ref()
const addressNameCity = ref('青岛市')
const addressNameDistrict = ref('崂山区')
const temperature = ref(15)
const weather = ref('晴')
const popupShow = ref(false)
const columns = ref(['杭州', '宁波', '温州', '嘉兴', '湖州'])
const chooselocal = ref('海尔空气楼c02')
//路径更改
onLoad(() => {
  amapPlugin.value = new AMapWX({
    key: AampWX.value,
  })
  getRegeo()
  getWeather()
})
const handleToCOP = () => {
  uni.navigateTo({
    url: '/pages/consume-eletric/index',
  })
}
const handleToTime = () => {
  uni.navigateTo({
    url: '/pages/consume-curve/index',
  })
}
const handleToDatacenter = () => {
  uni.navigateTo({
    url: '/pages/data-center/index',
  })
}
const handleTotimingcontrol = () => {
  uni.navigateTo({
    url: '/pages/timing-control/index',
  })
}
const handleToPolicecenter = () => {
  uni.navigateTo({
    url: '/pages/police-center/index',
  })
}
const handleonCancel = (event: any) => {
  const { value, index } = event.detail
  console.log(value, index)
  chooselocal.value = value
  popupShow.value = false
}
const handleonConfirm = (event: any) => {
  const { value, index } = event.detail
  console.log(value, index)
  chooselocal.value = value
  popupShow.value = false
}
const onClosepopup = () => {
  popupShow.value = false
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
    .local-choose {
      width: 40rpx;
      height: 40rpx;
      margin-left: 10rpx;
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
  .cycle-box {
    height: 334rpx;
    display: flex;
    justify-content: space-between;
    position: relative;
    .cycle {
      width: 718rpx;
      height: 334rpx;
      border-radius: 8rpx 8rpx 0rpx 0rpx;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      .cycle-jieneng {
        font-size: 56rpx;
        font-weight: 500;
        color: #2681ff;
        line-height: 80rpx;
      }
      .cycle-jietext {
        font-size: 28rpx;
        font-weight: 400;
        color: #333333;
        line-height: 40rpx;
      }
      image {
        width: 334rpx;
        height: 334rpx;
        position: absolute;
      }
    }
    .sort-timing {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .timing {
      width: 334rpx;
      height: 158rpx;
      background: linear-gradient(135deg, #e3eeff 0%, #f7faff 100%);
      border-radius: 4rpx;
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      .react-desc {
        font-size: 28rpx;
        font-weight: 400;
        color: #333333;
      }
      .react-text {
        font-size: 40rpx;
        font-weight: 500;
        color: #333333;
        line-height: 56rpx;
      }
    }
  }
  .other-box {
    display: flex;
    justify-content: space-between;
    height: 158rpx;
    margin-top: 18rpx;
    .otherdivstyle {
      width: 334rpx;
      height: 158rpx;
      border-radius: 4rpx;
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      .react-text {
        font-size: 40rpx;
        font-weight: 500;
        color: #333333;
        line-height: 56rpx;
      }
      .react-desc {
        font-size: 28rpx;
        font-weight: 400;
        color: #333333;
      }
      .react-text-red {
        font-size: 40rpx;
        font-weight: 500;
        color: #f05537;
        line-height: 56rpx;
      }
    }
    .local-engc {
      background: linear-gradient(90deg, rgba(38, 129, 255, 0.15) 0%, rgba(38, 199, 255, 0.04) 100%);
    }
    .local-error {
      background: linear-gradient(90deg, rgba(240, 85, 55, 0.15) 0%, rgba(240, 85, 55, 0.04) 100%);
    }
  }
}
.handle-center {
  margin-top: 32rpx;
  padding-bottom: 32rpx;
  .comhandelstyle {
    // width: 100%;
    height: 168rpx;
    box-shadow: 0rpx 0rpx 10rpx 0rpx rgba(0, 0, 0, 0.1);
    border-radius: 4rpx;
    margin-bottom: 16rpx;
    padding: 0 32rpx;
    display: flex;
    align-items: center;
    image {
      width: 88rpx;
      height: 88rpx;
      margin-right: 40rpx;
    }
    .handle-center-text {
      flex: 1;
      .handle-myutext {
        color: #333333;
        font-size: 28rpx;
      }
      .group-close-box {
        width: 128rpx;
        height: 40rpx;
        border-radius: 4rpx;
        font-size: 24rpx;
        text-align: center;
        line-height: 40rpx;
      }
      .group-green {
        background: #eaf3ff;
        color: #2681ff;
      }
      .group-black {
        color: #fff;
        background: #333333;
      }
    }
    .handle-center-hand {
      margin-bottom: 8rpx;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .zhuangtai {
        display: flex;
        align-items: center;
      }
    }
  }
}
.boxsty {
  height: 16rpx;
  width: 16rpx;
  border-radius: 50%;
  margin-right: 18rpx;
}
.bluepoint {
  background-color: #2681ff;
}
.bluetext {
  color: #2681ff;
}
.graypoint {
  background-color: #666666;
}
.graytext {
  color: #666666;
}
.greenpoint {
  background-color: #00b45a;
}
.greentext {
  color: #00b45a;
}
.redpiont {
  background-color: #f05537;
}
.redtext {
  color: #f05537;
}
</style>
