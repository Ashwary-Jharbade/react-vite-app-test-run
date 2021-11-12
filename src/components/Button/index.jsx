import React from "react";

export default class Button extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { btnLabel, btnAction, id } = this.props;
    return (
      <>
        <button id={id} onClick={btnAction}>
          {btnLabel}
        </button>
      </>
    );
  }
}
