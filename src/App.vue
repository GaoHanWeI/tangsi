<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang='scss'>

   #app{
     width:100%;
     height:100%;
   }

      .hello{
     width:100%;
     height:100%;
     display:flex;
     flex-direction: column;
     &>.con{
       flex:1;
       overflow:auto;
     }

   }
   .active{
     color:#504F54;
   }
</style>
