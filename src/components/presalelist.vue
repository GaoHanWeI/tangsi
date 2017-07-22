<template>
     <div class='hello'>
         <heads title='项目详情' :users="user" flag3='true' flag2='false' flag1='true' flag4='true' flag5='false'></heads>
          <div class='con details-con'>

       <div class='banner'>
            <mt-swipe :auto="4000">
                <mt-swipe-item v-for='i in list.banner'><img :src='i'></mt-swipe-item>
            </mt-swipe>
      </div>
      <div class='details-info' >
          <div class='details-info-name'>
              <p>{{list.name}}</p>           
                 <p><i class='fa fa-share-square-o'></i></p>                 
              
          </div>
          <p class='details-info-money'>折扣价:<span>￥3123</span></p>
          <p>尺寸:{{list.size}}</p>
          <p>材质:{{list.cz}}</p>
          <p>卷边:{{list.jj}}</p>
          <div class='details-user'>
               <span><img :src='list.authorheader'></span>
               <p>{{list.author}}</p>
               <p>已售数量:{{list.people}}件</p>
          </div>        
      </div>

           <div class='details-num'>
               <p>支持人数 <span>{{list.people}}人</span> </p>
               <p>到期时间 <span>{{list.data}}天</span></p>
           </div>
           <div style='border:3px solid #F0EFF5'></div>
           <div class='details-detail'>
               <p>项目详情</p>
               <img :src='list.con'>
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
        
       var that=this;
       var id=this.$route.query.id
       this.user=this.$route.query.user
      
    axios.get("http://localhost:4444/")
    .then(function(data){
          return data.data
    })
    .then(function(data){  
        for(var i=0;i<data.ys.length;i++){
            if(id==data.ys[i].id){
              that.list=data.ys[i]
            }
           
        }
    //    console.log(that.list)
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
                     font-size:$base*13vw;
                     color:black;
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
     .details-num{
         display:flex;
         border-top:1px solid #E0E0E0;
         padding:$base*7vw 0;
         &>p{
             flex-grow:1;
             text-align: center;
             font-size: $base*12vw;
               &:nth-child(1){
                    border-right: 1px solid #E0E0E0;
                }
               &>span{
                    font-size: $base*13vw;
                    color:black;
                    display:inline-block;
                    margin-left:$base*10vw;
               }
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
