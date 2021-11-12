import React from "react";
import Button from "../Button/";
import Input from "../Input";
import List from "../List";

export default class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodoTitle: "",
      todoList: [],
      todoListName: "todo1",
    };
  }

  _createNewTodoTitle = () => {
    const { newTodoTitle, todoList } = this.state;
    if (!newTodoTitle) {
      return;
    }
    const todoTitle = {
      id: new Date().getTime(),
      title: newTodoTitle,
    };
    const newList = [...todoList, todoTitle];
    this.setState({
      todoList: newList,
      newTodoTitle: "",
    });
  };

  _onInputChange = (e) => {
    const { value } = e.target;
    this.setState({
      newTodoTitle: value,
    });
  };

  _deSerializeTodoList(list) {
    const deSerializeList = JSON.parse(list);
    return deSerializeList;
  }

  _serializeTodoList(list) {
    const serializedList = JSON.stringify(list);
    return serializedList;
  }

  _retriveTodoList() {
    const { todoListName, todoList } = this.state;
    let currentTodoList = localStorage.getItem(todoListName);
    if (!currentTodoList) {
      localStorage.setItem(todoListName, this._serializeTodoList(todoList));
      return [];
    }
    const list = this._deSerializeTodoList(currentTodoList);
    return list;
  }

  _removeTodoTitle = (e) => {
    const index = e.target.id;
    const { todoList } = this.state;
    const list = [...todoList];
    list.splice(index, 1);
    this.setState({
      todoList: list,
    });
  };

  _updateLocalStorage = () => {
    const { todoListName, todoList } = this.state;
    localStorage.setItem(todoListName, this._serializeTodoList(todoList));
  };

  componentDidMount() {
    const remoteList = this._retriveTodoList();
    const newTodoList = [...remoteList];
    this.setState({
      todoList: newTodoList,
    });
  }

  componentDidUpdate() {
    this._updateLocalStorage();
  }

  componentWillUnmount() {
    // Optional
    this._updateLocalStorage();
  }

  render() {
    const { newTodoTitle, todoList } = this.state;
    return (
      <>
        <div>Todo List</div>
        <Input
          inputVal={newTodoTitle}
          inputAction={this._onInputChange}
        ></Input>
        <Button btnLabel="Create" btnAction={this._createNewTodoTitle}></Button>
        {todoList.map((item, index) => (
          <List
            removeAction={this._removeTodoTitle}
            title={item.title}
            id={index}
            key={index}
          ></List>
        ))}
      </>
    );
  }
}
