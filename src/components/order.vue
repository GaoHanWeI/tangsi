<template>
    <div class='hello'>
         <heads title='我的订单' flag1='true' flag4='true' falg5='true' flag2='false' falg3='true'></heads>
         <ul class='order-list'>
             <li class='order-list-active'>全部</li>
             <li>待付款</li>
             <li>待发货</li>
             <li>待收货</li>
             <li>待评价</li>
         </ul>
       <div class='con order-list-con'>
          <dl>
              <dt>
                  <p>订单状态</p>
                  <p>待付款</p>
              </dt>
              <dd>
                  <div class='order-list-con-img'><img src='../../static/img/s1.png'></div>
                  <div class='order-list-con-info'>
                      <p>韩版真丝上衣</p>
                      <div>
                          <p>￥355</p>
                          <p>x1</p>
                      </div>
                  </div>
              </dd>
              <div class='order-list-con-btn'>
                  <button>去付款</button>
                  <button>取消订单</button>
              </div>
          </dl>
            <dl>
              <dt>
                  <p>订单状态</p>
                  <p>待付款</p>
              </dt>
              <dd>
                  <div class='order-list-con-img'><img src='../../static/img/s1.png'></div>
                  <div class='order-list-con-info'>
                      <p>韩版真丝上衣</p>
                      <div>
                          <p>￥355</p>
                          <p>x1</p>
                      </div>
                  </div>
              </dd>
              <div class='order-list-con-btn'>
                  <button>去付款</button>
                  <button>取消订单</button>
              </div>
          </dl>
          <dl>
              <dt>
                  <p>订单状态</p>
                  <p>待付款</p>
              </dt>
              <dd>
                  <div class='order-list-con-img'><img src='../../static/img/s1.png'></div>
                  <div class='order-list-con-info'>
                      <p>韩版真丝上衣</p>
                      <div>
                          <p>￥355</p>
                          <p>x1</p>
                      </div>
                  </div>
              </dd>
              <div class='order-list-con-btn'>
                  <button>去付款</button>
                  <button>取消订单</button>
              </div>
          </dl>
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
      .order-list{
          display: flex;
          border-bottom: 1px solid #EAEBEE;
          &>li{
              flex-grow:1;
              text-align: center;
              font-size: $base*14vw;
              padding:$base*12vw 0;
              color:#ADADAD;
          }
      }
      .order-list-con{
          background:#EFEFF4;
          &>dl{
              margin-top: $base*5vw;
              background: white;
            
              &>dt{
                   display:-webkit-box;
                   -webkit-box-pack:justify; 
                   font-size:$base*14vw;
                   padding:$base*8vw $base*10vw;
                   border-bottom:1px solid #E9E9E9; 
              }
              &>dd{
                  display: flex;
                  padding:$base*9vw;
                  border-bottom: 1px solid #EBEBEB;
                  &>.order-list-con-img{
                      width:$base*70vw;
                      height:$base*65vw;
                      box-sizing: border-box;
                      text-align: center;
                      &>img{
                          width: 88%;
                      }
                  }
                  .order-list-con-info{
                      flex-grow: 1;
                      margin-left: $base*5vw;
                      font-size:$base*14vw;
                      &>div{
                           display:-webkit-box;
                          -webkit-box-pack:justify; 
                          margin-top:$base*25vw;
                          font-size:$base*12vw;
                      }
                  }
                  
              }
              .order-list-con-btn{
                  text-align: right;
                  padding:$base*5vw $base*9vw $base*5vw 0;
                      button{
                          padding:$base*7vw;
                          border:1px solid;
                          background: white;
                          border-radius: $base*5vw;
                          font-size:$base*12vw;
                      }
                  }
          }
      }

      .order-list-active{
          border-bottom:2px solid black;
          color:black !important; 
      }
</style>
