<template>
   <div class="hello">
     <heads :users="user"></heads>
     <tri tri1='按销量' tri2='按价格' tri3='按时间'></tri>
    <div class='con'>
      <ul class='produits'>
         <li v-for='i in list'>
             <router-link :to="{path:'details',query: {id:''+i.id+'',user:user}}">
             <div class='produits-images'><img style='width:40%;' :src='i.img'></div>
             <div class='produits-name'>{{i.name}}</div>
             <div class='produits-price'>
                 <div>市场价:<del>￥{{i.money1}}</del></div>
                 <div>折扣价:<span>{{i.money2}}</span></div>
                 <div>已定制:{{i.style}}</div>          
             </div>
             </router-link>
           </li>  
      </ul>
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
        that.list=data.dz
    })
  }
}
</script>

<style lang='scss'>
      $base:100/320;
    .produits{
        width:100%;
        background: #F0EFF5;
       &>li{
         margin-bottom: $base*8vw;
         width: 100%;
         background: white;
         padding: 0 $base*10vw;
         box-sizing: border-box;
         &>a{
           color: black;
         }
         .produits-images{
           text-align: center;
         }
         .produits-name{
           font-size: $base*12vw;
           margin-bottom: $base*8vw;
           margin-top: $base*4vw;
         }
         .produits-price{
           font-size: $base*12vw;
           padding-bottom:$base*4vw;
           display:flex;
           &>div{
             flex-grow: 1;
             &:nth-child(1){
               text-align: left;
               &>del{
                 text-decoration: line-through;
               }
             }
             &:nth-child(2){
               text-align:center; 
               &>span{
                 color:#DF5660;
               }
             }
             &:nth-child(3){
               text-align:right;
               color:#DF5660
             }
           }
         }
       }
    }
</style>
