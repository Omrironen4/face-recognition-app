import React from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='nav'>
        <Navigation />
        <Logo />
      </div>
      <ImageLinkForm />
      {/* {
      <FaceRecognition />} */}
    </div>
  );
}

export default App;
