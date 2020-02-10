import React from "react";
import { ConfigProvider } from "hooks/useConfig";
import { SectionProvider } from "hooks/useSection";
import GlobalStyles from "styles/GlobalStyles";
import Header from "components/Header";
import ArticleList from "components/ArticleList";

const App = () => (
  <>
    <GlobalStyles />
    <SectionProvider>
      <ConfigProvider>
        <Header />
      </ConfigProvider>
      <ArticleList />
    </SectionProvider>
  </>
);

export default App;
