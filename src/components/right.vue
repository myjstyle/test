<template>
  <div>
    <p>right</p>
    <p>left传过来的值:{{ leftnum }}</p>
    <hr />
  </div>
</template>

<script>
import bus from '@/bus/bus.js'
export default {
  data: function () {
    return {
      leftnum: '',
    }
  },
  created() {
    bus.$on('share', (val) => {
      this.leftnum = val
    })
  },
}
</script>

<style></style>
