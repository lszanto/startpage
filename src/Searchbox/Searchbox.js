import React from 'react';
import Config from '../Config';
import './Searchbox.css';

class Searchbox extends React.Component {
  constructor() {
    super();
    this.state = {
        searchTerm: ''
    };
  }

  _handleChange = e => {
      this.setState({
          searchTerm: e.target.value
      });
  }

  _handleKeyPress = e => {
      if (e.key === 'Enter') {
          window.open(Config.Searchbox.url + this.state.searchTerm);

          this.setState({
              searchTerm: ''
          });
      }
  }

  render() {
    return (
        <div className="Searchbox" >
            <input type="text" name="searchTerm" id="searchTerm" value={this.state.searchTerm} placeholder={Config.Searchbox.message} onChange={this._handleChange} onKeyPress={this._handleKeyPress} />
        </div>
    );
  }
}

export default Searchbox;
