<template>
  <div>
    <p ref="inner">我是ref的值</p>
    <button @click="btn">点击获取上面的值</button>
    <input type="text" v-if="ifboolean" ref="input" />
    <button @click="btn1">点击出现输入框</button>
    <button @click="btn2">点击删除输入框</button>
  </div>
</template>

<script>
export default {
  data: function () {
    return { ifboolean: false }
  },
  methods: {
    btn() {
      console.log(this.$refs.inner.innerHTML)
    },
    btn1() {
      this.ifboolean = true
      this.$nextTick(() => {
        this.$refs.input.focus()
      })
    },
    btn2() {
      this.ifboolean = false
    },
  },
}
</script>

<style></style>
