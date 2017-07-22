<template>
        <div class='hello'>
              <heads title='个人资料' flag1='true' flag2='false' flag3='true' flag4='true' flag5='true'></heads>
               <div class='con data-con'>
                   <span><img :src='list.header'></span>
                   <p>用户名 <span>{{list.name}}</span></p>
                   <p>座右铭 <span>{{list.sign}}</span></p>
                     <div>举报</div>
               </div>
             

        </div>
</template>

<script>
import heads from './header'
import axios from 'axios'
export default {
   components:{
      heads
   },
     data(){
    return{
       list:[]
    }
  },
   created(){
        
       var that=this;
       var id=this.$route.query.id
      
    axios.get("http://localhost:4444/")
    .then(function(data){
          return data.data
    })
    .then(function(data){  
        for(var i=0;i<data.author.length;i++){
            if(id==data.author[i].id){
              that.list=data.author[i]
            }
           
        }
    //    console.log(that.list)
    })
  }
}
</script>

<style lang='scss'>
      $base:100/320;
      .data-con{
          background:#F0EFF5;
           &>span{
               background: white;
               display:block;
               text-align: center;
               padding: $base*30vw 0;
               img{
                   width: $base*64vw;
                   height:$base*64vw;
               }
           }
           &>p{
                background: white;
               font-size: $base*13vw;
               border-top:1px solid #D2D2D2;
               padding:$base*15vw 0  0 $base*15vw;
               height:$base*50vw;
              box-sizing: border-box;
               &>span{
                   font-size:$base*15vw;
                   padding-left:$base*10vw;
               } 
               &:nth-child(3){
                    height:$base*64vw;
               }
           }
           &>div{
               margin-top: $base*15vw;
               background: white;
               padding-left:$base*15vw;
               line-height: $base*40vw;
               font-size:$base*15vw;
               color:red;
               height:$base*40vw;
           }
      }
</style>
