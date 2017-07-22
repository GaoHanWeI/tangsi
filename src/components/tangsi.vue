<template>
    <div class='hello'>
        <heads title='关于我们' flag1='true' flag2='false' falg5='true' flag4='true' falg3='true'></heads>
          <div class='con tangsi-con'>
                   <img src='../../static/img/tangsi1.png'>
                   <img src='../../static/img/tangsi2.png'>
          </div>


    </div>
</template>

<script>
import heads from './header'
export default {
       components:{
       heads
   }
}
</script>

<style lang='scss'>
      $base:100/320;
      .tangsi-con{
          padding:0 $base*15vw;
          font-size:0;
          img{
              width:100%;
          }
      }
</style>
