<template>
    <ul class='tri'>
          <li>{{tri1}}</li>
          <li>{{tri2}}</li></li>
          <li>{{tri3}}</li>
    </ul>
</template>

<script>
export default {
    props:['tri1','tri2','tri3']
}
</script>

<style lang='scss'>
      $base:100/320;

     .tri{
         display:flex;
         height:$base*40vw;
         padding:$base*8vw 0;
         box-sizing: border-box;
         border-bottom: 2px solid #ECEBF0;
         &>li{
             flex-grow:1;
             text-align: center;
             font-size:$base*10vw;
             line-height:$base*24vw;
             &:not(:last-child){
                 border-right: 1px solid #F1F1F1;
             }
         }
     }
</style>
