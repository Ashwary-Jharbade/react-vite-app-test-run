import React from "react";

export default class CalButton extends React.Component {
  constructor(props) {
    super(props);
    this.styling = {
      flex: "3",
      padding: "20px",
      margin: "10px",
      fontSize: "30px",
      cursor: "pointer",
      backgroundColor: "rgb(75 75 75)",
      color: "white",
      borderRadius: "10px",
    };
  }

  render() {
    return (
      <>
        <button onClick={this.props.updateValue} style={this.styling}>
          {this.props.char}
        </button>
      </>
    );
  }
}
