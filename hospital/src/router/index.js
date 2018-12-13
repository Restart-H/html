import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
// import News from '@/components/news'
// import Disease from '@/components/disease'
// import Case from '@/components/case'
// import Advantages from '@/components/advantages'
// import Topic from '@/components/topic'

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', component: Index},
    // { path: '/news', component: News},
    // { path: '/disease', component: Disease},
    // { path: '/case', component: Case},
    // { path: '/advantages', component: Advantages},
    // { path: '/topic', component: Topic}
  ]
})