<template>
  <div>
    <p>我是动态组件01</p>
  </div>
</template>

<script>
export default {
  activated() {
    console.log('activated激活了')
  },
  deactivated() {
    console.log('deactivated激活了')
  },
}
</script>

<style></style>
