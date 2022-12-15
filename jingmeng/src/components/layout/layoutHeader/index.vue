<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'layoutHeader',
})
</script>

<script setup></script>

<template>
  <div class="headerBox">this is header</div>
</template>

<style scoped lang="scss">
.headerBox {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  background-color: #0a2f7e;
}
</style>
