import React from "react";
import styled from "styled-components";
import Logo from "components/Logo";
import SectionMenu from "components/SectionMenu";
import Burger from "components/Burger";
import { useTopOffset, useConfig } from "hooks";
import { black, white } from "styles/colors";

const TOP_ROW_HEIGHT = 80;
const BOTTOM_ROW_HEIGHT = 40;
const HEADER_VISIBILITY_THRESHOLD = 800;
const SECTION_MENU_VISIBILITY_THRESHOLD = 400;

const Row = styled.div`
  align-items: center;
  justify-content: center;
`;

const TopRow = styled(Row)`
  display: ${({ visible }) => (visible ? "flex" : "none")};
  height: ${TOP_ROW_HEIGHT}px;
`;

const BottomRow = styled(Row)`
  display: ${({ visible }) => (visible ? "flex" : "none")};
  height: ${BOTTOM_ROW_HEIGHT}px;
`;

const Container = styled.header`
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: column;
  background: ${({ config: { background } }) => background};
  width: 100%;
`;

const PushContent = styled.div`
  margin-top: ${TOP_ROW_HEIGHT + BOTTOM_ROW_HEIGHT}px;
`;

const BurgerContainer = styled.div`
  position: absolute;
  left: 20px;
  top: 17px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  border-radius: 40px;
  background: ${({ floating }) => (floating ? white : "transparent")};
  ${({ floating }) =>
    floating ? "box-shadow: 0px 0px 4px 0px rgba(0,0,0,0.30);" : ""}
`;

const Header = () => {
  const [sectionMenuVisible, setSectionMenuVisible] = React.useState(true);
  const [headerVisible, setHeaderVisible] = React.useState(true);

  const config = useConfig();
  const topOffset = useTopOffset();

  React.useEffect(() => {
    if (topOffset >= SECTION_MENU_VISIBILITY_THRESHOLD && sectionMenuVisible)
      setSectionMenuVisible(false);
    if (topOffset < SECTION_MENU_VISIBILITY_THRESHOLD && !sectionMenuVisible)
      setSectionMenuVisible(true);
    if (topOffset >= HEADER_VISIBILITY_THRESHOLD && headerVisible)
      setHeaderVisible(false);
    if (topOffset < HEADER_VISIBILITY_THRESHOLD && !headerVisible)
      setHeaderVisible(true);
  }, [headerVisible, sectionMenuVisible, topOffset]);

  return (
    <>
      <Container config={config.header}>
        <BurgerContainer floating={!headerVisible}>
          <Burger
            color={headerVisible ? config.burger.color : black}
            onClick={() => {}}
          />
        </BurgerContainer>
        <TopRow visible={headerVisible}>
          <Logo />
        </TopRow>
        <BottomRow visible={sectionMenuVisible}>
          <SectionMenu />
        </BottomRow>
      </Container>
      <PushContent />
    </>
  );
};

export default Header;
