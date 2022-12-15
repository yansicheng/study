<template>
  <div>
    <button @click="comName = 'UserName'">账号密码填写</button>
    <button @click="comName = 'UserInfo'">个人信息填写</button>
    <p>下面显示注册组件-动态切换：</p>
    <div style="border: 1px solid red">
      <keep-alive>
        <component :is="comName"></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import UserName from "../components/02/UserName.vue";
import UserInfo from "../components/02/UserInfo.vue";
export default {
  components: {
    UserName,
    UserInfo,
  },
  data() {
    return {
      comName: "UserName",
    };
  },
};
</script>

<style></style>
