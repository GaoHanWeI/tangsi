<template>
    <div class='hello'>
         <heads title='我的作品' flag1='true' flag2='false' falg5='true' flag4='true' falg3='true'></heads>
          <ul class='works-list'>
             <li class='works-list-active'>我的作品</li>
             <li>预售作品</li>
         </ul>
         <div class='con works-list-con'>
           <div class='works-list-btn'>我要发布</div>
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
      .works-list{
          display: flex;
          border-bottom: 1px solid #EAEBEE;
          &>li{
              flex-grow:1;
              text-align: center;
              font-size: $base*14vw;
              padding:$base*12vw;
              margin:0 $base*10vw;
              color:#ADADAD;
              
          }
      }

      .works-list-active{
          border-bottom:1px solid black;
          color:black !important; 
      }
      .works-list-con{
          background:#EFEFF4;
      }
      .works-list-btn{
          width:$base*280vw;
          height:$base*48vw;
          background:black;
          color:white;
          text-align:center;
          line-height: $base*48vw;
          border-radius: $base*5vw;
          font-size:$base*13vw;
          position:fixed;
          bottom:$base*12vw;
          left:50%;
          margin-left:$base*-140vw;
      }
</style>
