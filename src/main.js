import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 配置按需引入后，将不允许直接导入所有组件。这时到babel.config.js里把plugins的代码删除，就能进行导入所有组件
//  加载Vant核心组件库
import Vant from 'vant'
//  加载Vant全局样式
import 'vant/lib/index.css'
// 引入less全局样式
import './styles/index.less'
// 注册使用Vant组件库
Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
