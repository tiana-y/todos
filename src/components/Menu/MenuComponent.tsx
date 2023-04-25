import { useStore } from "@nanostores/react";
import { IconWrapper, MenuCard, MenuItem, MenuWrapper, ToggleLabel, IconLabel } from "./MenuComponent.styled";
import { settings as settingsAtom, toggleFont } from "../../store/settingsStore";
import { ToggleComponent } from "../Common/Toggle/ToggleComponent";
import { ReactComponent as EditIcon } from "../../icons/pencil.svg";
import { ReactComponent as AddIcon } from "../../icons/add-hexagon.svg";

export const MenuComponent = () => {
  const settings = useStore(settingsAtom);
  return (
    <MenuWrapper>
      <MenuCard $isOpen={settings.isOpen}>
        <MenuItem>
          <ToggleComponent checked={settings.useCustomFont} onToggle={toggleFont}/>
          <ToggleLabel>Рукописный шрифт</ToggleLabel>
        </MenuItem>
        <MenuItem $clickable $editNote>
          <IconWrapper><EditIcon/></IconWrapper>
          <IconLabel>Редактировать заметку</IconLabel>
        </MenuItem>
        <MenuItem $clickable $createNote>
          <IconWrapper><AddIcon/></IconWrapper>
          <IconLabel>Новая заметка</IconLabel>
        </MenuItem>
      </MenuCard>
    </MenuWrapper>
  );
};
