<template>
  <div>
    <dongtaizujian></dongtaizujian>
    <chacao>
      <template #chacao1>
        <p>我是插槽1</p>
      </template>
      <template #chacao2>
        <chacao2 :num="num1" @numchange="getnum(1, $event)"></chacao2
      ></template>
    </chacao>
    <zidingyi></zidingyi>
  </div>
</template>

<script>
import dongtaizujian from '@/components/07dongtaichajian'
import chacao from '@/components/08cahcao1'
// import chacao2 from '@/components/08cahcao2'
import chacao2 from '@/components/08chacao2'
import zidingyi from '@/components/09zidingyizhiling'

export default {
  components: {
    dongtaizujian,
    chacao,
    chacao2,
    zidingyi,
  },
  data: function () {
    return { num1: 'chachao2' }
  },
  methods: {
    getnum(a, b) {
      console.log(a, b)
    },
  },
}
</script>

<style></style>
