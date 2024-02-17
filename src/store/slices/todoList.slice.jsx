import { createSlice } from "@reduxjs/toolkit";
import TodoList from "../../Todo/TodoList";


const initialState = {
  todos: [TodoList],
};

const todoListSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, removeTodo } = todoListSlice.actions;
export default todoListSlice.reducer;