import React from 'react';
import './AddLovedPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class AddLovedPage extends React.Component {
  render() {
    return (
        <div className="AddLovedPage" >
            <button onClick={this.addPage} ><FontAwesomeIcon icon="plus-square" /> add</button>
        </div>
    );
  }

  addPage() {
    console.log('yes');
  }
}

export default AddLovedPage;
