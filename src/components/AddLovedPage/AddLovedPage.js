import React from 'react';
import { connect } from 'react-redux';
import { addPage, notAddingPage } from '../../actions/index';
import './AddLovedPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function mapDispatchToProps(dispatch) {
  return {
    addPage: page => dispatch(addPage(page)),
    notAddingPage: () => dispatch(notAddingPage()),
  };
}

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

    this.addPage = this.addPage.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    return (
        <div className="AddLovedPage" >
          <div className="addform" >
            <h5>add page</h5>
            <input type="text" placeholder="title" id="title" value={this.state.title} onChange={this.handleChange} />
            <input type="text" placeholder="url" id="url" value={this.state.url} onChange={this.handleChange} />
            <button onClick={this.addPage} ><FontAwesomeIcon icon="heart" /> save</button>
            <button onClick={this.props.notAddingPage} ><FontAwesomeIcon icon="ban" /> cancel</button>
          </div>
        </div>
    );
  }

  componentDidMount() {
    document.getElementById('title').focus();
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

const AddLovedPage = connect(null, mapDispatchToProps) (ConnectedAddLovedPage);

export default AddLovedPage;
