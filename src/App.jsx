import './App.css';

import FileExplorer from './components/FileExplorer';
import React from 'react';
import myImage from './assets/logo.png';

function App() {
  return (
    <div >
      <img src={myImage} id="myImage" />
      <FileExplorer />
    </div>
  );
}

export default App;
