import React from "react";
import "./index.css";

export default class CompA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1,
    };
    console.log(`Phase ${this.state.value}: Component mounting stage`);
  }

  static getDerivedStateFromProps(props, state) {
    console.log(`Phase ${state.value}: Component looking for change in props`);
    console.log({
      derivedProps: props,
      derivedState: state,
    });
    return null;
  }

  _handlerUpdateValue = (e) => {
    this.setState({
      value: this.state.value + 1,
    });
  };

  render() {
    const { value } = this.state;
    console.log(`Phase ${value}: Component render stage`);
    return (
      <>
        <div className="box">
          <div>
            <div className="textContent">{value}</div>
            <div>
              <button onClick={this._handlerUpdateValue}>
                Update value by 1
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }

  componentDidMount() {
    console.log(`Phase ${this.state.value}: Component mounted stage`);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(`Phase ${nextState.value}: Should update stage`);
    console.log({
      props: this.props,
      state: this.state,
      nextProps,
      nextState,
    });
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(`Phase ${this.state.value}: SnapshotBeforeUpdate update stage`);
    console.log({
      props: this.props,
      state: this.state,
      prevProps,
      prevState,
    });
    return null;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(`Phase ${this.state.value}: Component update stage`);
    console.log({
      props: this.props,
      state: this.state,
      prevProps,
      prevState,
    });
  }

  componentWillUnmount() {
    console.log(`Last phase: Component unmount stage`);
  }
}
