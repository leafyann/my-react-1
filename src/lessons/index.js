import React from 'react'
import ReactDOM from 'react-dom'
import { myFunction } from './myjs.js'

//这种方式创建了一种简单的React元素
const creatApp = (props) => {
  return (
    <div>
      {/*在jsx中要插入js的代码，就只要加一层花括号，这里注释也是js所以用了花括号。*/}
      <h1>some {props.title}</h1>
    </div>
  )
}

const app = creatApp({
  title: 'title'
})

//下面的箭头函数可以用用来创建组件，但是第一个字母要大写
const Cpp = (props) => {
  return (
    <div>
      {/*在jsx中要插入js的代码，就只要加一层花括号，这里注释也是js所以用了花括号。*/}
      <h1>some {props.title}</h1>
    </div>
  )
}

ReactDOM.render(
  <Cpp title="title" />,
  document.querySelector('.some-class')
)

myFunction()
