import React, { Component, Fragment } from 'react'
import {
  TodoHeader,
  TodoInput,
  TodoList,
  Like
} from './components'


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
      todos: [{
        id: 1,
        title: 'meal',
        time: '20mins',
        isCompleted: true
      },
      {
        id: 2,
        title: 'sleep',
        time: '8hrs',
        isCompleted: false
      }]
    }
  }

  addTodo =(todoTitle, callbackFunc) => {
    console.log(todoTitle)
    // const todos_list = this.state.todos
    // todos_list.push({
    //   id: Math.random(),
    //   title: todoTitle,
    //   isCompleted: false
    // })
    // this.setState(
    //   {todos: todos_list}
    // )
    this.setState({
      todos: this.state.todos.concat({
        id: Math.random(),
        title: todoTitle,
        isCompleted: false
      })
    })
    callbackFunc()
  }

  onCompletedChangeCheckbox = (id) => {
    console.log('onCompletedChangeCheckbox',id)
    this.setState((preState) =>{
      return{
        todos: preState.todos.map(todo_data => {
          if (todo_data.id === id){
            todo_data.isCompleted = !todo_data.isCompleted
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
        <TodoList todos={this.state.todos} onCompletedChangeCheckbox={this.onCompletedChangeCheckbox} />
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
