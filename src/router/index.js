import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home'
import miniCash from '@/pages/miniCash'
import Video from '@/pages/video'
import Online from '@/pages/online'
import Food from '@/pages/food'
import Ai from '@/pages/ai'
import Sell from '@/pages/sell'
import Other from '@/pages/other'
import Product from '@/pages/product'
import News from '@/pages/news'
import NewsDetail from '../components/news/news_detail'
import Cooperate from '@/pages/cooperate'
import AboutWe from '@/pages/aboutWe'
import Contact from '@/pages/contact'
import Login from '@/pages/login'
import UpdatePsd from '../components/login/updatePsd'
import Sign from '../components/login/sign'
import Error from '@/pages/404'




Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path:'/Video',
            name:'Video',
            component:Video
        },
        {
            path:'/miniCash',
            name:'miniCash',
            component:miniCash
        },
        {
            path:'/Online',
            name:'Online',
            component:Online
        },
        {
            path:'/Food',
            name:'Food',
            component:Food
        },
        {
            path:'/Ai',
            name:'Ai',
            component:Ai
        },
        {
            path:'/Sell',
            name:'Sell',
            component:Sell
        },
        {
            path:'/Other',
            name:'Other',
            component:Other
        },
        {
            path:'/Product',
            name:'Product',
            component:Product
        },
        {
            path:'/News',
            name:'News',
            component:News
        },
        {
            path:'/NewsDetail',
            name:'NewsDetail',
            component:NewsDetail
        },
        {
            path:"/Cooperate",
            name:'Cooperate',
            component:Cooperate
        },
        {
            path:"/AboutWe",
            name:'AboutWe',
            component:AboutWe
        },
        {
            path:'/Contact',
            name:'Contact',
            component:Contact
        },
        {
            path:'/Login',
            name:'Login',
            component:Login
        },
        {
            path:'/UpdatePsd',
            name:'UpdatePsd',
            component:UpdatePsd
        },
        {
            path:'/Sign',
            name:'Sign',
            component:Sign
        },
        {
            path:'/Error',
            name:'Error',
            component:Error
        }
    ]
})
