import React, {useState} from "react";
import { ListItem } from "../types";
import {ListItemWrapper, TextWrapper} from "./ListItem.styled";

type ListItemComponentProps = {
    item: ListItem;
};
export const ListItemComponent: React.FC<ListItemComponentProps> = ({ item}) => {
    const [checked, setChecked] = useState(false);
  return <ListItemWrapper>
      <input type={'checkbox'} checked={checked} onChange={event => setChecked(event.target.checked)}/>
      <TextWrapper $done={checked}>{item.text}</TextWrapper>
  </ListItemWrapper>
};
