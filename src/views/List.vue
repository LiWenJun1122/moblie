<template>
  <div id="list">
    <van-tabs v-model="activeName">
  <van-tab title="新品推荐" name="a">
    <van-list
  v-model="loading"
  :finished="finished"
  finished-text="没有更多了"
  @load="onLoad"
>
    <van-card
        :price="aa.Price"
        :desc="aa.sMallName"  
        :title="aa.sDescribe"
        :thumb="aa.sLink"
        v-for="(aa,index) in list2[0].spList" :key="index"
    />
    </van-list>
  </van-tab>
  <van-tab title="定制专区" name="b" >
    <van-card
        :price="aa.Price"
        :desc="aa.sMallName"  
        :title="aa.sDescribe"
        :thumb="aa.sLink"
        v-for="(aa,index) in list2[1].spList" :key="index"
>
  <div slot="tags">
    <van-tag plain type="danger">标签</van-tag>
    <van-tag plain type="danger">标签</van-tag>
  </div>
  <div slot="footer">
    <van-button size="mini">收藏</van-button>
  </div>
</van-card>
  </van-tab>
  <van-tab title="毛绒玩具" name="c">
    <van-card
        :price="aa.Price"
        :desc="aa.sMallName"  
        :title="aa.sDescribe"
        :thumb="aa.sLink"
        v-for="(aa,index) in list2[2].spList" :key="index"
></van-card>
  </van-tab>
</van-tabs>
  </div>
</template>
<script>
export default {
  name: "List",
  data() {
    return {
      activeName: "a",
      loading: false,
      finished: false,
      list2: [
        {
          spell: "荣耀新品，Q到你想要！",
          title: "新品推荐",
          picture: require("../../public/imgs/xinpin/xinpin.jpg"),
          spList: [
            {
              Price: 298,
              iTargetType: "1",
              sAdKey: "index_goods_0",
              sDescribe: "雷神枪模",
              sLink: require("../../public/imgs/xinpin/xinpin1.jpg"),
              sMallName: "M4A1-雷神 枪模手办",
              sName: "新品推荐",
              sNameDesc: "荣耀新品，Q到你想要！",
              sTitle: "新品"
            },
            {
              Price: 298,
              iTargetType: "1",
              sAdKey: "index_goods_0",
              sDescribe: "雷神枪模",
              sLink: require("../../public/imgs/xinpin/xinpin1.jpg"),
              sMallName: "M4A1-雷神 枪模手办",
              sName: "新品推荐",
              sNameDesc: "荣耀新品，Q到你想要！",
              sTitle: "新品"
            },
            {
              Price: 298,
              iTargetType: "1",
              sAdKey: "index_goods_0",
              sDescribe: "雷神枪模",
              sLink: require("../../public/imgs/xinpin/xinpin1.jpg"),
              sMallName: "M4A1-雷神 枪模手办",
              sName: "新品推荐",
              sNameDesc: "荣耀新品，Q到你想要！",
              sTitle: "新品"
            },
            {
              Price: 298,
              iTargetType: "1",
              sAdKey: "index_goods_0",
              sDescribe: "雷神枪模",
              sLink: require("../../public/imgs/xinpin/xinpin1.jpg"),
              sMallName: "M4A1-雷神 枪模手办",
              sName: "新品推荐",
              sNameDesc: "荣耀新品，Q到你想要！",
              sTitle: "新品"
            },
            {
              Price: 98,
              iTargetType: "1",
              sAdKey: "index_goods_0",
              sDescribe: "【预售】武神&幽兰颜究小盒",
              sLink: require("../../public/imgs/xinpin/xinpin2.jpg"),
              sMallName: "【现货】武神&幽兰颜究小盒",
              sName: "新品推荐",
              sNameDesc: "荣耀新品，Q到你想要！",
              sTitle: "新品"
            },
            {
              Price: 98,
              iTargetType: "1",
              sAdKey: "index_goods_0",
              sDescribe: "【预售】武神&幽兰颜究小盒",
              sLink: require("../../public/imgs/xinpin/xinpin2.jpg"),
              sMallName: "【现货】武神&幽兰颜究小盒",
              sName: "新品推荐",
              sNameDesc: "荣耀新品，Q到你想要！",
              sTitle: "新品"
            },
            {
              Price: 98,
              iTargetType: "1",
              sAdKey: "index_goods_0",
              sDescribe: "【预售】武神&幽兰颜究小盒",
              sLink: require("../../public/imgs/xinpin/xinpin2.jpg"),
              sMallName: "【现货】武神&幽兰颜究小盒",
              sName: "新品推荐",
              sNameDesc: "荣耀新品，Q到你想要！",
              sTitle: "新品"
            },
            {
              Price: 98,
              iTargetType: "1",
              sAdKey: "index_goods_0",
              sDescribe: "【预售】武神&幽兰颜究小盒",
              sLink: require("../../public/imgs/xinpin/xinpin2.jpg"),
              sMallName: "【现货】武神&幽兰颜究小盒",
              sName: "新品推荐",
              sNameDesc: "荣耀新品，Q到你想要！",
              sTitle: "新品"
            },
            {
              Price: 98,
              iTargetType: "1",
              sAdKey: "index_goods_0",
              sDescribe: "【预售】武神&幽兰颜究小盒",
              sLink: require("../../public/imgs/xinpin/xinpin2.jpg"),
              sMallName: "【现货】武神&幽兰颜究小盒",
              sName: "新品推荐",
              sNameDesc: "荣耀新品，Q到你想要！",
              sTitle: "新品"
            },
            {
              Price: 98,
              iTargetType: "1",
              sAdKey: "index_goods_0",
              sDescribe: "【预售】武神&幽兰颜究小盒",
              sLink: require("../../public/imgs/xinpin/xinpin2.jpg"),
              sMallName: "【现货】武神&幽兰颜究小盒",
              sName: "新品推荐",
              sNameDesc: "荣耀新品，Q到你想要！",
              sTitle: "新品"
            },
            {
              Price: 98,
              iTargetType: "1",
              sAdKey: "index_goods_0",
              sDescribe: "【预售】武神&幽兰颜究小盒",
              sLink: require("../../public/imgs/xinpin/xinpin2.jpg"),
              sMallName: "【现货】武神&幽兰颜究小盒",
              sName: "新品推荐",
              sNameDesc: "荣耀新品，Q到你想要！",
              sTitle: "新品"
            },
            {
              Price: 98,
              iTargetType: "1",
              sAdKey: "index_goods_0",
              sDescribe: "【预售】武神&幽兰颜究小盒",
              sLink: require("../../public/imgs/xinpin/xinpin2.jpg"),
              sMallName: "【现货】武神&幽兰颜究小盒",
              sName: "新品推荐",
              sNameDesc: "荣耀新品，Q到你想要！",
              sTitle: "新品"
            },
            {
              Price: 98,
              iTargetType: "1",
              sAdKey: "index_goods_0",
              sDescribe: "【预售】武神&幽兰颜究小盒",
              sLink: require("../../public/imgs/xinpin/xinpin2.jpg"),
              sMallName: "【现货】武神&幽兰颜究小盒",
              sName: "新品推荐",
              sNameDesc: "荣耀新品，Q到你想要！",
              sTitle: "新品"
            },
            {
              Price: 98,
              iTargetType: "1",
              sAdKey: "index_goods_0",
              sDescribe: "【预售】武神&幽兰颜究小盒",
              sLink: require("../../public/imgs/xinpin/xinpin2.jpg"),
              sMallName: "【现货】武神&幽兰颜究小盒",
              sName: "新品推荐",
              sNameDesc: "荣耀新品，Q到你想要！",
              sTitle: "新品"
            },
            {
              Price: 98,
              iTargetType: "1",
              sAdKey: "index_goods_0",
              sDescribe: "【预售】武神&幽兰颜究小盒",
              sLink: require("../../public/imgs/xinpin/xinpin2.jpg"),
              sMallName: "【现货】武神&幽兰颜究小盒",
              sName: "新品推荐",
              sNameDesc: "荣耀新品，Q到你想要！",
              sTitle: "新品"
            },
            {
              Price: 98,
              iTargetType: "1",
              sAdKey: "index_goods_0",
              sDescribe: "【预售】武神&幽兰颜究小盒",
              sLink: require("../../public/imgs/xinpin/xinpin2.jpg"),
              sMallName: "【现货】武神&幽兰颜究小盒",
              sName: "新品推荐",
              sNameDesc: "荣耀新品，Q到你想要！",
              sTitle: "新品"
            },
            {
              Price: 98,
              iTargetType: "1",
              sAdKey: "index_goods_0",
              sDescribe: "【预售】武神&幽兰颜究小盒",
              sLink: require("../../public/imgs/xinpin/xinpin2.jpg"),
              sMallName: "【现货】武神&幽兰颜究小盒",
              sName: "新品推荐",
              sNameDesc: "荣耀新品，Q到你想要！",
              sTitle: "新品"
            },
            {
              Price: 98,
              iTargetType: "1",
              sAdKey: "index_goods_0",
              sDescribe: "【预售】武神&幽兰颜究小盒",
              sLink: require("../../public/imgs/xinpin/xinpin2.jpg"),
              sMallName: "【现货】武神&幽兰颜究小盒",
              sName: "新品推荐",
              sNameDesc: "荣耀新品，Q到你想要！",
              sTitle: "新品"
            },
            {
              Price: 98,
              iTargetType: "1",
              sAdKey: "index_goods_0",
              sDescribe: "【预售】武神&幽兰颜究小盒",
              sLink: require("../../public/imgs/xinpin/xinpin2.jpg"),
              sMallName: "【现货】武神&幽兰颜究小盒",
              sName: "新品推荐",
              sNameDesc: "荣耀新品，Q到你想要！",
              sTitle: "新品"
            },
            {
              Price: 98,
              iTargetType: "1",
              sAdKey: "index_goods_0",
              sDescribe: "【预售】武神&幽兰颜究小盒",
              sLink: require("../../public/imgs/xinpin/xinpin2.jpg"),
              sMallName: "【现货】武神&幽兰颜究小盒",
              sName: "新品推荐",
              sNameDesc: "荣耀新品，Q到你想要！",
              sTitle: "新品"
            },
            {
              Price: 98,
              iTargetType: "1",
              sAdKey: "index_goods_0",
              sDescribe: "【预售】武神&幽兰颜究小盒",
              sLink: require("../../public/imgs/xinpin/xinpin2.jpg"),
              sMallName: "【现货】武神&幽兰颜究小盒",
              sName: "新品推荐",
              sNameDesc: "荣耀新品，Q到你想要！",
              sTitle: "新品"
            },
            {
              Price: 98,
              iTargetType: "1",
              sAdKey: "index_goods_0",
              sDescribe: "【预售】武神&幽兰颜究小盒",
              sLink: require("../../public/imgs/xinpin/xinpin2.jpg"),
              sMallName: "【现货】武神&幽兰颜究小盒",
              sName: "新品推荐",
              sNameDesc: "荣耀新品，Q到你想要！",
              sTitle: "新品"
            },
            {
              Price: 98,
              iTargetType: "1",
              sAdKey: "index_goods_0",
              sDescribe: "【预售】武神&幽兰颜究小盒",
              sLink: require("../../public/imgs/xinpin/xinpin2.jpg"),
              sMallName: "【现货】武神&幽兰颜究小盒",
              sName: "新品推荐",
              sNameDesc: "荣耀新品，Q到你想要！",
              sTitle: "新品"
            },
            {
              Price: 98,
              iTargetType: "1",
              sAdKey: "index_goods_0",
              sDescribe: "【预售】武神&幽兰颜究小盒",
              sLink: require("../../public/imgs/xinpin/xinpin2.jpg"),
              sMallName: "【现货】武神&幽兰颜究小盒",
              sName: "新品推荐",
              sNameDesc: "荣耀新品，Q到你想要！",
              sTitle: "新品"
            },
            {
              Price: 98,
              iTargetType: "1",
              sAdKey: "index_goods_0",
              sDescribe: "【预售】武神&幽兰颜究小盒",
              sLink: require("../../public/imgs/xinpin/xinpin2.jpg"),
              sMallName: "【现货】武神&幽兰颜究小盒",
              sName: "新品推荐",
              sNameDesc: "荣耀新品，Q到你想要！",
              sTitle: "新品"
            },
            {
              Price: 98,
              iTargetType: "1",
              sAdKey: "index_goods_0",
              sDescribe: "【预售】武神&幽兰颜究小盒",
              sLink: require("../../public/imgs/xinpin/xinpin2.jpg"),
              sMallName: "【现货】武神&幽兰颜究小盒",
              sName: "新品推荐",
              sNameDesc: "荣耀新品，Q到你想要！",
              sTitle: "新品"
            },
            {
              Price: 98,
              iTargetType: "1",
              sAdKey: "index_goods_0",
              sDescribe: "【预售】武神&幽兰颜究小盒",
              sLink: require("../../public/imgs/xinpin/xinpin2.jpg"),
              sMallName: "【现货】武神&幽兰颜究小盒",
              sName: "新品推荐",
              sNameDesc: "荣耀新品，Q到你想要！",
              sTitle: "新品"
            },
            {
              Price: 98,
              iTargetType: "1",
              sAdKey: "index_goods_0",
              sDescribe: "【预售】武神&幽兰颜究小盒",
              sLink: require("../../public/imgs/xinpin/xinpin2.jpg"),
              sMallName: "【现货】武神&幽兰颜究小盒",
              sName: "新品推荐",
              sNameDesc: "荣耀新品，Q到你想要！",
              sTitle: "新品"
            },
            {
              Price: 268,
              iTargetType: "1",
              sAdKey: "index_goods_0",
              sDescribe: "飞龙在天盲僧保温杯",
              sLink: require("../../public/imgs/xinpin/xinpin3.jpg"),
              sMallName: "飞龙在天 盲僧膳魔师 保温杯",
              sName: "新品推荐",
              sNameDesc: "荣耀新品，Q到你想要！",
              sTitle: "新品"
            }
          ]
        },
        {
          spell: "独一无二，定制专属于你的周边",
          title: "定制专区",
          picture: require("../../public/imgs/dingzhi/list.jpg"),
          spList: [
            {
              Price: 59,
              iTargetType: "1",
              sAdKey: "index_goods_1",
              sDescribe: "洛手机壳",
              sLink: require("../../public/imgs/dingzhi/list1.jpg"),
              sMallName: "【限定】炫舞十周年定制-牛神手机壳",
              sName: "定制专区",
              sNameDesc: "独一无二，定制专属于你的周边",
              sTitle: "定制"
            },
            {
              Price: 49,
              iTargetType: "1",
              sAdKey: "index_goods_1",
              sDescribe: "【限定】炫舞十周年定制-兔神手机壳",
              sLink: require("../../public/imgs/dingzhi/list2.jpg"),
              sMallName: "【新角色】女款斗士浮雕定制手机壳",
              sName: "定制专区",
              sNameDesc: "独一无二，定制专属于你的周边",
              sTitle: "定制"
            },
            {
              Price: 36,
              iTargetType: "1",
              sAdKey: "index_goods_0",
              sDescribe: "【1周年庆】冒险音乐会主题定制手机壳",
              sLink: require("../../public/imgs/dingzhi/list3.jpg"),
              sMallName: "【1周年庆】冒险音乐会主题定制手机壳",
              sName: "定制专区",
              sNameDesc: "独一无二，定制专属于你的周边",
              sTitle: "定制"
            }
          ]
        },
        {
          spell: "可爱呆萌 暖心陪伴",
          title: "玩具毛绒",
          picture: require("../../public/imgs/maorong/maorong.jpg"),
          spList: [
            {
              Price: 150,
              iTargetType: "1",
              sAdKey: "index_goods_1",
              sDescribe: "哞利斯塔 手办",
              sLink: require("../../public/imgs/maorong/maorong1.jpg"),
              sMallName: "哞利斯塔 手办",
              sName: "定制专区",
              sNameDesc: "独一无二，定制专属于你的周边",
              sTitle: "定制"
            },
            {
              Price: 344,
              iTargetType: "1",
              sAdKey: "index_goods_1",
              sDescribe: "盲僧李青 中型雕塑",
              sLink: require("../../public/imgs/maorong/maorong2.jpg"),
              sMallName: "盲僧李青 中型雕塑",
              sName: "定制专区",
              sNameDesc: "独一无二，定制专属于你的周边",
              sTitle: "定制"
            },
            {
              Price: 98,
              iTargetType: "1",
              sAdKey: "index_goods_0",
              sDescribe: "女圣职者手办",
              sLink: require("../../public/imgs/maorong/maorong3.jpg"),
              sMallName: "【现货】武神&幽兰颜究小盒",
              sName: "定制专区",
              sNameDesc: "独一无二，定制专属于你的周边",
              sTitle: "定制"
            }
          ]
        },
        {
          spell: "游戏周边，伴你炫酷出行",
          title: "服饰鞋帽",
          picture: require("../../public/imgs/yifu/yifu.jpg"),
          spList: [
            {
              Price: 239,
              iTargetType: "1",
              sAdKey: "index_goods_1",
              sDescribe: "飞龙在天 盲僧卫衣 墨染",
              sLink: require("../../public/imgs/yifu/yifu1.jpg"),
              sMallName: "飞龙在天 盲僧卫衣 墨染",
              sName: "定制专区",
              sNameDesc: "独一无二，定制专属于你的周边",
              sTitle: "定制"
            },
            {
              Price: 98,
              iTargetType: "1",
              sAdKey: "index_goods_1",
              sDescribe: "白银时代鲁班帽子",
              sLink: require("../../public/imgs/yifu/yifu2.jpg"),
              sMallName: "白银时代鲁班帽子",
              sName: "定制专区",
              sNameDesc: "独一无二，定制专属于你的周边",
              sTitle: "定制"
            },
            {
              Price: 299,
              iTargetType: "1",
              sAdKey: "index_goods_0",
              sDescribe: "吐槽卫衣 - 安排一下",
              sLink: require("../../public/imgs/yifu/yifu3.jpg"),
              sMallName: "吐槽卫衣 - 安排一下",
              sName: "定制专区",
              sNameDesc: "独一无二，定制专属于你的周边",
              sTitle: "定制"
            }
          ]
        }
      ]
    };
  },

  methods: {
    onLoad() {
      // 异步更新数据
      setTimeout(() => {
        for (let i = 0; i < 1; i++) {
          this.list2.push(this.list2.length + 1);
        }
        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list2.length >= 10) {
          this.finished = true;
        }
      }, 500);
    }
  }
};
</script>
<style>
  .van-card__content{
    text-align:left;
  }
  #list{
    padding-bottom:40px;
  }
</style>
