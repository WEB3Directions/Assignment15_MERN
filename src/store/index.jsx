// store.js
import { configureStore } from "@reduxjs/toolkit";
import todoListSlice from "./slices/todoList.slice";
import user_data_slice from "./slices/user_data_slice";




const store = configureStore({
  reducer: {
    user_data: user_data_slice,
    user_List: todoListSlice,
   
  },
});

export { store };
