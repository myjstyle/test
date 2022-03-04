<template>
  <div>
    <h1>登陆页面</h1>
    <button @click="btn">登陆</button>
  </div>
</template>

<script>
export default {
  methods: {
    btn() {
      localStorage.setItem('token', 'Bear xxxx')
      this.$router.push('/App')
    },
  },
}
</script>

<style></style>
