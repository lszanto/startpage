import React from 'react';
import { connect } from 'react-redux';
import './LovedPage.css';
import { deletePage } from '../../../../actions/index';

function mapDispatchToProps(dispatch) {
  return {
    deletePage: page => dispatch(deletePage(page)),
  };
}

function ConnectedLovedPage(props) {
  return (
      <div className="LovedPage" >
          <a href={props.page.url} target="_blank" rel="noopener noreferrer" >{props.page.title}</a> 
          <button onClick={() => props.deletePage(props.page)} >delete</button>
      </div>
  );
}

const LovedPage = connect(null, mapDispatchToProps) (ConnectedLovedPage);

export default LovedPage;
