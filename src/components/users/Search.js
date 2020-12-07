import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import ShowText from './../layout/ShowText';
import { render } from '@testing-library/react';

export class Search extends Component {
  state = {
    text: '',
    showText: '',
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    clearAlert: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired,
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      showText: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.text === '') {
      this.props.setAlert('Please enter some Text', 'light');
    } else {
      // * clear the alert box if there are users available

      this.props.clearAlert();
      this.props.searchUsers(this.state.text);
      this.setState({ text: '' });
    }
  };

  render() {
    return (
      <div>
        <form className='form' onSubmit={this.onSubmit}>
          <input
            type='text'
            name='text'
            value={this.state.text}
            onChange={this.onChange}
            placeholder='Search Users..'
          />
          <input
            type='submit'
            value='Search'
            className='btn btn-dark btn-block'
          />
        </form>
        {this.props.showClear && (
          //! && => if show clear is true ---//refer conditional rendering docs
          <div>
            <button
              className=' btn btn-light btn-block'
              onClick={this.props.clearUsers}
            >
              Clear
            </button>
            <ShowText showtext={this.state.showText}></ShowText>
          </div>
        )}
      </div>
    );
  }
}

export default Search;
