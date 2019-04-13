import React from 'react';
import { connect } from 'react-redux';
import './LovedPagesList.css';
import LovedPage from './LovedPage/LovedPage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const mapStateToProps = state => {
  return { pages: state.pages };
};

class ConnectedLovedPagesList extends React.Component {
  render() {
    return (
        <div className="LovedPagesList" >
          <ul>
            {this.props.pages.map((page, index) => {
              return (
                <li key={index} ><FontAwesomeIcon icon="anchor" /> <LovedPage page={page} /></li>
              )
            })}
          </ul>
        </div>
    );
  }
}

const LovedPagesList = connect(mapStateToProps) (ConnectedLovedPagesList);

export default LovedPagesList;
