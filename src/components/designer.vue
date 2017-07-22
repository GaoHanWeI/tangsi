<template>
   <div class="hello">
     <heads  :users="user"></heads>
     <tri tri1='按人气' tri2='按作品' tri3='按时间'></tri>
    <div class='con'>
          <dl class='designer-user' v-for='i in list'>
            <router-link :to="{path:'werke',query:{id:''+i.id+''}}"> 
            <dt><img :src='i.header'></dt>
            <dd>
              <p class='designer-name'>{{i.name}}</p>
              <p class='designer-num'>人气:<span>{{i.rq}}</span> 作品数:<span>{{i.works}}</span></p>
              <div>
                {{i.sign}}
              </div>
            </dd>
            </router-link>
          </dl>
    </div>
   <foot></foot>
  </div>
</template>

<script>
import tri from './Tri'
import heads from './header2'
import foot from './footer'
import axios from 'axios'
export default {
  name: 'hello',
  data(){
    return{
       list:[],
          user:""
    }
  },
  components:{
    foot,heads,tri
  },

    created(){
       var that=this;
        this.user=this.$route.query.user
    axios.get("http://localhost:4444/")
    .then(function(data){
          return data.data
    })
    .then(function(data){
        that.list=data.author 
          // console.log(that.list)
    })
 
  }
}
</script>

<style lang='scss'>
     $base:100/320;
     .designer-user{ 
           border-bottom: 1px solid #ECECEC;  
         
           padding-top:$base*10vw;
           font-size:$base*12vw;
           color:#8F8F8F;
           padding-bottom:$base*12vw;
           &>a{
             color:black;
              display:flex;
           }
           dt{
             width:$base*55vw;
             height:$base*55vw; 
             margin:0 $base*8vw;   
             
             img{
               width:100%;
               height:100%;
             }
           }
           dd{
             flex:1;
             &>.designer-name{
               margin-top:$base*5vw;
               color:black;
               margin-bottom:$base*8vw;
             }
             &>.designer-num{
               margin-bottom:$base*6vw;
             }
             &>div{
                line-height: $base*17vw;
             }
           }
     }
</style>
