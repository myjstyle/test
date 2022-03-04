<template>
  <div>
    <h1>计算属性</h1>
    <button @click="btn">点击输出计算属性的值</button>
  </div>
</template>

<script>
export default {
  data: function () {
    return { a: 1, b: 2 }
  },
  computed: {
    ab() {
      return this.a + this.b
    },
  },
  methods: {
    btn() {
      alert(this.ab)
    },
  },
}
</script>

<style></style>
