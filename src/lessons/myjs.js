import React from 'react'
import { render } from 'react-dom'
import './index.css'
import classNames from 'classnames'
import styled from 'styled-components'

const Zujian = () => <h1>zhe li shi yi ge zu jian</h1>

const Title = styled.li`
  color: #fff200
`

class App extends React.Component {
  render(){
    const red = {color:'#f00'}
    return (
      <div>
      <Zujian />
      <h1 style={red}>{this.props.abc}</h1>
      <ol>
        <li style={red}>使用style内联创建</li>
        <li className="red-text">使用class创建，但是在react里面，class写成className</li>
        <li className={classNames('background-red', {'a':true,'b':false})}>要动态添加不同的className就可以使用第三方的包叫className</li>
        <Title>styled-component</Title>
      </ol>
      </div>
    )
  }
}

const app = new App({
  abc: 'pipiguai'
}).render()

class Bpp extends React.Component {
  render(){
    return (
      <div>
        <span>front</span>
        <span>{this.props.x}</span>
      </div>
    )
  }
}

export const myFunction = () => {
  return render (
    <div>{app}<Bpp x='bpp x' /></div>,
    document.querySelector('#root')
  )
}
