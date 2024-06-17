import React from "react";
import Todo from "../Todo/Todo";

const TodoList = ({ todos, handleDeleteTodo, handleToggleTodo }) => {
  return (
    <ul className="list-wrapper m-auto mt-20">
      {todos.map((todo) => {
        return (
          <Todo
            key={todo.id}
            todo={todo}
            handleDeleteTodo={handleDeleteTodo}
            handleToggleTodo={handleToggleTodo}
          />
        );
      })}
    </ul>
  );
};

export default TodoList;
