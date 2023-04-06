import React from "react";
import "./App.css";
import { TodoListContextProvider } from "./store/TodoListContextProvider";
import { MainPage } from "./components/MainPage";

function App() {
  return (
    <TodoListContextProvider>
      <MainPage />
    </TodoListContextProvider>
  );
}

export default App;
