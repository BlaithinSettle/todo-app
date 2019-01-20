import React from 'react';

const Todos = ({ todos, deleteTodo }) => {
  const todoList = todos.length ? (
    todos.map(todo => {
      return (
        <div className="collection-item" key={todo.id}>
          {todo.content}
          <button
            className="button is-primary"
            onClick={() => {
              deleteTodo(todo.id);
            }}
          >
            Done!
          </button>
        </div>
      );
    })
  ) : (
    <p className="center">You have no todos</p>
  );
  return <div className="todos collection">{todoList}</div>;
};
export default Todos;
