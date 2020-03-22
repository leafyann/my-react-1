// createContext是react提供的一个用于跨组件传值的方法
import React from 'react'
import {render} from 'react-dom'
import {CounterProvider} from './counterStore'
import App from './App'



render(
    <CounterProvider>
        <App />
    </CounterProvider>,
    document.querySelector('#root')
)
    
