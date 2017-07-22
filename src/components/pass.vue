<template>
      <div class='hello'>
         <heads title='修改密码' flag1='true' falg5='true' flag2='false' flag4='true'  falg3='true'></heads>
         <div class='con pass-con'>
             <mt-field class='pass' label="旧密码" placeholder="请输入用户名" type='password'></mt-field>
             <mt-field class='pass' label="新密码" placeholder="请输入邮箱" type="password"></mt-field>
             <mt-field class='okay' label="确认新密码" placeholder="请输入密码" type="password"></mt-field>
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
         .mint-cell{
              background-image: none ;
         }
         .mint-cell-wrapper{
              font-size:$base*14vw;
              background-image: none ;
         }
         .pass{
             &>.mint-cell-wrapper{
                 padding-left:0;
                margin-left:$base*10vw;
                border-bottom: 1px solid #E4E4E6;
             }
         }

         .okay{
             border-bottom:1px solid #D7D7DA;
         }
</style>
