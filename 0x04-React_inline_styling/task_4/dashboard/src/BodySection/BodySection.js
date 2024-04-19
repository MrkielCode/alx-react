import PropTypes from "prop-types";
import React, { Component } from "react";
import "./BodySectionWithMarginBottom.css";

class BodySection extends Component {
  render() {
    return (
      <div className="bodySection">
        <h2>{this.props.title}</h2>
        {this.props.children}
      </div>
    );
  }
}

BodySection.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default BodySection;
