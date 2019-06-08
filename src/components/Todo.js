import React from "react";

const Todo = ({ todo, onToggleTodo }) => {
  return (
    <li
      className={getTodoListElementClassName(todo.completed)}
      key={todo.id}
      onClick={() => {
        onToggleTodo(todo.id);
      }}
    >
      {todo.text}
    </li>
  );
};

const getTodoListElementClassName = isCompleted => {
  let className = "list-group-item";
  className += isCompleted === true ? " list-group-item-success" : "";
  return className;
};

export default Todo;
