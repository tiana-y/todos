import {
  NoteWrapper,
  HeaderContainer,
  Pin,
  ContentContainer,
  ArrowContainer, FoldedNote
} from "./TodoNoteComponent.styled";
import { TodoNote } from "../../types";
import { TodoItemComponent } from "../TodoItem/TodoItemComponent";
import { ReactComponent as ArrowIcon } from "../../icons/arrow.svg";
import React, { useState } from "react";

type TodoNoteComponentProps = {
  note: TodoNote;
};

export const TodoNoteComponent: React.FC<TodoNoteComponentProps> = ({ note}) => {
  const [isExpanded, setIsExpanded] = useState(true);
  return (
    <NoteWrapper $expanded={isExpanded}>
      <HeaderContainer>
        <Pin $side={"left"} />
        <div className={"title"}>{note.title}</div>
        <Pin $side={"right"} />
      </HeaderContainer>
      {isExpanded && (
        <>
          <ContentContainer>
            {note.items?.map((item) => (
              <TodoItemComponent item={item} key={item.id} indent={0} noteId={note.id} />
            ))}
          </ContentContainer>
          <ArrowContainer>
            <ArrowIcon onClick={() => setIsExpanded(false)}/>
          </ArrowContainer>
        </>
      )}
      {!isExpanded && <FoldedNote onClick={() => setIsExpanded(true)}/>}
    </NoteWrapper>
  );
};
