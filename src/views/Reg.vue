 <template>
  <div>
      <van-nav-bar
        title="标题"
        left-text="返回"
        right-text="完成"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      />
      <van-cell-group>
      <van-field
        v-model="username"
        required
        clearable
        label="用户名"
        right-icon="question-o"
        placeholder="请输入用户名"
        @click-right-icon="tishi"
        :error-message=" unameError"
        @blur="uname"
      />
      <van-field
        v-model="password"
        type="password"
        label="密码"
        placeholder="请输入密码"
        required
        :error-message="errorMessage"
        @blur="upwd"
        maxlength="25"
      />
      <van-field
        v-model="phone"
        label="手机号"
        placeholder="请输入手机号"
        :error-message="telErrorMessage"
        @blur="tel"
        maxlength="11"
      />
      
      <van-radio-group style="padding: 10px 16px;" class="clearfix" v-model="radio">
        <div style="text-align:left;width: 90px;float:left;">
          <span>性别</span>
        </div>
        <van-radio style="float:left;margin-right:5px;" name="1" checked-color="#07c160">男</van-radio>
        <van-radio style="float:left;" name="2" checked-color="#07c160">女</van-radio>
      </van-radio-group>
    </van-cell-group>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username:"",
      password:"",
      errorMessage:"",
      telErrorMessage:"",
      phone:"",
      unameError:"",
      radio:1
    };
  },
  methods:{
    uname(){
      if(this.username==""){
        this. unameError="账号不能为空"
      }else{
        this. unameError="";
      }

    },
    upwd(){
      if(this.password==""){
        this.errorMessage="密码不能为空"
      }else{
        this.errorMessage="";
      }
    },
    tel(){
      if(this.phone==""){
        this.telErrorMessage="手机号不能为空"
      }else{
        this.telErrorMessage=""
      }
    },
    tishi(){
      this.$toast('*号部分为必填项,无则不填')
    },
    onClickLeft() {
      this.$toast('返回');
    },
    onClickRight() {
      this.$toast('按钮');
    }
  }
};
</script>
<style>
  .clearfix {
}
.clearfix::after {
  content: ".";
  display: block;
  height: 0;
  visibility: hidden;
  clear: both;
}
</style>
