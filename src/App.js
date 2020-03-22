import React, { Component } from 'react'
import {
    CountBtn,
    Counter
} from './componentsContext'

export default class App extends Component {
    render(){
        return (
            <>
                <CountBtn type="decrement">-</CountBtn>
                <Counter />
                <CountBtn type="increment">+</CountBtn>
            </>
        )
    }
}