import React, { Component } from "react";

export default class ProductHeader extends Component {
  render() {
    return (
      <p className="hero_header">
        <span className="hero_name">{this.props.product}</span>
      </p>
    );
  }
}
