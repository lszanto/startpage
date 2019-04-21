import React from 'react';
import { connect } from 'react-redux';
import './LovedPages.css'; 
import { addingPage } from '../../actions/lovedpage.actions';
import LovedPagesList from './LovedPagesList/LovedPagesList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function mapDispatchToProps(dispatch) {
  return {
    addingPage: a => dispatch(addingPage(a)),
  };
}

function ConnectedLovedPages(props) {
  return (
      <div className="LovedPages" >
          <div className="top" >
            <h4>pages you <FontAwesomeIcon icon="heart" /></h4>

            <button onClick={props.addingPage} ><FontAwesomeIcon icon="plus-square" /> add</button>
          </div>

          <LovedPagesList />
      </div>
  );
}

const LovedPages = connect(null, mapDispatchToProps) (ConnectedLovedPages);

export default LovedPages;
