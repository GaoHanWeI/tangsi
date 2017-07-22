<template>
     <div class='hello'>
         <heads title='定制详情' :users="user" flag3='true' flag2='false' flag1='true' flag4='true' flag5='false'></heads>
          <div class='con details-con'>

       <div class='banner'>
            <mt-swipe :auto="4000">
                <mt-swipe-item><img :src='list.img'></mt-swipe-item>
                <mt-swipe-item><img :src='list.img'></mt-swipe-item>
                <mt-swipe-item><img :src='list.img'></mt-swipe-item>
            </mt-swipe>
      </div>
      <div class='details-info' >
          <div class='details-info-name'>
              <p>{{list.name}}</p>           
                 <p><i class='fa fa-share-square-o'></i></p>                 
              
          </div>
          <p class='details-info-money'>市场价:<span>￥{{list.money1}}</span> 折扣价:<span>￥{{list.money2}}</span></p>
          <p>尺寸:{{list.size}}</p>
          <p>材质:{{list.cz}</p>
          <p>卷边:{{list.jj}}</p>
          <div class='details-user'>
               <span><img :src='list.authorheader'></span>
               <p>{{list.author}}</p>
               <p>已售数量:{{list.style}}件</p>
          </div>        
      </div>
          <div style='border:3px solid #F0EFF5'></div>
          <p class='details-style'>个性文字:<input type='text'></p>
          <div style='border:3px solid #F0EFF5'></div>
           <div class='details-detail'>
               <p>项目详情</p>
               <img src='../../static/img/xq.png'>
           </div> 

           <button class='details-btn'>加入购物车</button> 
   </div>
     
     </div>
</template>

<script>
import heads from './header'
import axios from 'axios'
export default {
    data(){
        return{
          list:[],
          user:""
        }
    },
    components:{
        heads
    },
   created(){
           this.user=this.$route.query.user
       var that=this;
       var id=this.$route.query.id
      
    axios.get("http://localhost:4444/")
    .then(function(data){
          return data.data
    })
    .then(function(data){  
        for(var i=0;i<data.dz.length;i++){
            if(id==data.dz[i].id){
              that.list=data.dz[i]
            }
           
        }
     
    })
  }
}
</script>
 
<style lang='scss'>
      $base:100/320;
     .banner{
         height:155px;
         text-align: center;
         img{
             width:auto;
             height:100%;
          }
     }
     .details-info{
         padding:0 $base*10vw;
         &>p{
             color:#969698;
             font-size:$base*12vw;
             margin-bottom: $base*4vw;
         }
         .details-info-name{
             display:-webkit-box;
             -webkit-box-pack: justify;
            
             &>p{
                 height:$base*30vw;
                 font-size:$base*14vw;
                 line-height: $base*30vw;

             }
             
         }

         .details-info-money{
              margin-bottom:$base*15vw;
             color:#969698; 
             &>span{
                 &:nth-child(1){
                     text-decoration: line-through;
                 }
                  &:nth-child(2){
                     font-size:$base*13vw;
                     color:black;
                 }
             }
         }
     }

    .details-user{
        text-align:center;
        &>span{
            width:55vw*$base;
            display:inline-block;
            height:55vw*$base;
            &>img{
                width:100%;
                height:100%;
            }
        }
        &>p{
            font-size:$base*10vw;
            &:nth-child(2){
                padding-bottom:$base*10vw;
            }
            &:last-child{
                color:#DEAB5A;
                padding-bottom:$base*4vw;
            }
        }
    }

     .details-style{
         height:$base*40vw;
         line-height: $base*40vw;
         font-size:$base*12vw;
         padding:0 $base*10vw;
         input{
             margin-left:$base*15vw;
             width:$base*230vw;
             height:70%;
             border:none;
             border-bottom:1px solid ;
         }
     }

     .details-detail{
         width:100%;
          padding:0 $base*10vw;
          box-sizing:border-box;
          &>p{
             padding:$base*10vw;
             font-size:$base*13vw;
          }
         &>img{
             width:100%;
         }
     }
    
    .details-btn{
          width:$base*280vw;
          height:$base*44vw;
          background: black;
          color:white;
          border:none;
          position:fixed;
          bottom:$base*18vw;
          left:50%;
          margin-left:$base*-140vw;
    }
</style>
