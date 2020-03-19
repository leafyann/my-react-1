import React, { Component } from 'react'

export default class Like extends Component {
    constructor(){
        super()
        this.state = {
            isLiked: false
        }
    }
    handleLikeClick = () => {
        //使用下面comment的模式在react里面是不允许的(能修改数据，但是界面不会重新渲染)，不可以直接修改state，而要用到setState这个函数来改变state
        //this.state.isLiked = !this.state.isLiked (这种写法在react中不行)
        //setState方法可以有两个参数
        //第一个参数又有两种情况，第一种情况是一个对象{}，如下
        // this.setState({
        //     isLiked: !this.state.isLiked
        // })
        //第二种情况是一个方法
        this.setState((preState) => {
            return{
                isLiked: !this.state.isLiked
            }
        }, () => {
            //由于setState是异步的，如果想要获取到最新的state，应该在这个回调里面来获取
            console.log(this.state.isLiked)
        })
    }
    render() {
        return (
            <div>
                <span onClick={this.handleLikeClick}>
                {
                    this.state.isLiked ? <span>Not like <img src={require('./heavy-black-heart_2764.png')} width="16" /></span> : <span>Like <img src={require('./black-heart_1f5a4.png')} width="16" /></span>
                }
                </span>
            </div>
        )
    }
}
