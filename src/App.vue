<template>
  <div id="app">
    <Header class="header"></Header>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
  import Header from "@/components/Header";
  export default {
    components: {Header}
  }

</script>

<style>
  @import "style/common.css";
  body {
    background-color: #E1E1E1;
  }
 #app {

   overflow: hidden;
   /*margin-bottom: 20px;*/
 }
  .header,.container {
    margin-bottom: 20px;
  }
</style>
