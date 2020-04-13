import Vue from 'vue'
import App from './App'


//请求
import http from './static/js/http.js'
Vue.prototype.$http = http

//图标组件
import uniIcons from './components/uni-nav-bar/uni-nav-bar.vue'
Vue.component('uni-icon',uniIcons)
//外界图标
import cmdIcon from "@/components/cmd-icon/cmd-icon.vue"
Vue.component('cmd-icon',cmdIcon)

import 'font-awesome/css/font-awesome.min.css'



Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
