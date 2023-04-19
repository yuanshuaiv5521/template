import Vue from 'vue'
import ElementUI from 'element-ui'

import "element-ui/lib/theme-chalk/index.css"
// 如果我们在有些地方需要对elementui的基础样式进行修改，则需要单独创建一个css单独存放覆盖样式
import "../assets/css/reset-element.css"

Vue.use(ElementUI)