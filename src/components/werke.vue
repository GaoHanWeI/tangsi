<template>
         <ul class='werke-list'>
             <li v-for='i in list.workscon'>
                 <div class='werke-top'>
                     <span><img :src='list.header'> </span>
                     <div>
                         <p>{{list.name}}</p>
                         <p>{{i.data}}</p>
                     </div>
                 </div>
                 <div class='werke-con'>
                     <p>{{i.name}}</p>
                     <p>设计理念:{{i.idea}}</p>
                     <p>
                         <span v-for='is in i.img'><img :src='is'></span>
                     </p>
                 </div>
                 <div class='werke-bom'>
                     <p><i class='fa fa-share-square-o '></i> 分享</p>
                     <p><i class='fa fa-commenting-o '></i> 评论</p>
                 </div>
             </li>
         </ul>
</template>

<script>
   import axios from 'axios'
   export default{
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
    })
  }
   }

</script>

<style lang='scss'>
      $base:100/320;
      .werke-list{
          &>li{
          padding-top:$base*10vw;
          margin-top:$base*10vw;
          background: white;
      }
      }
      
      .werke-top{
          display:flex;
          padding-left:$base*7vw;
          
          &>span{
              width: $base*60vw;
              height:$base*60vw;
              display: inline-block;
              &>img{
                  width:100%;
                  height:100%;
              }
          }
          &>div{
              padding-left: $base*15vw;
              &>p{
                  &:nth-child(1){
                    font-size: $base*12vw;
                    margin-top: $base*15vw;
                  }
                   &:nth-child(2){
                    margin-top: $base*5vw;                       
                    font-size: $base*10vw;
                  }
              }
          }
      }

      .werke-con{
          padding-left:$base*7vw;
          
           &>p{
               &:nth-child(1){
                   font-size:$base*12vw;
                   margin-top: $base*20vw;
               }
                &:nth-child(2){
                   margin-top: $base*10vw;
                   font-size:$base*10vw;
                   color: #A5A5A5;
               }
                &:nth-child(3){
                   &>span{
                       margin-top: $base*15vw;
                       width:$base*92vw;
                       height:$base*92vw;
                       display:inline-block;
                       margin-right:$base*5vw;
                       &>img{
                           width: 100%;
                           height:100%;
                       }
                   }
               }
           }
      }

      .werke-bom{
          border-top:1px solid #B8B8BA;
          display:flex;
          padding:$base*7vw 0;
          &>p{
              text-align: center;
              flex-grow: 1;
              font-size: $base*10vw;
              color:#B8B8BA;
              &:nth-child(1){
                  border-right:1px solid;
              }
              &>i{
                  font-size:$base*16vw;
                  color:black;
              }
          }
      }
</style>
