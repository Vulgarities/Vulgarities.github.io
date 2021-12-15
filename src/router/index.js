import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/App.vue'

Vue.useAttrs(VueRouter)

const routes = [
    {
        path: '*',
        component: Home
    },
]

const router = new VueRouter({
    //‘mdode: 'history',
    routes})

export default router