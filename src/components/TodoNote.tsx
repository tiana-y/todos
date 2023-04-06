import {
  NoteWrapper,
  HeaderContainer,
  Pin,
  ContentContainer,
} from "./TodoNote.styled";
import { TodoList } from "../types";
import { ListItemComponent } from "./ListItem";

export const TodoNote = (props: { note: TodoList }) => {
  return (
    <NoteWrapper>
      <HeaderContainer>
        <Pin $side={"left"} />
        <div className={"title"}>{props.note.title}</div>
        <Pin $side={"right"} />
      </HeaderContainer>
      <ContentContainer>
        {props.note.items?.map((item) => (
          <ListItemComponent item={item} key={item.id} />
        ))}
      </ContentContainer>
    </NoteWrapper>
  );
};
