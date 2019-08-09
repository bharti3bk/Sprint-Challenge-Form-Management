import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserRegisterationForm from './Component/RegisterationForm'

function App() {
  return (
    <div className="App">
      <h1 id = "header">Register</h1>
      <UserRegisterationForm data-testid="userForm" />
    </div>
  );
}

export default App;
