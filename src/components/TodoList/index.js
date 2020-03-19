import React, { Component } from 'react'
import TodoItem from './TodoItem'
import PropTypes from 'prop-types'

export default class TodoList extends Component{
  static propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      isCompleted: PropTypes.bool.isRequired
    })).isRequired,
    onCompletedChangeCheckbox: PropTypes.func
  }
  render(){
    return(
      <ul>
        {/* <TodoItem todos={this.props} /> */}
        {this.props.todos.map(todo => {
        return (
         // <TodoItem key={todo.id} id={todo.id} title={todo.title} isCompleted={todo.isCompleted} />
         <TodoItem 
          key={todo.id} 
          {...todo} 
          onCompletedChangeCheckbox={this.props.onCompletedChangeCheckbox}
          /> 
         )
        // <div key={todo.id}>{todo.title}</div>
        })}
      </ul>
 

    )
  }
}

