import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px;
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-right: 20px;
`;

const InfoContainer = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
`;

export const Thumbnail = styled.img`
  max-width: 100%;
  height: auto;
`;

export const Title = styled.h1`
  font-family: Montserrat;
  font-size: 24px;
  text-transform: capitalize;
  padding-bottom: 16px;
`;

export const Paragrapgh = styled.p`
  font-family: Montserrat;
`;

const Article = ({ title, description, thumbnail }) => {
  const [urlError, setUrlError] = React.useState(null);
  const hasThumbnail = thumbnail && !urlError;
  return (
    <Container>
      {hasThumbnail && (
        <ImageContainer>
          <Thumbnail src={thumbnail} onError={setUrlError} alt="thumbnail" />
        </ImageContainer>
      )}

      <InfoContainer>
        <Title>{title}</Title>
        <Paragrapgh>{description}</Paragrapgh>
      </InfoContainer>
    </Container>
  );
};

Article.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  thumbnail: PropTypes.string
};

Article.defaultProps = {
  thumbnail: null
};

export default Article;
