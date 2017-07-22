<template>
   <div class='hello'>
         <heads title='用户反馈' flag1='true' flag2='false' falg5='true' flag4='true' falg3='true'></heads>
          <div class='con feedback-con'>
           <textarea  placeholder="在这儿留下您宝贵的意见">

           </textarea>
              <div class='feedback-list-btn'>
                  <button>我要发布</button>
              </div>

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
    .feedback-con{
        padding:$base*15vw;
        textarea {
            width: 100%;
            height:$base*158vw;
            padding:$base*10vw;
            box-sizing: border-box;
        }
    }


     .feedback-list-btn{
         text-align:center;
         margin-top:$base*45vw;
         button{
            width:$base*255vw;
          height:$base*40vw;
          background:black;
          color:white;
          border-radius: $base*3vw;
          font-size:$base*11vw;
          border:none;
         }
        
      
          
      }
</style>
