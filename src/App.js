import React, { Component } from 'react';
import './App.css';
import UserList from './components/user-list';
import UserInfo from './components/user-info';


class App extends Component {
  render() {
    return (
      <div>
        <h2> User List</h2>
        <UserList/>
        <hr/>
        <h2> User Details</h2>
        <UserInfo/>
      </div>
    );
  }
}



export default App;
