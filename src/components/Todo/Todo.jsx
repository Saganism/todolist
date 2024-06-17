import React from "react";
import { useState, useReducer, useEffect } from "react";
import { Check, Trash, X } from "lucide-react";
import MyTooltip from "../Tooltip/Tooltip";
import { Tooltip } from "@radix-ui/react-tooltip";

const Todo = ({ todo, handleDeleteTodo, handleToggleTodo }) => {
  return (
        <li
        className={` bg-white text-black mb-5 pl-2 font-medium flex items-stretch ${
          todo.completed ? "line-through" : ""
        }`}
      >
        <MyTooltip content={todo.todo}>
        <span className="flex-1 py-2 text-ellipsis overflow-hidden whitespace-nowrap cursor-default">
          {todo.todo}
        </span>
        </MyTooltip>
        <button
          onClick={() => {
            handleToggleTodo(todo.id);
          }}
          className={`${
            todo.completed ? "bg-yellow-500" : "bg-green-500"
          } w-10`}
        >
          {todo.completed ? (
            <X className="h-full w-full p-1" color="white" strokeWidth={2} />
          ) : (
            <Check
              className="h-full w-full p-1"
              color="white"
              strokeWidth={3}
            />
          )}
        </button>
        <button
          onClick={() => {
            handleDeleteTodo(todo.id);
          }}
          className="bg-red-500 w-10"
        >
          <Trash className="h-full w-full p-1" color="white" strokeWidth={2} />
        </button>
      </li>
  );
};

export default Todo;
