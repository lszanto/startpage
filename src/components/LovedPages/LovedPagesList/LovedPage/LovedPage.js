import React from 'react';
import { connect } from 'react-redux';
import './LovedPage.css';
import { deletePage, editingPage } from '../../../../actions/lovedpage.actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function mapDispatchToProps(dispatch) {
  return {
    deletePage: page => dispatch(deletePage(page)),
    editingPage: page => dispatch(editingPage(page)),
  };
}

function ConnectedLovedPage(props) {
  return (
      <div className="LovedPage" >
        <div className="page" >
          <FontAwesomeIcon icon="anchor" />
          <a href={props.page.url} target="_blank" rel="noopener noreferrer" >{props.page.title}</a> 
        </div>
          
          <div className="actions" >
            <button onClick={() => props.deletePage(props.page)} ><FontAwesomeIcon icon="trash-alt" /></button>
            <button onClick={() => props.editingPage(props.page)} ><FontAwesomeIcon icon="pencil-alt" /></button>
          </div>
      </div>
  );
}

const LovedPage = connect(null, mapDispatchToProps) (ConnectedLovedPage);

export default LovedPage;
