import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useFirebaseApp } from 'reactfire';
import Login from './components/Login';
import { useUser } from 'reactfire';

function App() {
  const user = useUser();
  
  return (
    <div className="App">
      { user && <p>Bienvenidx: {user.email} </p> }
      <Login />
    </div>
  );
}

export default App;
