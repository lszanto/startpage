import React from 'react';
import './LovedPagesList.css';
import LovedPage from './LovedPage/LovedPage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class LovedPagesList extends React.Component {
  constructor() {
    super();
    this.state = {
      'pages': []
    };
  }

  render() {
    return (
        <div className="LovedPagesList" >
          <ul>
            {this.state.pages.map((page, index) => {
              return (
                <li key={index} ><FontAwesomeIcon icon="anchor" /> <LovedPage page={page} /></li>
              )
            })}
          </ul>
        </div>
    );
  }

  componentDidMount() {
    this.loadPagesFromLocalStorage();
  }

  loadPagesFromLocalStorage() {
    this.checkLocalStorage();

    this.setState({
      'pages': JSON.parse(localStorage.getItem('pages')).pages,
    });
  }

  checkLocalStorage() {
    if (localStorage.getItem('pages') === null) localStorage.setItem('pages', JSON.stringify({pages:[]}));
  }
}

export default LovedPagesList;
