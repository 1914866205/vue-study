<template>
  <div class="body">
    <div class="title">注册页面</div>
    <div class="content">
      <van-form @submit="onSubmit">
        <van-field
          v-model="username"
          name="username"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="password"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />

        <van-field name="gender" label=" 性别：">
          <template #input>
            <van-radio-group v-model="radio" direction="horizontal">
              <van-radio name="男">男</van-radio>
              <van-radio name="女">女</van-radio>
            </van-radio-group>
          </template>
        </van-field>
        <van-field name="checkboxGroup" label="兴趣：">
          <template #input>
            <van-checkbox-group v-model="checkboxGroup" direction="horizontal">
              <van-checkbox name="足球" shape="square">足球</van-checkbox>
              <van-checkbox name="篮球" shape="square">篮球</van-checkbox>
              <van-checkbox name="乒乓球" shape="square">乒乓球</van-checkbox>
            </van-checkbox-group>
          </template>
        </van-field>

        <van-picker
          title="请选择科目"
          show-toolbar
          :columns="columns"
          @confirm="onConfirm"
          @cancel="onCancel"
          @change="onChange"
          item-height="25px"
        />

        <van-field name="file" label=" 文件上传：">
          <template #input>
            <van-uploader :after-read="afterRead">
              <van-button icon="plus" type="primary">上传文件</van-button>
            </van-uploader>
          </template>
        </van-field>
        {{ this.fileName }}

        <van-field
          v-model="message"
          rows="2"
          autosize
          label="留言"
          type="textarea"
          maxlength="50"
          placeholder="请输入留言"
          show-word-limit
        />

        <!-- <div style="margin: 16px">
          <van-button round block type="info" native-type="reset"
            >清空</van-button
          >
        </div> -->
        <div style="margin: 16px">
          <van-button round block type="info" native-type="submit"
            >提交</van-button
          >
        </div>
      </van-form>
    </div>
    <router-link to="login">login now !</router-link>
  </div>
</template>

<script>
import { Toast } from "vant";

export default {
  name: "Register",
  data() {
    return {
      username: "",
      password: "",
      radio: "1",
      checkbox: false,
      checkboxGroup: [],
      columns: ["Java", ".Net", "PHP"],
      fileList: [],
      message: "",
      fileName: "请选择文件",
      column: "",
      hobby: "",
    };
  },
  methods: {
    onSubmit(values) {
      // console.log("submit", values);
      // console.log(values.username);
      // console.log(values.password);
      // console.log(values.gender);
      for (let i = 0; i < values.checkboxGroup.length; i++) {
        // console.log(values.checkboxGroup[i]);
        this.hobby += values.checkboxGroup[i] + "、";
      }
      // console.log(values.checkboxGroup);
      // console.log(this.column);
      // console.log(this.message);
      this.hobby = this.hobby.substr(0, this.hobby.length - 1);
      alert(
        "用户名：" +
          values.username +
          "\n " +
          "密码：" +
          values.password +
          "\n " +
          "性别：" +
          values.gender +
          "\n " +
          "爱好：" +
          this.hobby +
          "\n " +
          "科目：" +
          this.column +
          "\n " +
          "文件：" +
          this.fileName +
          "\n " +
          "留言：" +
          this.message
      );
      this.$store.state.user.username = values.username;
      this.$store.state.user.password = values.password;
      this.$store.state.user.gender = values.gender;
      this.$store.state.user.hobby = this.hobby;
      this.$store.state.user.subject = this.column;
      this.$store.state.user.fileName = this.fileName;
      this.$store.state.user.message = this.message;
      console.log(this.$store.state.user.hobby);
    },
    onConfirm(value, index) {
      // Toast(`当前值：${value}, 当前索引：${index}`);
    },
    onChange(picker, value, index) {
      this.column = value;
      // Toast(`当前值：${value}, 当前索引：${index}`);
    },
    onCancel() {
      Toast("取消");
    },
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      this.fileName = file.file.name;
      console.log(file);
    },
  },
};
</script>
<style>
.body {
  background-color: #f6f6f6;
}
.title {
  display: inline;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  font-size: 30px;
  font-weight: 900;
}
.content {
  margin-top: 10px;
  margin-left: 30%;
  width: 40%;
}
</style>
