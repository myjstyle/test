<template>
  <div>
    <p>left</p>
    <p>接受父亲传过来的值:{{ leftdata }}</p>
    <button @click="moveleftnum">点击给父亲传值</button>
    <button @click="movetoright">点击给兄弟传值</button>
    <grandson></grandson>
    <hr />
  </div>
</template>

<script>
import grandson from '@/components/grandson'
import bus from '@/bus/bus.js'

export default {
  props: ['leftdata'],
  components: {
    grandson,
  },
  data: function () {
    return {
      num: 'forfather',
      num2: 'forborther',
    }
  },
  methods: {
    moveleftnum: function () {
      this.$emit('getleftnum', this.num)
    },
    movetoright() {
      console.log(this.num2)
      bus.$emit('share', this.num2)
    },
  },
}
</script>

<style></style>
