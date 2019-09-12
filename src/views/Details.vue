<template>
  <div>
    <van-nav-bar  title="标题"  left-text="返回"  left-arrow  @click-left="onClickLeft"  @click-right="onClickRight"/>
    <div>
      <img height="350rem" width="350rem" :src="spList.sLink" alt="">
    </div>
    <van-panel :title="spList.sDescribe" :desc="spList.sMallName" status="在售">
      <div>{{spList.sDetail}}</div>
    </van-panel>
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" />
      <van-goods-action-icon icon="shop-o" text="店铺" />
      <van-goods-action-button  color="#be99ff" type="warning" text="加入购物车" />
      <van-goods-action-button @click="onBuyClicked" color="#7232dd" type="danger" text="立即购买" />
    </van-goods-action>
    <van-sku
      v-model="show"
      :sku="sku"
      :goods="goods"
      :quota="quota"
      :quota-used="quotaUsed"
      :show-add-cart-btn="showAddCartBtn"
      :buy-text="buyText"
      :hide-stock="sku.hide_stock"
      :message-config="messageConfig"
      @buy-clicked="onBuyClicked"
      @add-cart="onAddCartClicked"
    />
  </div>
</template>
<script>
export default {
  data() {
    return {
      spList: {
        Price: 298,
        iTargetType: "1",
        sAdKey: "index_goods_0",
        sDescribe: "雷神枪模",
        sLink: require("../../public/imgs/xinpin/xinpin1.jpg"),
        sMallName: "M4A1-雷神 枪模手办",
        sName: "新品推荐",
        sDetail: "科技机械外观,枪身合金材质",
        sNameDesc: "荣耀新品，Q到你想要！",
        sTitle: "新品"
      },
      show: false,
      showAddCartBtn:false,
      buyText:"确定",
      sku: {
        // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
        // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
        tree: [
          {
            k: "颜色", // skuKeyName：规格类目名称
            v: [
              {
                id: "30349", // skuValueId：规格值 id
                name: "红色", // skuValueName：规格值名称
                imgUrl: "https://img.yzcdn.cn/1.jpg" // 规格类目图片，只有第一个规格类目可以定义图片
              },
              {
                id: "1215",
                name: "蓝色",
                imgUrl: "https://img.yzcdn.cn/2.jpg"
              }
            ],
            k_s: "s1" // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
          }
        ],
        // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
        list: [
          {
            id: 2259, // skuId，下单时后端需要
            price: 100, // 价格（单位分）
            s1: "1215", // 规格类目 k_s 为 s1 的对应规格值 id
            s2: "1193", // 规格类目 k_s 为 s2 的对应规格值 id
            s3: "0", // 最多包含3个规格值，为0表示不存在该规格
            stock_num: 110 // 当前 sku 组合对应的库存
          }
        ],
        price: "1.00", // 默认价格（单位元）
        stock_num: 227, // 商品总库存
        collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
        none_sku: false, // 是否无规格商品
        messages: [
          {
            // 商品留言
            datetime: "0", // 留言类型为 time 时，是否含日期。'1' 表示包含
            multiple: "0", // 留言类型为 text 时，是否多行文本。'1' 表示多行
            name: "留言", // 留言名称
            type: "text", // 留言类型，可选: id_no（身份证）, text, tel, date, time, email
            required: "1", // 是否必填 '1' 表示必填
            placeholder: "" // 可选值，占位文本
          }
        ],
        hide_stock: false // 是否隐藏剩余库存
      },
      goods: {},
      quota: 0,
      quotaUsed: 0,
      messageConfig: {}
    };
  },
  methods: {
    onClickLeft() {
      Toast("返回");
    },
    onClickRight() {
      Toast("按钮");
    },
    car() {},
    onBuyClicked() {
      if(this.show==false){
        this.show=true
      }else{
        this.show=false
      }
    },
    onAddCartClicked() {}
  }
};
</script>
<style>
.van-cell__title {
  text-align: left;
}
.van-cell__title > div {
  text-align: left;
}
</style>
