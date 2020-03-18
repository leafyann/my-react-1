import React, { Component, Fragment } from 'react'
import {
  TodoHeader,
  TodoInput,
  TodoList
} from './components'

export default class App extends Component {
  render() {
    return (
      <Fragment>
      <TodoHeader desc="finish it today" x={1} y={2} class="some-class"><i>todos</i></TodoHeader>
      <TodoInput btnText="Add" />
      <TodoList />
      </Fragment>
    )
  }
}
