<template>
     <div class='hello'>
       <heads title='设计师空间' flag1='true' flag2='false' flag3='true' flag4='true' flag5='true'></heads>
       <div class="con space-con">
               <div class='space-user'>
                   <router-link :to="{path:'data',query:{id:''+list.id+''}}" tag="span"><img src='../../static/img/u1.png'></router-link>
                   <p class='space-name'>{{list.name}}</p>
                   <p class='space-gq'>{{list.sign}}</p>
                   <button><i class='fa fa-smile-o'></i> {{list.rq}}</button>
                   <button>设计师</button> 
               </div>
               <ul class='space-list'>
                  <li><router-link :to="{path:'werke',query:{id:''+list.id+''}}" class='werke-active'>作品集({{list.works}})</router-link></li> 
                  <li><router-link  :to="{path:'words',query:{id:''+list.id+''}}">留言板({{list.commentlen}})</router-link></li>  
               </ul>
               <router-view></router-view>
               
       </div>
 </div>
     
</template>

<script>
   import heads from './header'
   import axios from 'axios'
   export default {
        data(){
    return{
       list:[]
    }
  },
      components:{
          heads
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
  .space-user{
      background: white;
      height:$base*190vw;
      border-bottom:1px solid #EFEFEF;
      text-align:center;
      position:relative;
      &>span{
          text-align: center;
          margin-top: $base*38vw;
          width:$base*65vw;
          height:$base*65vw;
          display:inline-block;
            &>img{
                width:100%;
                height:100%;
            }
      }
      &>button{
          &:nth-child(5){
               position:absolute;
               left:$base*65vw;
               top:$base*55vw;
               border:1px solid;
               background: white;
               width: $base*44vw;
               height:$base*20vw;
               font-size: $base*10vw;
          }
          &:nth-child(4){
               position:absolute;
               right:$base*20vw;
               bottom:$base*35vw;
               border:1px solid ;
               background: white;
               width: $base*65vw;
               height:$base*25vw;
               font-size: $base*10vw;
               border-radius: $base*5vw;
          }
      }
      .space-name{
           font-size:$base*14vw;
           margin-top: $base*20vw;
      }
      .space-gq{
          font-size:$base*10vw;
          margin-top: $base*15vw;
          color: #B6B6B6;
      }
  }
    .space-list{
        background: white;
        display:flex;
        height:$base*35vw;
        line-height: $base*35vw;
        font-size:$base*12vw;
        border-bottom: 1px solid #EFEFEF;
        &>li{
            flex-grow: 1;
            text-align:center;
            &>a{
                height:98%;
                color:black;
                display:inline-block;
               
            }
        }
    }

    .space-con{
        background: #EFEEF4;
    }

    .werke-active{
        border-bottom: 2px solid;
    }
</style>