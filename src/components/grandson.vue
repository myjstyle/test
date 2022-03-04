<template>
  <div>
    <p>我是孙子组件</p>
    <button @click="btn">点击孙子给爷爷传值</button>
  </div>
</template>

<script>
import bus from '@/bus/bus'
export default {
  data: function () {
    return { a: '我是孙子组件的值' }
  },
  methods: {
    btn() {
      bus.$emit('getson', this.a)
    },
  },
}
</script>

<style></style>
