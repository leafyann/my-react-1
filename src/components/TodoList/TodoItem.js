import React, { Component } from 'react'

const noop = () => {}

export default class TodoItem extends Component {
  // constructor(){
  //   super()
  //   this.state = {
  //     isCompleted: false
  //   }
  // }
  
  // statusAddClick = () =>{
  //   // const completeStatus = !this.state.isCompleted
  //   // console.log(completeStatus)
  //   // this.setState({isCompleted: completeStatus})
  //   this.setState(()=>{
  //     return{
  //       isCompleted: !this.state.isCompleted
  //     }
  //   },()=>{
  //     console.log(this.state.isCompleted)
  //     })    
  // }

  handleCheckboxChange = () => {
    // this.props.onCompletedChangeCheckbox && this.props.onCompletedChangeCheckbox(this.props.id)
    const {
      onCompletedChangeCheckbox= noop,
      id
    } = this.props
    onCompletedChangeCheckbox(id)
    console.log(this.props)
  }
  
  render() {
    const {
      isCompleted,
      title
    }=this.props

    return (
      <li>
        <input
        checked={isCompleted}
        onChange={this.handleCheckboxChange}
        type="checkbox" 
        />
        <span>{title} {isCompleted ? 'Completed' : 'Incompleted'} </span>
        {/* <button onClick={this.statusAddClick}>{this.state.isCompleted ? 'no' : 'yes!'}</button> */}
      </li>
    )
  }
}

