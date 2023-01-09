//sistem
let todo = [];

function addTodo(title, description) {
  todo.unshift({
    id: +new Date(),
    title,
    description,
    isComplete: false,
  });
}

function showAllTodo() {
  return todo;
}

function showTodoById(id) {
  for (const key in todo) {
    if (todo[key].id == id) {
      return todo[key];
    }
  }
  return "404 not found";
}

function updateTodo(id, title, description, isComplete) {
  for (let index in todo) {
    if (todo[index].id === id) {
      if (title) {
        todo[index].title = title;
      }
      if (description) {
        todo[index].description = description;
      }
      if (isComplete === !todo[index].isComplete) {
        todo[index].isComplete = isComplete;
      }
    }
  }
}

function deleteTodo(id) {
  for (let index in todo) {
    if (todo[index].id == id) {
      todo.splice(index, 1);
    }
  }
}