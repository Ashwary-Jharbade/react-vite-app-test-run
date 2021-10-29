import React from "react";

export default class Screen extends React.Component {
  constructor(props) {
    super(props);

    this.styling = {
      margin: "20px",
      fontSize: "40px",
      backgroundColor: "rgb(198 198 198)",
    };

    this.paraStyle = {
      textAlign: "right",
    };
  }

  render() {
    return (
      <>
        <div style={this.styling}>
          <p style={this.paraStyle}>{this.props.expression}</p>
        </div>
      </>
    );
  }
}
