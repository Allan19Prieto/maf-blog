import React from "react";
import './App.css';
import Form from './components/Form'

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          To Do List
        </p>
        <Form />
      </header>
    </div>
  );
}

export default App;

