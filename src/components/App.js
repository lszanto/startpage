import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPagesFromLocalstorage } from '../actions/index';
import './App.css';
import Searchbox from './Searchbox/Searchbox';
import LovedPages from './LovedPages/LovedPages';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart, faPlusSquare, faAnchor, faBan, faPencilAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import LovedPageForm from './LovedPageForm/LovedPageForm';

library.add(faHeart, faPlusSquare, faAnchor, faBan, faPencilAlt, faTrashAlt);

function mapDispatchToProps(dispatch) {
  return {
    getPagesFromLocalstorage: a => dispatch(getPagesFromLocalstorage(a))
  };
}

const mapStateToProps = state => {
  return {
    isFormShown: state.isFormShown,
  };
};

class ConnectedApp extends Component {
  render() {
    if (this.props.isFormShown) {
      return (
        <div className="App">
          <LovedPageForm />
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
