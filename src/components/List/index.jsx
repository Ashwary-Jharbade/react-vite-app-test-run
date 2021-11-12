import React from "react";
import Button from "../Button";
import "./index.css";

export default class List extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, id, removeAction } = this.props;
    return (
      <>
        <div className="list">
          <div>
            <p>{title}</p>
          </div>
          <div className="listBtnContainer">
            <div>
              <Button
                id={id}
                btnLabel="Remove"
                btnAction={removeAction}
              ></Button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
