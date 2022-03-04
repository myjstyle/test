<template>
  <div>
    <p>我是插槽2:{{ num }}</p>
    <button @click="change">点击给爷爷传值</button>
  </div>
</template>

<script>
export default {
  props: ['num'],
  methods: {
    change() {
      this.$emit('numchange', 'hahha')
    },
  },
}
</script>

<style></style>
