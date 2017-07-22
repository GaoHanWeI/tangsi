<template>
       <div class='hello'>
      <heads title='购物车' flag1='true' flag2='false' flag3='true' falg5='false' flag4='false'></heads>
       <div class='con shopping-con'>
          <dl class='shopping-list' v-for='(li,v) in student'>
              <dt>
                   <img :src='li.img'>
              </dt>
              <dd>
                   <div class='shopping-name'>
                       <p>{{li.name}}</p>
                       <p>删除</p>
                    </div> 
                    <p class='shopping-style'> 定制文字</p>  
                    <div class='shopping-price'>
                        <p>￥{{li.price}}</p>
                        <p><button @click='jia(v)'>+</button><input type='text' v-model='li.num' ><button @click='jian(v)'>-</button></p>
                    </div>
              </dd>
          </dl>
         <div class='shopping-btn'>
           <span>合计:￥603</span>
           <span>结算(32)</span>
       </div>


       </div>
      

       </div>
</template>

<script>
import heads from './header'
import axios from 'axios'
export default {
    data(){
      return{
          
        }
    },
   components:{
       heads
   },
   computed:{
      student(){
          return this.$store.getters.getlist
         }
   },
   created(){
         let user=this.$route.query.user
         this.$store.dispatch('data',user)      
   },
   methods:{
       jia(v){
           this.$store.dispatch('jia',v)
       },
       jian(v){
            this.$store.dispatch('jian',v)
       }
   }
}
</script>
        


<style lang='scss'>
          $base:100/320;
          .shopping-con{
              background:#F0EFF5;
          }
         .shopping-list{
               background:white;
               margin-bottom:$base*5vw;
               padding:$base*12vw $base*12vw $base*12vw $base*8vw;;
               box-sizing: border-box;
               height: $base*100vw;
               display:flex;
               &>dt{
                 width:$base*78vw;
                 height:$base*78vw;
                 &>img{
                     width: 100%;
                 }
               }
               &>dd{
                   flex-grow:1;
                   margin-left:$base*15vw;
                   .shopping-name{
                       display:-webkit-box;
                       -webkit-box-pack:justify;
                       font-size:$base*12vw;
                       margin-bottom:$base*18vw;
                   }
                   .shopping-style{
                       font-size: $base*10vw;
                       color:#B9B9B9;
                       margin-bottom:$base*2vw;
                   }
                   .shopping-price{
                        display:-webkit-box;
                       -webkit-box-pack:justify;
                       &>p{
                           &:first-child{
                               font-size:$base*13vw;
                           }
                           &:last-child{
                               input{
                                   width: $base*40vw;
                                   text-align:center;
                                   border:none;
                               }
                               button{
                                   width:$base*24vw;
                                   height:$base*24vw;
                                   border: 1px solid ;
                                   background:white;
                               }
                           }
                       }
                   }
               }
         }

         .shopping-btn{
              width:$base*255vw;
              height:$base*44vw;
              position: fixed;
              left:50%;
              margin-left:$base*-127.5vw;
              bottom:$base*22vw;
              display:flex;
              &>span{
                  flex:1;
                  display:block;
                  text-align: center;
                  line-height: $base*44vw;
                  font-size:$base*12vw;
                  &:nth-child(1){
                        border:1px solid ;
                        background:white;
                  }
                   &:nth-child(2){
                        background:black;
                        color:white;
                  }
              }
         }
</style>
