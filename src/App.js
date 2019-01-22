import React, { Component } from 'react';
import './App.css'
// import store from './store'

import {connect} from 'react-redux'
// connect 参数1，组件需要哪些数据
//         参数2，组件需要哪些dispatch
class App extends Component {
  render() {
    return (
      <div className="App">
        <p>
          {this.props.num}
        </p>
        <div>
          <button onClick={()=>this.props.add()}>+</button>
          <button onClick={()=>this.props.minus()}>-</button>
        </div>
      </div>
    );
  }
}
// 需要的参数，是state
const mapStatetoProps = state =>{
  return {
    num: state
  }
}

const mapDispatchtoProps = dispatch=>{
  return {
    add:()=>dispatch({type:'add'}),
    minus:()=>dispatch({type: 'minus'})
  }
}

// 连接redux和react
App = connect(mapStatetoProps,mapDispatchtoProps)(App)

export default App;
