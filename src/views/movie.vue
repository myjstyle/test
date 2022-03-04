<template>
  <div>
    电影频道 <br />
    <router-link to="/movie/1">电影1</router-link>
    <router-link to="/movie/2">电影2</router-link>
    <router-link to="/movie/3">电影3</router-link>
    <router-link to="/home">访问home</router-link>
    <router-view></router-view>
    <!-- <router-link to="/movie/2">电影2</router-link>
    <router-link to="/movie/3">电影3</router-link> -->
  </div>
</template>

<script>
export default {}
</script>

<style></style>
