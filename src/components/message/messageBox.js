import React, { Component } from 'react';

const showOrNotMessage = {
    'NONE' : 'd-none',
    'FAILED': 'd-block',
    'LOADED': 'd-block',
    'NOT_AVAILABLE': 'd-block'
};

const howToShow = {
    'NONE': '',
    'FAILED': 'alert-danger',
    'LOADING': 'alert-info',
    'LOADED': 'alert-success',
    'SAVED': 'alert-success',
    'NOT_AVAILABLE': 'alert-danger'
};

class MessageBox extends Component {

  render() {
    return (
        <div className={`message-box ${showOrNotMessage[this.props.authenticationStatus]} ${howToShow[this.props.authenticationStatus]} alert`}>
          {this.props.authenticationStatusDescription}
        </div>
    );
  }
}

export default MessageBox;
