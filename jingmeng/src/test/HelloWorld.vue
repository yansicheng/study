<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br />
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3 class="text_color">Installed CLI Plugins</h3>
    <el-button type="primary" @click="testThemeEvent">主题测试按钮</el-button>
    <el-button type="primary" @click="sayHello">click me.</el-button>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { useEventBus } from '@hooks/useVue'
export default defineComponent({
  name: 'HelloWorld',
})
</script>

<script setup>
const bus = useEventBus()
const props = defineProps({
  msg: String,
})

const num = ref(0)

const testThemeEvent = () => {
  console.log('@@@')
  if (num.value) {
    document.documentElement.setAttribute('data-theme', 'theme2')
    document.body.className = 'theme2'
    num.value = 0
  } else {
    document.documentElement.setAttribute('data-theme', 'theme1')
    document.body.className = 'theme1'
    num.value++
  }
}

const sayHello = () => {
  bus.$emit('hello', '：这里是兄弟B')
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.hello {
  @include text_color();
}
</style>
