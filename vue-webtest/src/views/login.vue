<template>
  <div class="main-body">
    <div class="title">登录页面</div>
    <div class="form-content">
      <a-form
        id="components-form-demo-normal-login"
        :form="form"
        class="login-form"
        @submit="handleSubmit"
      >
        <a-form-item>
          <a-input
            v-decorator="[
              'userName',
              {
                rules: [
                  { required: true, message: 'Please input your username!' },
                ],
              },
            ]"
            placeholder="Username"
          >
            <a-icon
              slot="prefix"
              type="user"
              style="color: rgba(0, 0, 0, 0.25)"
            />
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-input
            v-decorator="[
              'password',
              {
                rules: [
                  { required: true, message: 'Please input your Password!' },
                ],
              },
            ]"
            type="password"
            placeholder="Password"
          >
            <a-icon
              slot="prefix"
              type="lock"
              style="color: rgba(0, 0, 0, 0.25)"
            />
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-checkbox
            v-decorator="[
              'remember',
              {
                valuePropName: 'checked',
                initialValue: true,
              },
            ]"
          >
            Remember me
          </a-checkbox>
          <a class="login-form-forgot" href=""> Forgot password </a>
          <a-button type="primary" html-type="submit" class="login-form-button">
            Log in
          </a-button>
          Or
          <li><router-link to="register">register now !</router-link></li>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script>
export default {
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: "normal_login" });
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log(this.$store.state.user.username);
          console.log(this.$store.state.user.password);
          console.log("Received values of form: ", values);
          if (
            this.$store.state.user.username === values.userName &&
            this.$store.state.user.password === values.password
          ) {
            alert(
              "登录成功" +
                " \n " +
                "用户名：" +
                this.$store.state.user.username +
                "\n " +
                "密码：" +
                this.$store.state.user.password +
                "\n " +
                "性别：" +
                this.$store.state.user.gender +
                "\n " +
                "爱好：" +
                this.$store.state.user.hobby +
                "\n " +
                "科目：" +
                this.$store.state.user.subject +
                "\n " +
                "文件：" +
                this.$store.state.user.fileName +
                "\n " +
                "留言：" +
                this.$store.state.user.message
            );
          }else{
            alert("登录失败，账号或密码错误")
          }
        }
      });
    },
  },
};
</script>
<style>
#components-form-demo-normal-login .login-form {
  max-width: 300px;
}
#components-form-demo-normal-login .login-form-forgot {
  float: right;
}
#components-form-demo-normal-login .login-form-button {
  width: 100%;
}
.main-body {
  width: 100%;
  height: 1000px;
}
.form-content {
  width: 30%;
  height: auto;
  margin-top: 50px;
  margin-left: 36%;
}
</style>
