// import React, { Component } from "react";

// class TaskList extends Component {
//   render() {
//     const { todos, onToggleTodo } = this.props;
//     return (
//       <ul className="list-group list-group-hover">
//         {todos.map(todo => (
//           <li
//             className={this.getTodoListElementClassName(todo.completed)}
//             key={todo.id}
//             onClick={() => {
//               onToggleTodo(todo.id);
//             }}
//           >
//             {todo.text}
//           </li>
//         ))}
//       </ul>
//     );
//   }

//   getTodoListElementClassName(isCompleted) {
//     let className = "list-group-item";
//     className += isCompleted === true ? " list-group-item-success" : "";
//     return className;
//   }
// }

// export default TaskList;

import React from "react";
import Todo from "./Todo";

const TaskList = ({ todos, onToggleTodo }) => {
  return (
    <ul className="list-group list-group-hover">
      {todos.map(todo => (
        <Todo key={todo.id} todo={todo} onToggleTodo={onToggleTodo} />
      ))}
    </ul>
  );
};

export default TaskList;
