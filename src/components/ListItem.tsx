import React, { useState } from "react";
import { ListItem } from "../types";
import { ExpandToggle, ListItemWrapper } from "./ListItem.styled";
import { Checkbox } from "./Checkbox";
import { ReactComponent as ExpandIcon } from "../icons/expand.svg";
import { toggleTodoItem } from "../store/notesStore";

type ListItemComponentProps = {
  item: ListItem;
  indent: number;
  noteId: string;
};
export const ListItemComponent: React.FC<ListItemComponentProps> = ({
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
          <ListItemComponent
            key={subItem.id}
            item={subItem}
            indent={indent + 1}
            noteId={noteId}
          />
        ))}
    </>
  );
};
