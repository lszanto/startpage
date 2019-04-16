import React from 'react';
import './LovedPageForm.css';
import { connect } from 'react-redux';
import { v1 } from 'uuid';
import { hideLovedPageForm, addPage, editPage } from '../../actions/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function mapDispatchToProps(dispatch) {
  return {
    hideLovedPageForm: () => dispatch(hideLovedPageForm()),
    addPage: page => dispatch(addPage(page)),
    editPage: page => dispatch(editPage(page)),
  };
}

const mapStateToProps = state => {
  return {
    formMode: state.formMode,
    editingPage: state.editingPage,
  }
};

class ConnectedLovedPageForm extends React.Component {
    constructor(props) {
      super(props);

      if (this.props.editingPage !== null) {
        this.state = {
          title: this.props.editingPage.title,
          url: this.props.editingPage.url,
        };
      } else {
        this.state = {
          title: '',
          url: '',
        };
      }
  
      this.handleChange = this.handleChange.bind(this);
      this.submitForm = this.submitForm.bind(this);
    }

    render() {
      let disabled = (this.state.title.length > 0 && this.state.url.length > 0) ? '' : 'disabled'; 

      return (
          <div className="LovedPageForm" >
            <div className="form" >
              <h5>{this.props.formMode} page</h5>
              <input type="text" placeholder="title" id="title" value={this.state.title} onChange={this.handleChange} />
              <input type="text" placeholder="url" id="url" value={this.state.url} onChange={this.handleChange} />
              <button onClick={this.submitForm} disabled={disabled} ><FontAwesomeIcon icon="heart" /> save</button>
              <button onClick={this.props.hideLovedPageForm} ><FontAwesomeIcon icon="ban" /> cancel</button>
            </div>
          </div>
      );
    }

    componentDidMount() {
      document.getElementById('title').focus();
    }

    submitForm(e) {
      if (this.props.formMode === 'add') {
        this.props.addPage({
          uuid: v1(),
          title: this.state.title,
          url: this.state.url,
        });
      } else if(this.props.formMode === 'edit') {
        this.props.editPage({
          uuid: this.props.editingPage.uuid,
          title: this.state.title,
          url: this.state.url,
        });
      }
    }

    handleChange(e) {
      this.setState({
        [e.target.id]: e.target.value
      });
    }
}

const LovedPageForm = connect(mapStateToProps, mapDispatchToProps) (ConnectedLovedPageForm);

export default LovedPageForm;