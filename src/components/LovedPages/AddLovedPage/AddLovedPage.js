import React from 'react';
import { connect } from 'react-redux';
import { addPage, addingPage } from '../../../actions/index';
import './AddLovedPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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

    this.initialState = {
      title: '',
      url: '',
    };

    this.state = {
      title: '',
      url: '',
    };

    this.addingPage = this.addingPage.bind(this);
    this.addPage = this.addPage.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    let disabled = this.props.isAddingPage ? 'disabled' : '';
    let addForm = this.props.isAddingPage ? this.getAddForm() : '';

    return (
        <div className="AddLovedPage" >
          <button onClick={this.addingPage} disabled={disabled} ><FontAwesomeIcon icon="plus-square" /> add</button>
          {addForm}
        </div>
    );
  }

  addingPage(e) {
    this.props.addingPage();
  }

  addPage(e) {
    this.props.addPage({
      title: this.state.title,
      url: this.state.url,
    });

    this.setState(this.initialState);
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  getAddForm() {
    return (
      <div className="addform" >
        <input type="text" placeholder="title" id="title" value={this.state.title} onChange={this.handleChange} />
        <input type="text" placeholder="url" id="url" value={this.state.url} onChange={this.handleChange} />
        <button onClick={this.addPage} ><FontAwesomeIcon icon="heart" /> save</button>
      </div>
    );
  }
}

const AddLovedPage = connect(mapStateToProps, mapDispatchToProps) (ConnectedAddLovedPage);

export default AddLovedPage;
