import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadPages } from '../actions/index';
import './App.css';
import Searchbox from './Searchbox/Searchbox';
import LovedPages from './LovedPages/LovedPages';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart, faPlusSquare, faAnchor } from '@fortawesome/free-solid-svg-icons';

library.add(faHeart, faPlusSquare, faAnchor);

function mapDispatchToProps(dispatch) {
  return {
    loadPages: pages => dispatch(loadPages(pages))
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
    this.loadPagesFromLocalStorage();
  }

  loadPagesFromLocalStorage() {
    this.checkLocalStorage();
    this.props.loadPages([
      {
        url: 'https://reddit.com/',
        title: 'Reddit'
      }
    ]);
  }

  checkLocalStorage() {
    if (localStorage.getItem('pages') === null) localStorage.setItem('pages', JSON.stringify({ pages: [] }));
  }
}

const App = connect(null, mapDispatchToProps) (ConnectedApp);

export default App;
