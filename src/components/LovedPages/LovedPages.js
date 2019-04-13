import React from 'react';
import './LovedPages.css';
import AddLovedPage from './AddLovedPage/AddLovedPage';
import LovedPagesList from './LovedPagesList/LovedPagesList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class LovedPages extends React.Component {
  render() {
    return (
        <div className="LovedPages" >
            <div className="top" >
              <h4>pages you <FontAwesomeIcon icon="heart" /></h4>

              <AddLovedPage />
            </div>

            <LovedPagesList />
        </div>
    );
  }

  componentDidMount() {
    this.setState({ someKey: 'otherValue' });
  }
}

export default LovedPages;
