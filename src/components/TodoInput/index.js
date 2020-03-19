//react里通过ref来获取组件或者dom元素，使用ref之前必须调用React.createRef方法来创建一个ref
import React, { Component, createRef } from 'react'
import PropTypes from 'prop-types'

export default class TodoInput extends Component {
  static propTypes = {
    btnText: PropTypes.string
  }

  static defaultProps = {
    btnText: 'ADD'
  }

  constructor(){
    super()
    this.state = {
      inputValue: ''
    }
    // create ref in constructor
    this.inputDom = createRef()
  }

  handleKeyUp = (e) => {
    if (e.keyCode === 13){
      this.handleAddClick()
    }
  }

  handleInputChange = (e) => {
    this.setState({
      inputValue: e.currentTarget.value
    })
  }

  handleAddClick = (e) => {
    // 实际项目中需要对this.state.inputValue验证
    if(this.state.inputValue === ''){
      return false
    }
   this.props.addTodo(this.state.inputValue, ()=>{
    this.setState({
      inputValue: ''
    },()=>{
      this.inputDom.current.focus()
    })
   })
  }

  render(){
    return (
      <div>
        <input 
          type="text" 
          value={this.state.inputValue}
          onChange={this.handleInputChange}
          onKeyUp={this.handleKeyUp}
          ref={this.inputDom}
          />
          <button onClick={this.handleAddClick/*.bind(this) 如果要用习惯的函数表达式(handleAddClick(){} 不是箭头函数)则要加上这个bind(this) */}>{this.props.btnText}</button>
      </div>
    )
  }
}
