import React, { Component } from 'react';

class ExpandableText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false,
    };
  }

  handleToggle = () => {
    this.setState((prevState) => ({ isExpanded: !prevState.isExpanded }));
  };

  render() {
    const { text, maxChars } = this.props;
    const { isExpanded } = this.state;

    const truncatedText = text.length > maxChars ? text.substring(0, maxChars) + '...' : text;

    return (
      <div>
        <span>{isExpanded ? text : truncatedText}</span>
        {text.length > maxChars && (
          <span onClick={this.handleToggle} style={{ color: 'silver', cursor: 'pointer', fontSize: '0.7em' }}>
            {isExpanded ? ' Show less' : ' Show more'}
          </span>
        )}
      </div>
    );
  }
}

export default ExpandableText;
