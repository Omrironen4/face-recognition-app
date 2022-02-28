import React from 'react';
import Navigation from './components/Navigation/Navigation';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import './App.css';

function App() {
  return (
    <div>
      <Navigation />
      <ImageLinkForm />
      <Rank />
    </div>
  );
}

export default App;
