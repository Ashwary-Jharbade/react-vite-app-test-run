import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return {
      isError: true,
    };
  }

  componentDidCatch(error, errorInfo) {
    console.log({ error, errorInfo });
  }

  render() {
    return (
      <>{this.state.isError ? <div>Error occured</div> : this.props.children}</>
    );
  }
}
