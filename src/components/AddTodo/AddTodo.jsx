import React from "react";
import { useState, useReducer, useEffect } from 'react'
import {Plus} from 'lucide-react'

const AddTodo = ({handleAddTodo}) => {
  const [todo, setTodo] = useState("");
  return (
    <form className="m-auto flex"
    onSubmit={(e)=>{
      e.preventDefault();
      handleAddTodo(todo);
      setTodo('');
    }}>
      <input
        className="text-black outline-none px-2 py-2 flex-1"
        placeholder="e.g. Walk the dog..."
        type="text"
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      <button className="bg-orange-300 hover:bg-amber-400 text-white px-2 w-10">
      <Plus
        className="h-full w-full"
        color="white"
        strokeWidth={3}
      />
      </button>
    </form>
  );
};

export default AddTodo;
