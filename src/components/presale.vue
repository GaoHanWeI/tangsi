<template>
   <div class="hello">
     <heads  :users="user"></heads>
     <tri tri1='按销量' tri2='按价格' tri3='按定制'></tri>
    <div class='con'>
          <ul class='produits'>
           <li v-for='i in list'>
             <router-link :to="{path:'presalelist',query: {id:''+i.id+'',user:user}}">
             <div class='produits-images'><img :src='i.banner[0]'></div>
             <div class='produits-name'>{{i.name}}</div>
             <div class='produits-user'>设计师:{{i.author}}</div>
             <div class='produits-price'>
                 <div><span class='fa fa-dollar'></span>{{i.money}}</div>         
                 <div><i class='fa fa-user-o'></i>  <span>{{i.people}}</span> 人 </div>          
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
       var id=this.$route.query.id
       this.user=this.$route.query.user
      
    axios.get("http://localhost:4444/")
    .then(function(data){
      console.log(data)
          return data.data
    })
    .then(function(data){  
        that.list=data.ys
      //  console.log(that.list)
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

         .produits-images{
           text-align: center;
           padding-top:$base*5vw;
           &>img{
             width:80%;
           }
         }
         .produits-name{
           font-size: $base*12vw;
           margin-bottom: $base*8vw;
           margin-top: $base*4vw;
         }
         .produits-user{
           font-size:$base*12vw;
           margin-bottom: $base*8vw;
           color:#8F8F8F;

         }
         .produits-price{
           font-size: $base*12vw;
           padding-bottom:$base*4vw;
           display:flex;
           color:#8F8F8F;
           &>div{
             flex-grow: 1;
             &:nth-child(1){
               text-align: left;
               &>span{
                 margin-right:$base*7vw;
                 color:black;
               }
             }
             &:nth-child(2){
               text-align:right !important; 
               &>span{
                 color:#DF5660;
               }
             }
           }
         }
       }
    }
</style>
