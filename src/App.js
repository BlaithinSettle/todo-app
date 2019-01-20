import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';
import 'bulma/css/bulma.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons';

library.add(faCalendarCheck);

class App extends Component {
  state = {
    todos: []
  };

  deleteTodo = id => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });
    this.setState({
      todos
    });
  };

  addTodo = todo => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    });
  };

  render() {
    return (
      <div className="todo-app container">
        <div className="header-section">
          <h1 className="center header">
            My Todo List <br />
            <br />
            <FontAwesomeIcon icon={faCalendarCheck} />
          </h1>
          <br />
          <br />
        </div>
        <AddTodo addTodo={this.addTodo} />
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <hr className="line" />
      </div>
    );
  }
}

export default App;
