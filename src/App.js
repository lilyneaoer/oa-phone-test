import React, { Component } from 'react';
import { Button } from 'react-weui';
import 'weui';
// import 'react-weui/build/packages/react-weui.css';
import 'react-weui/build/packages/react-weui-com.css';
import Wrap from './Wrap';
import './App.css';
import './basic.less';

class App extends Component {
  render() {
    return (
        <div className="App">
            <Wrap/>
        </div>
    );
  }
}

export default App;
