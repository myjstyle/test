<template>
  <div class="home">
    <p>left孩子传过来的值:{{ numleft }}</p>
    <hr />
    <left :leftdata="num" @getleftnum="getnum"></left>
    <right></right>
  </div>
</template>

<script>
import left from '@/components/left'
import right from '@/components/right'
import bus from '@/bus/bus'
export default {
  components: {
    left,
    right,
  },
  data: function () {
    return {
      num: 'aaaaa',
      numleft: '',
    }
  },
  methods: {
    getnum(val) {
      this.numleft = val
    },
  },
  created() {
    bus.$on('getson', (val) => {
      this.numleft = val
    })
  },
}
</script>
