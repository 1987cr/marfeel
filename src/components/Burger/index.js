import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.button`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 25px;
  height: 18px;
  background: transparent;
  border: none;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  div {
    width: 25px;
    height: 3px;
    border-radius: 3px;
    background-color: ${({ color }) => color};
  }
`;

const Burger = ({ color, onClick }) => {
  return (
    <Container color={color} onClick={onClick}>
      <div />
      <div />
      <div />
    </Container>
  );
};

Burger.propTypes = {
  color: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Burger;
