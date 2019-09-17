<template>
  <div>
    <van-nav-bar
  title="标题"
  right-text="按钮"
  @click-right="onClickRight"
/>
    <div class="bor">
      <van-image round width="5rem" height="5rem" src="https://img.yzcdn.cn/vant/cat.jpeg"/>
    </div>
    <van-cell title="购物车" is-link to="Details" />
    <van-cell title="地址" is-link to="Details" />
  </div>
</template>
<script>
export default {
   methods: {
    onClickRight() {
      this.$toast('登录成功');
    }
  }
};
</script>
<style>
.van-image--round img {
  margin: 0 auto;
}
.bor{
  border-bottom: 1px solid #f5f5f5;
  padding:10px 0px;
}
</style>