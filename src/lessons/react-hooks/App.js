import React, { Component, Fragment } from 'react'
import {
  TodoHeader,
  TodoInput,
  TodoList,
  Like
} from './components'

import {getTodos} from './services'


export default class App extends Component {
  // state={
  //   title:'todos123'
  // }
  constructor(){
    super()
    this.state = {
      title:'todos',
      desc: 'finish it today',
      // article: '<div>abcdefghijklmnopqrstuvwxyz <i>cba</i></div>',
      todos: [],
      isLoading: false
      // [{
      //   id: 1,
      //   title: 'meal',
      //   time: '20mins',
      //   completed: true
      // },
      // {
      //   id: 2,
      //   title: 'sleep',
      //   time: '8hrs',
      //   completed: false
      // }]
    }
  }

  getData = () => {
    this.setState({
      isLoading: true
    })
    getTodos().then(resp => {
      console.log(resp)
      if(resp.status === 200){
        this.setState({
          todos: resp.data
        })
      } else {
        //处理错误
      }
    }).catch(err => {
      console.log(err)
    }).finally(() =>{
      this.setState({
        isLoading: false
      })
    })
  }

  componentDidMount(){
    this.getData()
  }

  addTodo =(todoTitle, callbackFunc) => {
    console.log(todoTitle)
    // const todos_list = this.state.todos
    // todos_list.push({
    //   id: Math.random(),
    //   title: todoTitle,
    //   completed: false
    // })
    // this.setState(
    //   {todos: todos_list}
    // )
    this.setState({
      todos: this.state.todos.concat({
        id: Math.random(),
        title: todoTitle,
        completed: false
      })
    })
    callbackFunc()
    //先post，再把post的结果Push到状态里面，后端接收数据会返回成功或者要重新接受一次表格。
  }

  onCompletedChangeCheckbox = (id) => {
    console.log('onCompletedChangeCheckbox',id)
    this.setState((preState) =>{
      return{
        todos: preState.todos.map(todo_data => {
          if (todo_data.id === id){
            todo_data.completed = !todo_data.completed
          }
          return todo_data
        })
      }
    })
  }

  render() {
    return (
      <Fragment>
        <TodoHeader desc={this.state.desc} x={1} y={2} class="some-class"><i>{this.state.title}</i></TodoHeader>
        <TodoInput addTodo = {this.addTodo} btnText="Add" />
        {
          this.state.isLoading ? 
          <div>Loading...</div> : 
          <TodoList todos={this.state.todos} onCompletedChangeCheckbox={this.onCompletedChangeCheckbox} />
        }
        
        {/* {
          this.state.todos.map(todo => {
          return <div key={todo.id}>{todo.title}</div>
          })
        } */}
        {/* {
          <div dangerouslySetInnerHTML={{__html: this.state.article}} />
        } */}
        <Like />
      </Fragment>
    )
  }
}
