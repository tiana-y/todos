import React, { useState } from "react";
import { TodoItem } from "../../types";
import { ExpandToggle, ListItemWrapper } from "./TodoItemComponent.styled";
import { Checkbox } from "../Common/Checkbox/Checkbox";
import { ReactComponent as ExpandIcon } from "../../icons/expand.svg";
import { toggleTodoItem } from "../../store/notesStore";

type TodoItemComponentProps = {
  item: TodoItem;
  indent: number;
  noteId: string;
};
export const TodoItemComponent: React.FC<TodoItemComponentProps> = ({
  item,
  indent,
  noteId,
}) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const handleToggle = () => {
    toggleTodoItem(noteId, item.id);
  }
  return (
    <>
      <ListItemWrapper $indent={indent}>
        <Checkbox
          checked={item.isDone}
          onToggle={handleToggle}
          label={item.text}
          id={item.id}
        />
        {item.children && (
          <ExpandToggle $expanded={isExpanded} onClick={() => setIsExpanded((prevState) => !prevState)}>
            <ExpandIcon/>
          </ExpandToggle>
        )}
      </ListItemWrapper>
      {isExpanded &&
        item.children?.map((subItem) => (
          <TodoItemComponent
            key={subItem.id}
            item={subItem}
            indent={indent + 1}
            noteId={noteId}
          />
        ))}
    </>
  );
};
