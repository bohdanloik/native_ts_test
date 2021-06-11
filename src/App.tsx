import React from 'react';
import logo from './logo.svg';
import './App.css';
import { TestComponent } from './components/test/TestComponent';
import { User } from './components/test/function_callback';

function App() {
  return (
    <div className="App">
      <TestComponent />
      <User />
    </div>
  );
}

export default App;
