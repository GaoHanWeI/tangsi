<template>
     <header class='head'>
        <router-link :to="{path:'shopping',query:{user:users}}"> <i ref="b1" class='fa fa-shopping-cart shopping' :class='{show:flags3}'></i></router-link>
         <i ref="b1" class='fa fa-chevron-left shopping' @click='back()' :class="{show:flags2}"></i>
        <span>{{title}}</span>
        <i ref="b1" class='fa fa-commenting-o commenting' :class="{show:flags1}"></i>
        <i ref="b1" class='clear' :class="{show:flags4}">{{title2}}</i>
        <router-link :to="{path:'shopping',query:{user:users}}"> <i ref="b1" class='fa fa-shopping-cart commenting' :class='{show:flags5}'></i></router-link>
        

     </header>
</template>

<script>
export default {
    props:['title','flag1','flag2','flag3','flag4','flag5',"title2","users"], 
    data(){
        return{
             flags1:null,
             flags2:null,
             flags3:null,
             flags4:null,
             flags5:null
        }
    },
      created() {   
          if(this.flag1=='false'){
             this.flags1=false
          }else{
              this.flags1=true
          }

          if(this.flag2=='false'){
             this.flags2=false
          }else{
              this.flags2=true
          }

           if(this.flag3=='false'){
             this.flags3=false
          }else{
              this.flags3=true
          }

          
           if(this.flag4=='false'){
             this.flags4=false
          }else{
              this.flags4=true
          }

            if(this.flag5=='false'){
             this.flags5=false
          }else{
              this.flags5=true
          }

    },
    methods:{
        back(){
            history.back()
        }
    }

}
</script>

<style lang='scss'>
     $base:100/320;
   %re{
       position: relative;
   }
   %ab{
       position: absolute;
   }
    .head{
        height:40vw*$base;
        width:100%;
        text-align: center;
        line-height: $base*40vw;
        border-bottom: 1px solid #E6E1E5;
        background: white;
        @extend %re;
        &>span{
            font-size:14vw*$base;
        }

        .shopping{
           @extend %ab;
           left:$base*8vw;
           top:$base*11vw;
           color: #767676;
           font-size:$base*20vw;
        }
        .commenting{
             @extend %ab;
           right:$base*8vw;
           top:$base*11vw;
           color: #767676;
           font-size:$base*20vw;

           
        }

        .show{
            display:none
        }
    }


    .myheader{
        background-color: #f00;
    }

    .clear{
          @extend %ab;
           right:$base*8vw;
           font-size:$base*12vw;
           font-style: normal;
    }
</style>
