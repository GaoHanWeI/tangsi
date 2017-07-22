<template>
  
     <header class='head2'>
         <div><router-link :to="{path:'shopping',query:{user:users}}"><i class='fa fa-shopping-cart'></i></router-link></div>
         <div><input type='text'><span class='fa fa-search'></span></div>
         <div>搜索</div>
     </header>

</template>

<script>
export default {
       props:["users"]
}
</script>

<style lang='scss'>
    $base:100/320;
      %re{
       position: relative;
   }
   %ab{
       position: absolute;
   }
    .head2{
        display:flex;
        height:40vw*$base;
        padding: $base*7vw 0;
        box-sizing: border-box;
        border-bottom: 1px solid #E4E4E4;
        &>div{
            flex:1;         
            &:nth-child(1){
              @extend %re;
              i{
                   @extend %ab;
                   left:$base*13vw;
                   top:50%;
                   margin-top: $base*-9vw;
                   color:#7C7C7C;
                   font-size:$base*20vw;
              }
            }
            &:nth-child(2){
                @extend %re;
            &>span{
               @extend %ab;
               top:50%;
               left:50%;
               margin-top: $base*-8vw;
               font-size:$base*16vw;
            }
            }
            &:nth-child(3){
                font-size: $base*14vw;
                line-height: $base*25vw;
                text-align:center; 
            }
        }
        input{
             width:185vw*$base;
             height:100%;
             border: 1px solid #4F4F4F;
             border-radius:$base*4vw;
        }
    }
</style>
