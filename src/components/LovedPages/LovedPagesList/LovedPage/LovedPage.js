import React from 'react';
import { connect } from 'react-redux';
import './LovedPage.css';
import { deletePage } from '../../../../actions/index';

function mapDispatchToProps(dispatch) {
  return {
    deletePage: page => dispatch(deletePage(page)),
  };
}

class ConnectedLovedPage extends React.Component {
  constructor() {
    super();

    this.deletePage = this.deletePage.bind(this);
  }

  render() {
    return (
        <div className="LovedPage" >
            <a href={this.props.page} target="_blank" rel="noopener noreferrer" >{this.props.page.title}</a> 
            <button onClick={this.deletePage} >delete</button>
        </div>
    );
  }

  deletePage(e) {
    this.props.deletePage(this.props.page);
  }
}

const LovedPage = connect(null, mapDispatchToProps) (ConnectedLovedPage);

export default LovedPage;
