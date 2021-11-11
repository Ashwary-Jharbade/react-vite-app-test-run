import React from "react";

export default class CompA extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          data: json,
        });
      });
    console.log("Constructor Called");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("GetDerivedStateFromProps Called");
    return null;
  }

  _handleRemovePostData = () => {
    const { data } = this.state;
    data.pop();
    this.setState({
      data: data,
    });
  };

  render() {
    const { data } = this.state;
    const length = data.length;
    console.log("Render called");
    return (
      <>
        <p>Total items: {length}</p>
        <button onClick={this._handleRemovePostData}>Remove Items</button>
        {data.map((item, index) => {
          return <div key={index}> {item.title} </div>;
        })}
      </>
    );
  }
}
