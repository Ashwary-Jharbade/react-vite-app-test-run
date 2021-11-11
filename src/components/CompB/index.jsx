import React from "react";
import CompA from "../CompA";
import "./index.css";

export default class CompB extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      renderChild: false,
    };
  }

  _handleToggleCompA = () => {
    this.setState({
      renderChild: !this.state.renderChild,
    });
  };

  render() {
    const flag = this.state.renderChild;
    return (
      <>
        {flag ? <CompA /> : null}
        <button className="toggleBtn" onClick={this._handleToggleCompA}>
          Toggle CompA
        </button>
      </>
    );
  }
}
