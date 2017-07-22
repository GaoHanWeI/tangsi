<template>
  <div class="hello">
    <heads  flag1='true' :users="user" flag2='true' flag3='false' flag4='true' falg5='true' title='棠丝tangsi'>   
    </heads>
    <div class='con'>
      <div class='banner'>
        <mt-swipe :auto="4000">
           <mt-swipe-item  v-for='i in list.banner'><img :src='i'></mt-swipe-item>
        </mt-swipe>
      </div>
     <ul class='Hello-list' v-for='i in list.list'>
         <li><router-link to='customize'><img :src='i'></router-link></li>
       </ul>
    </div>
   <foot></foot>
  </div>
</template>

<script>
import heads from './header'
import foot from './footer'
export default {
  name: 'hello',
  components:{
    foot,heads
  },
  data() {
     return{
          user:"",
           list:{
             'banner':['../static/img/1.png','../static/img/2.png','../static/img/3.png'],
             'list':['../static/img/a.png','../static/img/b.png','../static/img/c.png']
           }
     }
  },
  created(){
        this.user=this.$route.query.user
        console.log(this.user)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
   $base:100/320;
   %re{
       position: relative;
   }
   %ab{
       position: absolute;
   }
   .con{
     overflow: auto;
   }
     .banner{
       height:$base*177vw;
       &>div{
         height: 100%;
         img{
           width:100%;
         }
       }
     }

    .Hello-list{
      &>li{
        margin-top: $base*60vw;
        width:100%;
        img{
          width:100%;
        }
      }
    }

</style>
