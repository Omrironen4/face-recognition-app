import React from 'react';
import { Navigation } from './components/Navigation/';
import { ImageLinkForm } from './components/ImageLinkForm/'
import { Rank } from './components/Rank/'
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
