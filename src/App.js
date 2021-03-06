import React from 'react';


import Main from "./Main"
import SignIn from "./SignIn"
import {auth} from './base'

import './App.css';

class App extends React.Component {

  state={
    uid: null,

  }
    componentDidMount() {
        auth.onAuthStateChanged(user => {
          if (user) {
            this.handleAuth(user)
          } else {
            this.signOut()
          }
        })
      }
    
      handleAuth = (user) => {
        this.setState({ uid: user.uid })
       }

  

  signedIn = () => {
    return this.state.uid
  }

  signOut = () => {
    this.setState({uid: null})
    auth.signOut()
  }

  render() {
    return (
      <div className="App">   
        {
          this.signedIn()?<Main signOut={this.signOut}/> :<SignIn handleAuth={this.handleAuth} />   
        } 
        
        </div> 
       
    );
  }
}

export default App;
