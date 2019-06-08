import uuid from "uuid/v4";

// Fake database, making it easier for us to demonstrate working with a remote API.
const fakeDatabase = {
  todos: [
    {
      id: uuid(),
      text: "hey",
      completed: true
    },
    {
      id: uuid(),
      text: "ho",
      completed: true
    },
    {
      id: uuid(),
      text: "let’s go",
      completed: false
    }
  ]
};

const delay = ms =>
  new Promise(resolve => {
    setTimeout(resolve, ms);
  });

export const fetchTodos = filter => {
  return delay(500).then(() => {
    switch (filter) {
      case "all":
        return fakeDatabase.todos;
      case "completed":
        return fakeDatabase.todos.filter(todo => todo.completed);
      case "active":
        return fakeDatabase.todos.filter(todo => !todo.completed);
      default:
        throw new Error(`Unknown filter: ${filter}`);
    }
  });
};
