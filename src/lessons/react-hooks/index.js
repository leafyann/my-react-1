//React Hooks 是react16.8中的新增特性，可以让你在不编写 class 的情况下使用 state 以及其他的React特性

//两个常见的api: useState 和 useEffect
import React, {useState,useEffect} from 'react'
import { render } from 'react-dom'

import App from './App'

// 如果想要全局的扩展React.Component组件的prototype，比如，想把ajax的方法全局挂在组件的this上，就可以使用下面的方式

// 1.引入所有的ajax请求
// import * as services from './services'
// //用下面的方法定义一个全局的http，因为compoment里面的内容都是可以被继承的，放在prototype里面的原因没搞懂
// 在prototype上挂载一个叫http的东西，然后就可以在组件内部通过this.http.方法名来执行一些操作
// React.Component.prototype.http = services
// // React.Component.prototype.abc = '1233'

const Counter = () => {
  const [count,setCount] = useState(0)
  useEffect(()=>{
    console.log(this)
  })
  return (
    <div>
      <button onClick={()=>{setCount(count - 1)}}>-</button>
      <span>{count}</span>
      <button onClick={()=>{setCount(count + 1)}}>+</button>
    </div>
  )
}

// render(
//   <App />,
//   document.querySelector('#root')
// )

render(
  <Counter />,
  document.querySelector('#some-id')
)
