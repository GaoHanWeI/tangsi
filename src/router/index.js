import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import customize from '@/components/customize'
import presale from '@/components/presale'
import designer from '@/components/designer'
import mine from '@/components/mine'
import balance from '@/components/balance'
import order from '@/components/order'
import works from '@/components/works'
import feedback from '@/components/feedback'
import userhelp from '@/components/userhelp'
import tangsi from '@/components/tangsi'
import pass from '@/components/pass'
import shopping  from '@/components/shopping'
import details  from '@/components/details'
import space  from '@/components/space'
import werke  from '@/components/werke'
import words  from '@/components/words'
import presalelist  from '@/components/presalelist'
import data  from '@/components/data'
import land  from '@/components/land'
Vue.use(Router)

export default new Router({
  routes: [
     {
      path: '/land',
      name: 'land',
      component: land
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },{
       path: '/customize',
       name: 'customize',
       component: customize
    },{
       path: '/presale',
       name: 'presale',
       component: presale
    },{
       path: '/designer',
       name: 'designer',
       component: designer
    },{
       path: '/mine',
       name: 'mine',
       component:mine
    },{
       path: '/balance',
       name: 'balance',
       component:balance
    },{
       path: '/order',
       name: 'order',
       component:order
    },{
       path: '/works',
       name: 'works',
       component:works
    },{
       path: '/feedback',
       name: 'feedback',
       component:feedback
    },{
       path: '/userhelp',
       name: 'userhelp',
       component:userhelp
    },{
       path: '/tangsi',
       name: 'tangsi',
       component:tangsi
    },{
       path: '/pass',
       name: 'pass',
       component:pass
    },{
       path: '/shopping',
       name: 'shopping',
       component:shopping
    },{
       path: '/details',
       name: 'details',
       component:details
    },{
       path: '/werke',
       name: 'space',
       component:space,
       children:[
         {
            path: '/werke',
            name: 'werke',
            component:werke
         },{
            path: '/words',
            name: 'words',
            component:words
         }
       ]
    },{
            path: '/presalelist',
            name: 'presalelist',
            component:presalelist
    },{
            path: '/data',
            name: 'data',
            component:data
    }
  ],
  linkActiveClass:'active',
   

})

