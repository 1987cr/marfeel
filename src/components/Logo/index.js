import React from "react";
import styled from "styled-components";
import useConfig from "hooks/useConfig";

const Image = styled.img`
  width: ${({ config: { width } }) => width}px;
  height: ${({ config: { height } }) => height}px;
`;

const Logo = () => {
  const config = useConfig();
  return <Image src={config.logo.url} config={config.logo} alt="logo" />;
};

export default Logo;
