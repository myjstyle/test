<template>
  <div>
    <button @click="btn">点击显示动态组件01</button>
    <button @click="btn1">点击显示动态组件02</button>
    <keep-alive include="dongtaizujian01"
      ><component :is="countName"></component
    ></keep-alive>
  </div>
</template>

<script>
import dongtaizujian01 from '@/components/07dongtaizujian01'
import dongtaizujian02 from '@/components/07dongtaizujian02'
export default {
  data: function () {
    return { countName: 'dongtaizujian01' }
  },
  components: {
    dongtaizujian01,
    dongtaizujian02,
  },
  methods: {
    btn() {
      this.countName = 'dongtaizujian01'
    },
    btn1() {
      this.countName = 'dongtaizujian02'
    },
  },
}
</script>

<style></style>
