import React from 'react';
import Portfolio from './vasanth/portfolio'; // Import Portfolio from the vasanth folder
import './vasanth/style.css'; // Import the CSS from the vasanth folder
import './App.css'; // Keep your existing App.css if you want to retain some styles

function App() {
  return (
    <div className="App">
      <Portfolio /> 
    </div>
  );
}

export default App;