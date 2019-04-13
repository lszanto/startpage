import React from 'react';
import Config from '../../config/Config';
import './Searchbox.css';

class Searchbox extends React.Component {
  constructor() {
    super();
    this.state = {
        searchTerm: ''
    };

    this._handleChange = this._handleChange.bind(this);
    this._handleKeyPress = this._handleKeyPress.bind(this);
  }

  _handleChange(e) {
      this.setState({
          searchTerm: e.target.value
      });
  }

  _handleKeyPress(e) {
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
