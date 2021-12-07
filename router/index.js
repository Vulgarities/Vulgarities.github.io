import Vue from 'vue'
import VueRouter from 'vue-router'

import index from '../public/index.html'

Vue.useAttrs(VueRouter)

const routes = [
    {
        path: '/home',
        component: index
    }
]

const router = new VueRouter({routes})

export default router