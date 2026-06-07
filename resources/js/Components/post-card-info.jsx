import styled from "styled-components";

export const StyledPostCardInfo = styled.div`
  padding: 12px;
`;

export const CardPostImage = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 100px;
  background-color: #7471c9;
  background-image: url(${props => props.$imageSrc});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 10px 10px 0 0;
`;

export const CardPostText = styled.div`
  margin: 12px 0 8px 0;
  line-height: 1.4em;
`;

export const CardTitle = styled.h2`
  color: inherit;
`;

export const CardPostLink = styled.a`
  text-decoration: none;
  color: #eee;
  margin-top: 30px;
  line-height: 1.4em;
`;

export function PostCardInfo ({ titleText, subtitleText }) {
  return (
    <StyledPostCardInfo>
      <CardTitle>{titleText}</CardTitle>
      <CardPostText>{subtitleText}</CardPostText>
      <CardPostLink href="#">Learn more</CardPostLink>
    </StyledPostCardInfo>
  );
}
