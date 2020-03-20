import React, { PureComponent } from 'react'

const noop = () => {}

export default class TodoItem extends PureComponent {
  // constructor(){
  //   super()
  //   this.state = {
  //     completed: false
  //   }
  // }
  
  // statusAddClick = () =>{
  //   // const completeStatus = !this.state.completed
  //   // console.log(completeStatus)
  //   // this.setState({completed: completeStatus})
  //   this.setState(()=>{
  //     return{
  //       completed: !this.state.completed
  //     }
  //   },()=>{
  //     console.log(this.state.completed)
  //     })    
  // }

  handleCheckboxChange = () => {
    // this.props.onCompletedChangeCheckbox && this.props.onCompletedChangeCheckbox(this.props.id)
    const {
      onCompletedChangeCheckbox= noop,
      id
    } = this.props
    onCompletedChangeCheckbox(id)
  }
  //用了PureCompoment就不用以下的方法了
  // shouldComponentUpdate(nextProps, nextState){
  //   // console.log("next:",nextProps,nextState)
  //   // console.log("this",this.props,this.state)
  //   //用下面这个语句做优化，这样就不会每一个ITEM都RENDER，而是更新的那个做render
  //   return nextProps.completed !== this.props.completed
  // }
  
  render() {
    // console.log(`render ${this.props.title}`)
    const {
      completed,
      title
    }=this.props
    return (
      <li>
        <input
        checked={completed}
        onChange={this.handleCheckboxChange}
        type="checkbox" 
        />
        <span>{title} <i>{completed ? 'Completed' : 'Incompleted'}</i> </span>
        {/* <button onClick={this.statusAddClick}>{this.state.isCompleted ? 'no' : 'yes!'}</button> */}
      </li>
    )
  }
}

