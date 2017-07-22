<template>
       <div>
       <footer>
           <ul>
               <li><router-link :to="{path:'hello',query:{user:user}}"><i class='fa fa-2x fa-home'></i><span>首页</span></router-link></li>
               <li><router-link :to="{path:'customize',query:{user:user}}"><i  class='fa fa-2x fa-gavel'></i><span>定制</span></router-link></li>
               <li><router-link :to="{path:'presale',query:{user:user}}"><i  class='fa fa-shopping-bag'></i><span>预售</span></router-link></li>
               <li><router-link :to="{path:'designer',query:{user:user}}"><i class='fa fa-2x fa-lightbulb-o'></i><span>设计师</span></router-link></li>
               <li><router-link :to="{path:'mine',query:{user:user}}" ><i class='fa fa-2x fa-user'></i><span>我的</span></router-link></li>               
           </ul>
       </footer>

</div>
 
</template>
<script>
export default{
    data(){
        return{
             user:""
        }
           
    },
   created(){
        this.user=this.$route.query.user
   }
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
   footer{
       border-top:1px solid #E6E6E6;
       width: 100%;
       height:45vw*$base;
       text-align: center;
      

           &>ul{
           width:100%;
           height:100%;
           display:flex;
           &>li{

              &:nth-child(4){
                 &>a{
                   &>span{
                       margin-left: $base*-18vw;
                         }
                      }                 
               }
               .fa-gavel{
                   font-size:$base*18vw;
               }
               .fa-shopping-bag{
                   font-size:$base*17vw;
               }
               flex-grow:1;
               font-size: $base*10vw;
               padding-top: $base*7vw;
               @extend %re;
               &>a{
                color:#999999;

       
               &>i{
                   font-size: $base*20vw;
                   margin-bottom: $base*2vw;
                   display: inline-block;
               }
               &>span{
                    @extend %ab;
                    left:50%;
                    margin-left: $base*-12vw;
                    bottom:0;                
               }

           }
       }
       }
        }
   
     


</style>


