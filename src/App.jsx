import { useState, useReducer, useEffect } from "react";
import * as Tooltip from "@radix-ui/react-tooltip";
import "./App.css";
import Header from "./components/Header/Header";
import AddTodo from "./components/AddTodo/AddTodo";
import TodoList from "./components/TodoList/TodoList";
import FilterTodos from "./components/FilterTodos.jsx/FilterTodos";

const reducer = (todos, action) => {
  switch (action.type) {
    case "add-todo": {
      return [...todos, action.payload];
    }

    case "toggle-todo": {
      return todos.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      });
    }

    case "delete-todo": {
      return todos.filter((todo) => todo.id !== action.payload);
    }
  }
};

function App() {

  const [todos, dispatch] = useReducer(reducer, [], () => {
    const storedValue = localStorage.getItem("todos");
    const initialValue = storedValue ? JSON.parse(storedValue) : [];
    return initialValue;
  });

  const [filteredBy, setFilteredBy] = useState('all');

  const handleFilteredTodos = (status)=>{
    if(status==='all'){
      return todos;
    }
    if(status==='completed'){
      return todos.filter(todo=>todo.completed);
    }
    if(status==='uncompleted'){
      return todos.filter(todo=>!todo.completed)
    }
  }

  const filteredTodos = handleFilteredTodos(filteredBy);

  console.log(filteredTodos)

  useEffect(() => {
    const stringifiedTodos = JSON.stringify(todos);
    localStorage.setItem("todos", stringifiedTodos);
  }, [todos]);

  const handleAddTodo = (todo) => {
    if (todo === "") return;
    const newTodo = {
      id: crypto.randomUUID(),
      completed: false,
      todo,
    };
    dispatch({ type: "add-todo", payload: newTodo });
  };

  const handleToggleTodo = (id) => {
    dispatch({ type: "toggle-todo", payload: id });
  };

  const handleDeleteTodo = (id) => {
    dispatch({ type: "delete-todo", payload: id });
  };
  return (
    <Tooltip.Provider delayDuration={200}>
      <div className="wrapper min-h-full lg:w-3/5 m-auto">
        <Header />
        <AddTodo handleAddTodo={handleAddTodo} />
        <FilterTodos filteredBy={filteredBy} setFilteredBy={setFilteredBy} />
        <TodoList
          todos={filteredTodos}
          handleDeleteTodo={handleDeleteTodo}
          handleToggleTodo={handleToggleTodo}
        />
      </div>
    </Tooltip.Provider>
  );
}

export default App;
