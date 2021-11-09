import React, { useState } from "react";
import Button from "../components/Button";
import Screen from "../components/Screen";
class CalculatorView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: "0",
    };

    this.styling = {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
    };

    this.container = {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)",
      backgroundColor: "rgb(45 45 45)",
      borderRadius: "10px",
    };
  }

  updateUpperValue = (e) => {
    const num = this.state.result + "";
    if (num.length === 1 && num === "0") {
      this.setState({
        result: e.target.innerHTML,
      });
    } else {
      this.setState({
        result: this.state.result + e.target.innerHTML,
      });
    }
  };

  reCalc = (e) => {
    this.setState({
      result: "0",
    });
  };

  clearValue = (e) => {
    let newResult;
    const num = this.state.result + "";
    newResult = num.slice(0, -1);
    if (newResult.length === 0) {
      newResult = 0;
    }
    this.setState({
      result: newResult,
    });
  };

  evaluate = (e) => {
    const newResult = eval(this.state.result);
    this.setState({
      result: newResult,
    });
  };

  render() {
    return (
      <>
        <div style={this.container}>
          <Screen expression={this.state.result}></Screen>
          <div style={this.styling}>
            <Button char="%" updateValue={this.updateUpperValue}></Button>
            <Button char="/" updateValue={this.updateUpperValue}></Button>
            <Button char="AC" updateValue={this.reCalc}></Button>
            <Button char="C" updateValue={this.clearValue}></Button>
          </div>
          <div style={this.styling}>
            <Button char="7" updateValue={this.updateUpperValue}></Button>
            <Button char="8" updateValue={this.updateUpperValue}></Button>
            <Button char="9" updateValue={this.updateUpperValue}></Button>
            <Button char="*" updateValue={this.updateUpperValue}></Button>
          </div>
          <div style={this.styling}>
            <Button char="4" updateValue={this.updateUpperValue}></Button>
            <Button char="5" updateValue={this.updateUpperValue}></Button>
            <Button char="6" updateValue={this.updateUpperValue}></Button>
            <Button char="-" updateValue={this.updateUpperValue}></Button>
          </div>
          <div style={this.styling}>
            <Button char="1" updateValue={this.updateUpperValue}></Button>
            <Button char="2" updateValue={this.updateUpperValue}></Button>
            <Button char="3" updateValue={this.updateUpperValue}></Button>
            <Button char="+" updateValue={this.updateUpperValue}></Button>
          </div>
          <div style={this.styling}>
            <Button char="." updateValue={this.updateUpperValue}></Button>
            <Button char="0" updateValue={this.updateUpperValue}></Button>
            <Button char="=" updateValue={this.evaluate}></Button>
          </div>
        </div>
      </>
    );
  }
}

export default CalculatorView;
