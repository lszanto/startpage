import React from 'react';
import './LovedPage.css';

class LovedPage extends React.Component {
  constructor(props) {
    super();
    this.state = {
        title: props.page.title,
        url: props.page.url,
    };
  }

  render() {
    return (
        <div className="LovedPage" >
            <a href={this.state.url} target="_blank" rel="noopener noreferrer" >{this.state.title}</a>
        </div>
    );
  }

  componentDidMount() {
    
  }
}

export default LovedPage;
