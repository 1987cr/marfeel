import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useConfig } from "hooks";
import { primary } from "styles/colors";

const Container = styled.li`
  height: 100%;
  background: transparent;

  button {
    display: inline-block;
    text-decoration: none;
    color: ${({ config }) => config.section.color};
    height: 100%;
    padding: 0 30px;
    font-family: Montserrat;
    font-size: ${({ config }) => config.section.size}px;
    font-weight: bold;
    text-transform: uppercase;
    background: transparent;
    outline: none;
    border: none;
    border-bottom: 6px solid
      ${({ selected }) => (selected ? primary : "transparent")};
    cursor: pointer;
  }
`;

const MenuItem = ({ onClick, selected, title }) => {
  const config = useConfig();
  return (
    <Container selected={selected} config={config}>
      <button onClick={onClick}>{title}</button>
    </Container>
  );
};

MenuItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired
};

export default MenuItem;
