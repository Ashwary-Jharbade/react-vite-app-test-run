import React from "react";
import CalculatorView from "../views/CalculatorView";

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <CalculatorView></CalculatorView>
      </>
    );
  }
}
