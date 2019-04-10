import React, { Component } from 'react';
import './App.css';
import Searchbox from './Searchbox/Searchbox';
import LovedPages from './LovedPages/LovedPages';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart, faPlusSquare, faAnchor } from '@fortawesome/free-solid-svg-icons';

library.add(faHeart, faPlusSquare, faAnchor);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Searchbox />
        <LovedPages />
      </div>
    );
  }
}

export default App;
