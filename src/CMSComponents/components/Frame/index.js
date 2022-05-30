import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class Frame extends Component {
  constructor(props) {
    super(props);
    this.iframe = React.createRef();
  }

  componentDidMount() {
    this.renderFrameContents();
  }

  componentDidUpdate() {
    this.renderFrameContents();
  }

  componentWillUnmount() {
    ReactDOM.unmountComponentAtNode(this.iframe.current.contentDocument.body);
  }

  renderFrameContents = () => {
    const { children } = this.props;
    const doc = this.iframe.current.contentDocument;
    if (doc.readyState === 'complete') {
      ReactDOM.render(children, doc.body);
    } else {
      setTimeout(this.renderFrameContents, 0);
    }
  };

  render() {
    return <iframe {...this.props} ref={this.iframe} title="CMS Preview" />;
  }
}

Frame.propTypes = {
  children: PropTypes.any,
  className: PropTypes.any,
  style: PropTypes.any,
};

export default Frame;
