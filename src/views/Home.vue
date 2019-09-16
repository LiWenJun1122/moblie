<template>
  <div>
    <div style="background:#f5f5f5" id="home-tab" v-if="active=='home-tab'">
      <div>
        <van-nav-bar title="聚成品"  right-text="搜索" @click-right="onClickRight"/>
        <van-search class="search" v-bind:style="{display:show}" placeholder="请输入搜索关键词" v-model="value" />
      </div>
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in carousel" :key="index">
          <img style="width:375px;height:185px" v-lazy="image" />
        </van-swipe-item>
      </van-swipe> 
      <div class="home-a">
        <van-grid :border="false" :column-num="3" v-for="(sp,aa) of list2" :key="aa" >
          <h3 style="display:block;width:100%;text-align:left;">{{sp.title}}</h3>
          <van-grid-item style="overfloat:hidden" v-for="(dj,bb) of sp.spList" :key="bb">
            <van-image :src="dj.sLink" />
          </van-grid-item>
        </van-grid>
      </div>
    </div>
    <!-- <hPage v-if="active=='home-tab'" />-->
    <List v-if="active=='list'" name="list"></List>
    <Center v-if="active=='center'" name="center"></Center>
    <van-tabbar active-color="#e61e04" v-model="active">
      <van-tabbar-item  name="home-tab" icon="home-o">
        <!-- <span>首页</span> -->
        <!-- <img
          slot="icon"
          slot-scope="props"
          :src="props.active ? icon.active : icon.normal"
        > -->
        首页
      </van-tabbar-item>
      <van-tabbar-item name="list" icon="search">标签</van-tabbar-item>
      <van-tabbar-item name="center" icon="setting-o">标签</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import List from './List.vue'
import Center from './Center.vue'
export default {
  components: {
    List,
    Center
},

  data() {
    return {
      value:"",
      show:"none",
      active:"home-tab",
      icon:{
         normal: require('../../public/imgs/icon/home.png'),
        active: require('../../public/imgs/icon/home-active.png')
      },
      list: [
        {
          spell: "精挑细选，给你最好的礼物。",
          title: "今日力荐",
          pic: [
            {
              src: require("../../public/imgs/jinri/jinri1.jpg")
            },
            {
              src: require("../../public/imgs/jinri/jinri2.jpg")
            },
            {
              src: require("../../public/imgs/jinri/jinri3.jpg")
            },
            {
              src: require("../../public/imgs/jinri/jinri4.jpg")
            }
          ]
        }
      ],

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
      ],
      carousel: [
        require("../../public/imgs/carousel.jpg"),
        require("../../public/imgs/carousel1.jpg"),
        require("../../public/imgs/carousel2.jpg"),
        require("../../public/imgs/carousel3.jpg")
      ]
    };
  },
  methods: {
    onClickRight(){
      if(this.show=="none"){
      this.show="block";        
      }else{
        this.show="none";
      }
    }
  },
  // created() {
  //   this.axios.get("http://127.0.0.1:3000/details")
  //   .then(res=>{
  //     var list = result.data;
  //     console.log(list);
  //   })
  // },
};
</script>
<style>
.search{
  position:absolute;top:-8px;left:70px;z-index:2;padding: 6px 12px;
}
.home-a{
  padding-bottom: 40px;
}
h3{
  margin-bottom: 5px;
}
</style>

