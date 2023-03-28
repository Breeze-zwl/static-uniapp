<template>
  <view class="electric-box">
    <page-tabs :tabData="menuList" :defaultIndex="activeindex" @tabClick="tabClick" ></page-tabs>
    <van-tabs type="card" :active="active"  swipeable="true" class="sub-tabs" color="#2681FF" title-style="border: 1px soild #2681FF;">
      <van-tab  name="1" title="累计"></van-tab>
      <van-tab  name="2" title="今日"></van-tab>
    </van-tabs>
    <view class="uchart">
      <view class="charts-box">
        <qiun-data-charts 
          type="ring"
          :opts="opts"
          :chartData="chartData"
          :canvas2d="true"
          pixelRatio="1"
        />
      </view>
      <view class="button-info">电量查询</view>
    </view>
    <view class="ele-table">
      <view class="ele-top">
        <text class="ele-h">用电单元</text>
        <text class="ele-h">用电量 kwh</text>
        <text class="ele-h">占比</text>
      </view>
      <view class="value">
        <cell v-for="(item,index) in eleValue" :key="index" class="ele-value">
          <text class="ele-val">{{ item.title }}</text>
          <text class="ele-val">{{ item.code }}</text>
          <text class="ele-val">{{ item.rotate }}</text>
        </cell>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import PageTabs from '@/components/page-tabs/page-tabs.vue'
import { onReady } from '@dcloudio/uni-app'
const active = ref<number | string>("1")
const activeindex = ref<number>(1)
const menuList = ref([
   { title: '实时数据', code:1 },
   { title: '电能数据', code:2 },
 ])
 const eleValue = ref([
   { title: '冷机', code:'3882' ,rotate:'50%'},
   { title: '冷机', code:'3882' ,rotate:'50%'},
   { title: '冷机', code:'3882' ,rotate:'50%'},
   { title: '冷机', code:'3882' ,rotate:'50%'},
   { title: '冷机', code:'3882' ,rotate:'50%'},
 ])
const chartData = ref<object>({})
const pixelRatio = ref<number>(1)
const WHobj = reactive({
  cWidth:'' as number | string,
	cHeight:'' as number | string
})
const opts = reactive({
        rotate: false,
        rotateLock: false,
        color: ["#00C8F0","#2681FF","#00B45A","#7846E6","#3CA272","#FC8452","#9A60B4","#ea7ccc"],
        padding: [0,0,0,0],
        background:'red',
        canvasId:"ele-canvas",
        dataLabel: true,
        enableScroll: false,
        dataPointShapeType:'solid',
        legend: {
          show: true,
          position: "right",
          margin:0,
          padding: 0,
        },
        title: {
          name: "5000KW",
          fontSize: 20,
          color: "#333"
        },
        subtitle: {
          name: "电量",
          color: "#333",
          fontSize: 16,
          offsetY: 10
        },
        extra: {
          ring: {
            ringWidth: 40,
            activeOpacity: 0.5,
            activeRadius: 10,
            offsetAngle: -95,
            labelWidth: 15,
            border: false,
            borderWidth: 3,
            borderColor: "#777",
            centerColor: "#FFFFFF",
            customRadius: 0,
            linearType: "none"
          }
         
        }
   })
onReady(() => {
			//#ifdef MP-ALIPAY
			uni.getSystemInfo({
				success: function (res) {
					if(res.pixelRatio > 1){
						pixelRatio.value = 2
					}
				}
			});
			//#endif
			WHobj.cWidth=uni.upx2px(750)
			WHobj.cHeight=uni.upx2px(400)
      const query = uni.createSelectorQuery().select('#ele-canvas')
      query.boundingClientRect((data:any) => {
      }).exec()
      getServerData()
})
const getServerData = ()=> {
      setTimeout(() => {
        //模拟服务器返回数据，如果数据格式和标准格式不同，需自行按下面的格式拼接
        let res = {
            series: [{data: [{"name":"主机","value":50},{"name":"冷却泵","value":30,"labelShow":false},{"name":"冷却泵","value":20,"labelShow":false},{"name":"冷却塔","value":18,"labelShow":false}]}]
          }
        chartData.value = JSON.parse(JSON.stringify(res))
      }, 100)
  }
const tabClick = ( type: number | string )=>{
  let path = Number(type) === 1 ? `/pages/data-electric/index`:`/pages/data-center/index`
  uni.navigateTo({
    url: path
  })
}
const onChange =(event :any)=>{
  console.log('event',event.detail.name)
}
</script>
<style lang="scss">
.sub-tabs{
  margin-top: 32rpx;
  display: block;
  .van-tabs__nav--card .van-tab.van-tab--active{
    font-weight: normal;
  }
  .van-tabs__nav--card .van-tab{
    font-size: 28rpx;
  }
}
.uchart{
  position: relative;
  height:500rpx;
  .button-info{
    position: absolute;
    right:50rpx;
    bottom:30rpx;
    width: 176rpx;
    height: 64rpx;
    background: #FFFFFF;
    border-radius: 4rpx;
    border: 2rpx solid #2681FF;
    font-size: 28rpx;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #2681FF;
    text-align:center;
    line-height: 64rpx;
  }
}
.charts-box {
    width: 100%;
    height: 500rpx;
    margin-left:-90rpx;
  }
.ele-table{
  margin:0 32rpx;
  .ele-h{
    font-size: 28rpx;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #666666;
    flex:1;
    text-align: center;
    line-height: 96rpx;
  }
  .ele-top{
    display: flex;
    width:100%;
    align-items: center;
    justify-content: space-around;
    height: 96rpx;
    background: #F2F2F2;
  }
  .ele-value{
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .ele-val{
    border-right:1px solid #F2F2F2;
    border-bottom:1px solid #F2F2F2;
    height: 80rpx;
    font-size: 28rpx;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #333333;
    flex:1;
    text-align: center;
    line-height: 80rpx;
  }
  .ele-val:nth-of-type(3n){
    border-right:none;
  }
}
</style>
