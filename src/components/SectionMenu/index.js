import React from "react";
import styled from "styled-components";
import MenuItem from "components/MenuItem";
import { useConfig, useSection } from "hooks";

const Nav = styled.nav`
  overflow-x: scroll;
  height: 100%;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  list-style-type: none;
  height: 100%;
`;

const StyledSectionMenu = () => {
  const { tabs } = useConfig();
  const [{ selected }, { setSelected }] = useSection();

  const selectMenuItem = key => event => {
    event.preventDefault();
    setSelected(key);
  };

  return (
    <Nav>
      <List>
        {Object.entries(tabs).map(([key, value]) => (
          <MenuItem
            key={key}
            title={value}
            onClick={selectMenuItem(key)}
            selected={key === selected}
          />
        ))}
      </List>
    </Nav>
  );
};

export default StyledSectionMenu;
