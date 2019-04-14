import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPagesFromLocalstorage } from '../actions/index';
import './App.css';
import Searchbox from './Searchbox/Searchbox';
import LovedPages from './LovedPages/LovedPages';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart, faPlusSquare, faAnchor } from '@fortawesome/free-solid-svg-icons';

library.add(faHeart, faPlusSquare, faAnchor);

function mapDispatchToProps(dispatch) {
  return {
    getPagesFromLocalstorage: a => dispatch(getPagesFromLocalstorage(a))
  };
}

class ConnectedApp extends Component {
  render() {
    return (
      <div className="App">
        <Searchbox />
        <LovedPages />
      </div>
    );
  }

  componentDidMount() {
    this.props.getPagesFromLocalstorage();
  }
}

const App = connect(null, mapDispatchToProps) (ConnectedApp);

export default App;
