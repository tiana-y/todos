import {ListItem} from "./listItem";

export type TodoList = {
    id: string;
    title: string;
    items?: ListItem[];
    paperColor: string;
    pinColor: string;
}