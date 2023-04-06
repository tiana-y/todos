import React, { useState } from "react";
import { ListItem } from "../types";
import { ExpandToggle, ListItemWrapper } from "./ListItem.styled";
import { Checkbox } from "./Checkbox";
import { ReactComponent as ExpandIcon } from "../icons/expand.svg";

type ListItemComponentProps = {
  item: ListItem;
  indent: number;
};
export const ListItemComponent: React.FC<ListItemComponentProps> = ({
  item,
  indent,
}) => {
  const [checked, setChecked] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);
  return (
    <>
      <ListItemWrapper $indent={indent}>
        <Checkbox
          checked={checked}
          onToggle={() => setChecked((prevState) => !prevState)}
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
          />
        ))}
    </>
  );
};
