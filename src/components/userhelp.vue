<template>
    <div class='hello'>
         <heads title='用户帮助' flag1='true' flag2='false' falg5='true' flag4='true'  falg3='true'></heads>
          <div class='con help-con'>
          
          <p>1.如果只需要非常简单的路由而不需要引入整个路由库，可以动态渲染一个页面级的组件像这样</p>
          <p>2.无论是 HTML5 history 模式还是 hash 模式，它的表现行为一致，所以，当你要切换路由模式，或者在 IE9 降级使用 hash 模式，无须作任何变动。
             会拦截点击事件，让浏览器不再重新加载页面。</p>
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
      .help-con{
          background: #EFEFF4;
          padding: 0 $base*25vw 0 $base*15vw;
          p{
              font-size:$base*12vw;
              color:#B2B2B4;
              margin-top:$base*45vw;
          }
      }
</style>
