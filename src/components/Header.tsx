import React from "react";
import styled from "styled-components/macro";
import { ReactComponent as SettingsIcon } from "../icons/settings.svg";

const StyledHeader = styled.header`
  background-color: #3f4976;
  color: white;
  height: 60px;
  font-family: "Caveat", cursive;
  font-size: 40px;
  .title {
    text-align: center;
    height: 100%;
  }
  .settings-icon {
    position: absolute;
    right: 20px;
    top: 6px;
    svg {
      width: 30px;
      height: 30px;
      cursor: pointer;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }
  }
`;
export const Header = () => {
  return (
    <StyledHeader>
      <div className={"title"}>Busy Bee</div>
      <div className={"settings-icon"}>
        <SettingsIcon />
      </div>
    </StyledHeader>
  );
};
