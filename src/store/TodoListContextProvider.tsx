import { createContext, useState } from "react";
import { todoNotes } from "../constants/todoListConstant";
import { TodoList } from "../types";

export const TodoListContext = createContext<{
  notes: TodoList[];
  setNotes: Function;
}>({
  notes: [],
  setNotes: (values: TodoList[]) => {},
});

export const TodoListContextProvider = (props: { children: any }) => {
  const [notes, setNotes] = useState(todoNotes);

  return (
    <TodoListContext.Provider
      value={{
        notes,
        setNotes,
      }}
    >
      {props.children}
    </TodoListContext.Provider>
  );
};
