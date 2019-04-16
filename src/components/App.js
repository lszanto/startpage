import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPagesFromLocalstorage } from '../actions/index';
import './App.css';
import Searchbox from './Searchbox/Searchbox';
import LovedPages from './LovedPages/LovedPages';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart, faPlusSquare, faAnchor, faBan } from '@fortawesome/free-solid-svg-icons';
import AddLovedPage from './AddLovedPage/AddLovedPage';

library.add(faHeart, faPlusSquare, faAnchor, faBan);

function mapDispatchToProps(dispatch) {
  return {
    getPagesFromLocalstorage: a => dispatch(getPagesFromLocalstorage(a))
  };
}

const mapStateToProps = state => {
  return { isAddingPage: state.isAddingPage };
};

class ConnectedApp extends Component {
  render() {
    if (this.props.isAddingPage) {
      return (
        <div className="App">
          <AddLovedPage />
        </div>
      );
    } else {
      return (
        <div className="App">
          <Searchbox />
          <LovedPages />
        </div>
      );
    }
  }

  componentDidMount() {
    this.props.getPagesFromLocalstorage();
  }
}

const App = connect(mapStateToProps, mapDispatchToProps) (ConnectedApp);

export default App;
