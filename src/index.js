import React from 'react'
import { render } from 'react-dom'

import App from './App'

// 如果想要全局的扩展React.Component组件的prototype，比如，想把ajax的方法全局挂在组件的this上，就可以使用下面的方式

// 1.引入所有的ajax请求
// import * as services from './services'
// //用下面的方法定义一个全局的http，因为compoment里面的内容都是可以被继承的，放在prototype里面的原因没搞懂
// 在prototype上挂载一个叫http的东西，然后就可以在组件内部通过this.http.方法名来执行一些操作
// React.Component.prototype.http = services
// // React.Component.prototype.abc = '1233'

render(
  <App />,
  document.querySelector('#root')
)
