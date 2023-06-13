//import logo from './logo.svg';
import React from 'react'
import 'bootswatch/dist/flatly/bootstrap.css'
import Login from './views/login'
import './custom.css'
import './App.css';

class App extends React.Component {
  
  render(){
    return(
      <div>
          <Login/>
      </div>
    )
  }

}

export default App;
