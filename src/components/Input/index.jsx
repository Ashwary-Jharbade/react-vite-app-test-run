import React from "react";

export default class Input extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { inputVal, inputAction } = this.props;
    return (
      <>
        <input onChange={inputAction} type="text" value={inputVal} />
      </>
    );
  }
}
