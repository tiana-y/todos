import styled from "styled-components/macro";
import {useContext} from "react";
import {TodoListContext} from "../store/TodoListContextProvider";
import {TodoNote} from "./TodoNote";

const NotesWrapper = styled.div`
`;

export const TodoNotes = () => {
    const {notes} = useContext(TodoListContext);
    return (<NotesWrapper>
            {notes.map(note => (<TodoNote key={note.id} note={note}/>))}
        </NotesWrapper>
    )
}