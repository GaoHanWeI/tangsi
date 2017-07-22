<template>
    <div class='hello balance'>
         <heads title='我的余额' flag1='true' flag2='false' falg3='true' falg4='true' falg5='true'></heads>
         <div class='balance-money'>
             <div  class='balance-money-o'>
                 <p>当前余额</p>
                 <p><router-link to><span class='fa fa-pencil'></span> 账单记录</router-link></p>
             </div>
             <p>0.00元</p>
             <div class='balance-btn'>
                 <button>提现</button>
                 <button>充值</button>
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
    .balance{
        width:100%;
        height:100%;
        background:#F0EFF5;
    }
    .balance-money{
         margin:  $base*17vw;
         padding-top:$base*17vw;
        box-sizing: border-box;
        height:$base*145vw;
        background:white;
        &>p{
            margin-top:$base*26vw;
            padding-left:$base*10vw;
            font-size:$base*17vw;
        }
    }
    .balance-money-o{
        display:-webkit-box;
        -webkit-box-pack:justify; 
        font-size:$base*10vw;
        padding-left:$base*9vw;
        padding-right:$base*15vw;
        
        &>p{
            &:nth-child(1){
                color: #D6D6D6;
            }
            &:nth-child(2){
                color:#807F84;
            }
        }
        span{
            font-size:$base*14vw;
        }
    }

     .balance-btn{
         display:-webkit-box;
        -webkit-box-pack:justify; 
        padding: 0 $base*14vw;
        margin-top:$base*20vw;
         &>button{
             display: block;
             width: $base*111vw;
             height:$base*35vw;
             &:nth-child(1){
                 background: white;
                 border:1px solid;
             }
             &:nth-child(2){
                 background: black;
                 color:white;
                 border:1px solid black;
             }
         }
     }
</style>
