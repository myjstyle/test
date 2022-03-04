<template>
  <div>
    <h1>复习复习复习</h1>
    <button @click="btn">点击获取子组件的值</button>
    <hr />
    <zhentingqi></zhentingqi>
    <jisuanshuxing></jisuanshuxing>
    <axios></axios>
    <ref ref="btnref"></ref>
  </div>
</template>

<script>
import zhentingqi from '@/components/01zhentingqi'
import jisuanshuxing from '@/components/02jisuanshuxing'
import axios from '@/components/03axios'
import ref from '@/components/05ref'
export default {
  components: {
    zhentingqi,
    jisuanshuxing,
    axios,
    ref,
  },
  methods: {
    btn() {
      alert(this.$refs.btnref.$refs.inner.innerHTML)
    },
  },
}
</script>

<style></style>
