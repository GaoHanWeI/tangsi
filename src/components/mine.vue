<template>
   <div class="hello">
     <heads title='棠丝tangsi' :users="user" flag1='false' flag2='true' flag4='true' falg5='true' flag3='false'></heads>
    <div class='con'>
          <div class='mine-user'>
              <span><img :src='list.header'></span>
              <p>{{list.name}}</p>
          </div>
          <dl class='mine bd'>
            <router-link to='balance'>
            <dt><span class='fa fa-credit-card'></span>我的余额</dt>
            <dd><span class='fa fa-chevron-right'></span></dd>
            </router-link>
          </dl>
          <dl class='mine bd'>
             <router-link to='order'>
            <dt><span class='fa fa-file-text-o'></span>我的订单</dt>
            <dd><span class='fa fa-chevron-right'></span></dd>
            </router-link>
          </dl>
           <dl class='mine bd'>
              <router-link to='/works'>
            <dt><span class='fa fa-picture-o'></span>我的作品</dt>
            <dd><span class='fa fa-chevron-right'></span></dd>
            </router-link>
          </dl>
          <div style='border:3px solid #F0EFF7'></div>
           <dl class='mine'>
              <router-link to='pass'>
            <dt><span class='fa fa-cog'></span>修改密码</dt>
            <dd><span class='fa fa-chevron-right'></span></dd>
            </router-link>
          </dl>
          <div style='border:3px solid #F0EFF7'></div>
           <dl class='mine'>
              <router-link to='feedback'>
            <dt><span class='fa fa-paste'></span>用户反馈</dt>
            <dd><span class='fa fa-chevron-right'></span></dd>
            </router-link>
          </dl>
           <dl class='mine bd'>
              <router-link to='userhelp'>
            <dt><span class='fa fa-question-circle-o'></span>用户帮助</dt>
            <dd><span class='fa fa-chevron-right'></span></dd>
            </router-link>
          </dl>
           <dl class='mine bd'>
              <router-link to='tangsi'>
            <dt><span class='fa fa-exclamation-circle'></span>关于棠丝tangsi</dt>
            <dd><span class='fa fa-chevron-right'></span></dd>
            </router-link>
          </dl>



    </div>
   <foot></foot>
  </div>
</template>

<script>

import heads from './header'
import foot from './footer'
import axios from 'axios'
export default {
  name: 'hello',
  data(){
    return{
       user:"",
      list:[]
    }
  },
  components:{
    foot,heads
  },
  created(){
         let that=this;
         this.user=this.$route.query.user
     axios.get("http://localhost:4444/select")
       .then(function(data){
            let datas=data.data
            for(var i=0;i<datas.length;i++){
              if(that.user==datas[i].tel){
                 that.list=datas[i]
              }
            }
         
       })
  }
}
</script>

<style lang='scss'>

    $base:100/320;
    .mine-user{
      font-size:$base*14vw;
      text-align: center;
      padding-bottom: $base*35vw;
      span{
        padding: $base*20vw 0;
         width: $base*74vw;
         height: $base*74vw;
         display: inline-block;
         &>img{
           width:100%;
           height:100%;
         }
      }
     

    }

    .mine{
     
       height:$base*50vw;
       line-height:$base*50vw;
      &>a{
       color:black;
       display: block;
       width:100%;
         display:flex;
       dt{
         flex:1;
         font-size:$base*11vw;
         padding-left: $base*17vw;

         &>span{
            font-size:$base*16vw;
            padding-right: $base*14vw;
         } 
       }
       &>dd{
         flex:1;
         text-align:right;
         padding-right: $base*17vw;
       }
      }
    }
    .bd{
      border-top:1px solid #E0E0E0;
    }
</style>
