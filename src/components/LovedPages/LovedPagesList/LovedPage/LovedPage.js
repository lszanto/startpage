import React from 'react';
import { connect } from 'react-redux';
import './LovedPage.css';
import { deletePage, editingPage } from '../../../../actions/index';

function mapDispatchToProps(dispatch) {
  return {
    deletePage: page => dispatch(deletePage(page)),
    editingPage: page => dispatch(editingPage(page)),
  };
}

function ConnectedLovedPage(props) {
  return (
      <div className="LovedPage" >
          <a href={props.page.url} target="_blank" rel="noopener noreferrer" >{props.page.title}</a> 
          <button onClick={() => props.deletePage(props.page)} >delete</button>
          <button onClick={() => props.editingPage(props.page)} >edit</button>
      </div>
  );
}

const LovedPage = connect(null, mapDispatchToProps) (ConnectedLovedPage);

export default LovedPage;
