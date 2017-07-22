<template>
<div class='words'>

      <dl class='words-dl' v-for='i in list.comment'>
           <dt>
               <span><img :src='i.userheader'></span>
               <span><img src='../../static/img/bg2.png'></span>
               <p>{{i.user}}</p>
           </dt>
           <dd>
               <p>{{i.con}}</p>
               <p>{{i.data}}</p>
           </dd>
       </dl>
</div>
     
</template>

<script>
   import axios from 'axios'

export default {
  data(){
      return{
         list:[]
    }
  },
        created(){
        
       var that=this;
       var id=this.$route.query.id
      
    axios.get("http://localhost:4444/")
    .then(function(data){
          return data.data
    })
    .then(function(data){  
        for(var i=0;i<data.author.length;i++){
            if(id==data.author[i].id){
              that.list=data.author[i]
            }        
        } 
    })
  }
}
</script>

<style lang='scss'>
      $base:100/320;
      .words{
          padding-top:$base*10vw;
      }
        .words-dl{
              display:flex;
               padding-right:$base*12vw;
              &>dt{
                  width:$base*70vw;
                  position: relative;
                  border-right:2px solid #F7E385;
                  &>span{
                      &:nth-child(1){
                         width:$base*35vw;
                         height:$base*35vw;
                         display:inline-block;
                         margin-left: $base*12.5vw;                        
                         &>img{
                            
                             width:100%;
                             height: 100%;
                             border-radius: 50%;
                             border: $base*2px solid #FFD617;
                         }
                      }
                      &:nth-child(2){
                          position: absolute;
                          top:$base*11vw;
                         width:$base*28vw;
                         height:$base*15vw;
                         display:inline-block;
                         right:$base*-5.8vw;
                         &>img{
                             width:100%;
                             height: 100%;                        
                         }
                      }
                  }
                  &>p{
                      font-size:$base*12vw;
                      color:#9F9EA4;
                      margin-left:$base*10vw;
                      margin-top:$base*4vw;
                  }
              } 
              &>dd{
                   margin-bottom:$base*12vw;
                   margin-top:$base*2vw;
                   height:$base*64vw;
                   padding-left: $base*15vw;
                  flex-grow:1;
                  background-image: url('../../static/img/bg.png');
                  background-size:100% 100%;
                  &>p{
                      &:nth-child(1){
                          padding-top: $base*10vw;
                          font-size:$base*11vw;
                      }
                      &:nth-child(2){
                          padding-top: $base*10vw;
                          font-size:$base*10vw;
                          color: #C5C5C5;
                      }
                  }
              }
        }
</style>
