<template>
  <div>
    <h1>axios</h1>
    <button @click="btn1">点击发送旧版ajax的get请求</button>
    <button @click="btn2">点击发送旧版ajax的post请求</button>
    <button @click="btn3">axios请求async</button>
    <button @click="btn4">axios请求promise</button>
    <button @click="btn5">axios请求them</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  methods: {
    btn1() {
      let ajax = new XMLHttpRequest()
      ajax.open('get', 'https://www.escook.cn/articles?page=1&limit=10')
      ajax.onload = function () {
        console.log(JSON.parse(ajax.responseText))
      }
      ajax.send()
    },
    btn2() {
      let xmr = new XMLHttpRequest()
      xmr.open('post', 'https://www.escook.cn/articles')
      xmr.onload = function () {
        console.log(JSON.parse(xmr.responseText))
      }
      xmr.send('page=1&limit=10')
    },
    async btn3() {
      const { data: data } = await axios.get('https://www.escook.cn/articles', {
        page: 1,
        limit: 10,
      })
      console.log(data)
    },
    btn4() {
      const result = axios({
        method: 'get',
        url: 'https://www.escook.cn/articles',
        params: {
          page: 1,
          limit: 10,
        },
      })
      console.log(result)
    },
    btn5() {
      axios({
        method: 'get',
        url: 'https://www.escook.cn/articles',
        params: {
          page: 1,
          limit: 10,
        },
      }).then((val) => {
        console.log(val)
      })
    },
  },
}
</script>

<style></style>
