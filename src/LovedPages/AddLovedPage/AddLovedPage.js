import React from 'react';
import './AddLovedPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class AddLovedPage extends React.Component {
  constructor() {
    super();
    this.state = { someKey: 'someValue' };
  }

  render() {
    return (
        <div className="AddLovedPage" >
            <button><FontAwesomeIcon icon="plus-square" /> add</button>
        </div>
    );
  }

  componentDidMount() {
    this.setState({ someKey: 'otherValue' });
  }
}

export default AddLovedPage;
