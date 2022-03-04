<template>
  <div>
    <h1>自定义指令</h1>
    <p v-color="c">通过自定义指令改变其颜色值</p>
    <button @click="btn">点击改变颜色的值</button>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      c: 'red',
    }
  },
  directives: {
    // color: {
    //   bind(e, binding) {
    //     e.style.color = binding.value
    //   },
    //   update(e, binding) {
    //     e.style.color = binding.value
    //   },
    // },
    color(e, binding) {
      e.style.color = binding.value
    },
  },
  methods: {
    btn() {
      this.c = 'blue'
    },
  },
}
</script>

<style></style>
