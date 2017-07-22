     

         import Vue from 'vue'
         import Vuex from 'vuex'
         import axios from 'axios'
          Vue.use(Vuex)
           export default  new Vuex.Store({    
             state:{
                  list:[]
             },
             getters:{
                 getlist:state=>state.list
             },
             mutations:{
                data:(state,user)=>{
                    state.list=[];
                    axios.get("http://localhost:4444/shop")
                      .then(function(data){
                          let datas=data.data       
                          for(var i=0;i<datas.length;i++){
                             if(user==datas[i].tel){
                              state.list.push(datas[i])        
                                }
                            }           
                         })
                },
                jia:(state,v)=>{
                      state.list[v].num++;
                      console.log(state.list[v].tel)
            axios.get("http://localhost:4444/shopjia",{
                 params: {
                  num:state.list[v].num,
                  tel: state.list[v].tel,
                  id:state.list[v].id
                 }
              })    
            .then(function(response) {
				     	console.log("22")
				    	console.log(response)
            }) 
			       
           },
                 jian:(state,v)=>{
                      state.list[v].num--;

                      console.log(state.list[v].id)
                axios.get("http://localhost:4444/shopjia",{
                 params: {
                   id:state.list[v].id,
                  num:state.list[v].num,
                  tel: state.list[v].tel
                 }
              })    
            .then(function(response) {
				     	console.log("22")
				    	console.log(response)
            }) 
			       
                }
             },
             actions:{
               data:(store,user)=>{
                    store.commit('data',user)
               },
              jia:(store,v)=>{
                  store.commit('jia',v)
              },
               jian:(store,v)=>{
                  store.commit('jian',v)
              }



             }


           })