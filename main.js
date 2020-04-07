import Vue from 'vue'
import App from './App'


//请求
import http from './static/js/http.js'
Vue.prototype.$http = http

//不支持全面屏
// import uniNavBar from './components/uni-nav-bar/uni-nav-bar.vue'
// Vue.component('uni-nav-bar',uniNavBar)
//图标组件
import uniIcons from './components/uni-nav-bar/uni-nav-bar.vue'
Vue.component('uni-icon',uniIcons)

//外界字体图标
import faicon from './components/fa-icon/fa-icon.vue'
Vue.component('faicon',faicon)

// import 'font-awesome/css/font-awesome.min.css';



Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
