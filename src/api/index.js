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
    // This is commented out to facilitate development. It is still a relevant piece of code.
    // if (Math.random() > 0.5) throw new Error("Boom!");
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

export const addTodos = text => {
  return delay(500).then(() => {
    const todo = {
      id: uuid(),
      text,
      completed: false
    };
    fakeDatabase.todos.push(todo);
    return todo;
  });
};

export const toggleTodo = id => {
  return delay(500).then(() => {
    const todo = fakeDatabase.todos.find(todo => todo.id === id);
    todo.completed = !todo.completed;
    return todo;
  });
};
