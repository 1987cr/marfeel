import React from "react";
import styled from "styled-components";
import Article from "components/Article";
import { STATUS } from "hooks/useSection";
import { useSection } from "hooks";

const OuterContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const InnerContainer = styled.div`
  max-width: 600px;
`;

const ArticleList = () => {
  const [{ selected, articles, status }, { fetchSection }] = useSection();

  React.useEffect(() => {
    const fetchArticles = async () => {
      await fetchSection(selected);
    };

    if (!articles[selected].length && status !== STATUS.LOADING)
      fetchArticles();
  }, [fetchSection, articles, selected, status]);

  if (status === STATUS.ERROR)
    return <p>Something went wrong, try again in a few minutes. </p>;
  if (status === STATUS.LOADING) return <p>Loading...</p>;

  return (
    <OuterContainer>
      <InnerContainer>
        {articles[selected].map(
          ({ id, title, description, thumbnail }, index) => (
            <div key={id}>
              <Article
                title={title}
                description={description}
                thumbnail={thumbnail}
              />
              {index < articles[selected].length - 1 && <hr />}
            </div>
          )
        )}
      </InnerContainer>
    </OuterContainer>
  );
};

export default ArticleList;
