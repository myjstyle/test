<template>
  <div>
    <h1>侦听器</h1>
    <input type="text" v-model="a" />
    <input type="text " v-model="b" />
    <input type="text" v-model="c.d" />
    <quanju></quanju>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      a: 1111,
      b: 2222,
      c: {
        d: 3333,
      },
    }
  },
  watch: {
    a(newval, oldval) {
      console.log(newval, oldval)
    },
    b: {
      handler: function (newval, oldval) {
        console.log(newval, oldval)
      },
      immediate: true,
    },
    // c: {
    //   handler: function (newval, oldval) {
    //     console.log(newval, oldval)
    //   },
    //   deep: true,
    // },
    'c.d': {
      handler: function (newval, oldval) {
        console.log(newval, oldval)
      },
      immediate: true,
    },
  },
}
</script>

<style></style>
