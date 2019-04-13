import React from 'react';
import { connect } from 'react-redux';
import { addPage, addingPage } from '../../../actions/index';
import './AddLovedPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { timingSafeEqual } from 'crypto';

function mapDispatchToProps(dispatch) {
  return {
    addPage: page => dispatch(addPage(page)),
    addingPage: a => dispatch(addingPage(a)),
  };
}

const mapStateToProps = state => {
  return { isAddingPage: state.isAddingPage };
};

class ConnectedAddLovedPage extends React.Component {
  constructor() {
    super();

    this.addingPage = this.addingPage.bind(this);
  }

  render() {
    return (
        <div className="AddLovedPage" >
        { !this.props.isAddingPage ? (
            <button onClick={this.addingPage} ><FontAwesomeIcon icon="plus-square" /> add</button>
        ) : (
          <div>Hey adding</div>
        ) }
        </div>
    );
  }

  addingPage(e) {
    this.props.addingPage();
  }
}

const AddLovedPage = connect(mapStateToProps, mapDispatchToProps) (ConnectedAddLovedPage);

export default AddLovedPage;
