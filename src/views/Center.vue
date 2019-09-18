<template>
  <div>
    <div>
      <van-nav-bar
        title="标题"
        right-text="按钮"
        @click-right="showPopup"
      />
     <van-dialog
      v-model="show"
      title="登录"
      show-cancel-button
      >
        <van-cell-group>
          <van-field
            v-model="username"
            clearable
            label="用户名"
            right-icon="question-o"
            placeholder="请输入用户名"
            @click-right-icon="$toast('question')"
            :label-width="xiao"
          />
        
          <van-field
            v-model="password"
            type="password"
            label="密码"
            placeholder="请输入密码"
            :label-width="xiao"
          />
          <router-link to="/reg">注册</router-link>
        </van-cell-group>
      </van-dialog>
    </div>
    <div class="bor">
      <van-image round width="5rem" height="5rem" src="https://img.yzcdn.cn/vant/cat.jpeg"/>
    </div>
    <van-cell title="购物车" is-link to="Details" />
    <van-cell title="地址" is-link to="Details" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
      value: "",
      username: "",
      password: "",
      xiao:"45px"
    };
  },
  methods: {
    showPopup() {
      this.show = true;
    }
  }
};
</script>
<style>
.van-image--round img {
  margin: 0 auto;
}
.bor {
  border-bottom: 1px solid #f5f5f5;
  padding: 10px 0px;
}
</style>