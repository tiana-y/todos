import {
  NoteWrapper,
  HeaderContainer,
  Pin,
  ContentContainer,
  ArrowContainer, FoldedNote
} from "./TodoNote.styled";
import { TodoList } from "../types";
import { ListItemComponent } from "./ListItem";
import { ReactComponent as ArrowIcon } from "../icons/arrow.svg";
import { useState } from "react";

export const TodoNote = (props: { note: TodoList }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  return (
    <NoteWrapper $expanded={isExpanded}>
      <HeaderContainer>
        <Pin $side={"left"} />
        <div className={"title"}>{props.note.title}</div>
        <Pin $side={"right"} />
      </HeaderContainer>
      {isExpanded && (
        <>
          <ContentContainer>
            {props.note.items?.map((item) => (
              <ListItemComponent item={item} key={item.id} indent={0} />
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
