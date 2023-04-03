<template>
  <div>
    <page-tabs
      :tabData="menuList"
      :defaultIndex="activeindex"
      @tabClick="handletabClick"></page-tabs>
    <div
      v-if="isSocket"
      class="historyclass">
      <van-tabs
        type="card"
        color="#2681FF"
        :active="tabactiveindex"
        @change="handletabhistory">
        <van-tab
          title="实时"
          :name="0"></van-tab>
        <van-tab
          title="历史"
          :name="1"></van-tab>
      </van-tabs>
      <div class="listboxstyle">
        <div
          class="listclass"
          v-for="item in [1, 2, 3, 4, 5, 6, 7, 8]"
          :key="item">
          <img
            class="kimagehs"
            src="~@/static/mp-weixin/home-page/scycle.png" />
          <div>
            <div class="kofirsttitle">
              <div class="text-jiji">1#冷冻崩</div>
              <div class="zhuangtaired">
                <div class="pointyuit"></div>
                <div>紧急</div>
              </div>
            </div>
            <div class="timeclasssa">
              <div class="lpoiuyt">状态：</div>
              <div class="plkiuy">1#冷机故障</div>
            </div>
            <div class="timeclasssa">
              <div class="lpoiuyt">时间：</div>
              <div class="plkiuy">2022-07-31 08:00:00</div>
            </div>
          </div>
        </div>
      </div>
      <van-button
        type="info"
        plain
        class="call-phone"
        @click="callphone">
        联系售后
      </van-button>
      <van-popup
        :show="callphonepopup"
        closeable
        @close="onClosecallphone">
        <div class="callphonepopupclass">
          <div class="phoneNumb">
            <img src="~@/static/mp-weixin/police-center/phoneicon.png" />
            <div>0532-83456789</div>
          </div>
          <van-button
            color="#2681FF"
            type="primary"
            class="handlephoneclass"
            @click="handleCall">
            拨打
          </van-button>
        </div>
      </van-popup>
    </div>
    <div v-else>
      <reportMessage></reportMessage>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import reportMessage from '@/pages/police-center/components/report-message.vue'
const activeindex = ref<number>(0)
const tabactiveindex = ref<number>(0)
const isSocket = ref<boolean>(true)
const callphonepopup = ref<boolean>(false)
const menuList = ref([
  { title: '故障列表', code: 0 },
  { title: '通讯记录', code: 1 },
])
const handletabClick = (e: any) => {
  console.log(e)
  isSocket.value = +e == 0 ? true : false
}
const handletabhistory = () => {}
const callphone = () => {
  callphonepopup.value = true
}
const handleCall = () => {
  uni.makePhoneCall({
    phoneNumber: '0532-83456789', //仅为示例
  })
}
const onClosecallphone = () => {
  callphonepopup.value = false
}
</script>
<style lang="scss">
.historyclass {
  margin-top: 32rpx;
  padding: 0 32rpx;
  padding-bottom: 32rpx;
  .callphonepopupclass {
    width: 683rpx;
    height: 428rpx;
    border-radius: 4rpx;
    overflow: hidden;
    position: relative;
    .phoneNumb {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 158rpx;
      image {
        width: 48rpx;
        height: 48rpx;
      }
    }
    .handlephoneclass {
      position: absolute;
      bottom: 58rpx;
      width: 100%;
      text-align: center;
      ::v-deep .van-button {
        width: 558rpx;
      }
    }
  }
  .call-phone {
    text-align: center;
    width: 654rpx;
    ::v-deep .van-button {
      width: 100%;
    }
  }
  .listclass {
    display: flex;
    align-items: center;
    gap: 24rpx;
    padding: 28rpx 32rpx 20rpx 0;
    border-bottom: 2rpx solid #e5e5e5;
    .timeclasssa {
      display: flex;
      .lpoiuyt {
        font-weight: 400;
        display: flex;
      }
      .plkiuy {
        font-size: 28rpx;
        font-weight: 500;
        color: #333333;
      }
    }
    .kimagehs {
      width: 264rpx;
      height: 192rpx;
    }
    .kofirsttitle {
      display: flex;
      justify-content: space-between;
      .text-jiji {
        font-size: 32rpx;
        font-weight: 500;
        color: #333333;
      }
      .zhuangtaired {
        color: #f05537;
        display: flex;
        align-items: center;
        .pointyuit {
          height: 16rpx;
          width: 16rpx;
          border-radius: 50%;
          margin-right: 18rpx;
          background: #f05537;
        }
      }
    }
  }
}
.listboxstyle {
  margin-top: 32rpx;
  height: 1100rpx;
  overflow: auto;
}
</style>
