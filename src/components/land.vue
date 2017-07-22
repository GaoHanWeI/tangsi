<template>

   <div class='hello'>
        <heads title='登录' title2='注册' flag1='true' flag2='false' flag3='true' flag4='false' flag5='true' ></heads>
         <div class='con landcon'>
              <span>
                  <img src='../../static/img/logo.png'>
              </span>
        <p class='Land'><span class='fa fa-mobile'></span><input type='text' @blur="app" placeholder="请输入登陆账号" v-model='name'></p>
        <p class='Land-pass'><span class='fa fa-key'></span><input type='password' placeholder="请输入密码" v-model='pass'></p>
        <p class='forget'>忘记密码?</p>
        <p>{{p}}</p>
        <button class='land'  @click="password" >登陆</button>
         </div>
      
      
      
   </div>


</template>
<script>
   import axios from 'axios'
   import heads from './header'
  export default {
      data(){
          return{
              name:'',
              pass:'',
              list:[],
              p:null
          }
      },
      components:{
          heads
      },
     methods:{
            app(){
                     let that = this;
               for(let i=0;i<that.list.length;i++){
                  if(this.name==that.list[i].tel){
                    //   console.log(that.list[i])
                //        if(this.name==that.list[i].user){
                //       let pass = that.list[i].pass 
                //   }
                      this.p="ok"
                      break;
                  }else{ 
                       this.p="用户名不存在"
                  }
              }

            },
            password(){
                 let that = this;
                  for(let i=0;i<that.list.length;i++){
                  if(this.name==that.list[i].tel){
                    
                      let pass = that.list[i].pass
                      if(that.pass==pass){
                          alert("登录成功")
                          location.href='http://localhost:8081/#/hello?user='+this.name+''
                      }else{ 
                        this.p="密码输入错误"
                     }    
                  }
              }
            }
        //  注册
        //   app(){
        //       for(let i=0;i<this.list.length;i++){
        //           if(this.name==this.list[i].user){
        //               console.log("存在")
        //               this.p="存在"
        //               break;
        //           }else{ 
        //               console.log("不存在")
        //               this.p="不存在"    
        //             //   continue;       
        //           }
        //       }
        //   }
     },
     created(){
         let that = this;
       axios.get("http://localhost:4444/select")
       .then(function(data){
          that.list=data.data
       })
  }
}
</script>
<style lang='scss'>
        $base:100/320;
     .landcon{
         text-align: center;
         padding:0 $base*30vw;
         input{
             border:none;
             outline: none;
         }
         &>span{
             padding: $base*30vw 0;
             width:110vw*$base;
             height:110vw*$base;
             display: inline-block;
             &>img{
                 width:100%;
                 height:100%;
             }
         }
     }
       .Land{
           padding-top: $base*10vw;           
           padding-bottom: $base*15vw;           
           border-bottom:1px solid; 
           position: relative;
           &>span{
               position: absolute;
               left:$base*20vw;
               top:$base*15vw;
           }
       }

       .Land-pass{
           padding-top: $base*10vw;
           padding-bottom: $base*15vw;
           border-bottom:1px solid;
           position: relative;
           &>span{
               position: absolute;
               left:$base*20vw;
               top:$base*15vw;
           }
       }
       .forget{
           text-align:end;
           font-size:$base*11vw;
           margin-top:$base*8vw;
       }

       .land{
           width:$base*255vw;
           height:$base*40vw;
           border:none;
           margin-top: $base*45vw;
           background:black;
           color:white;
       }
</style>