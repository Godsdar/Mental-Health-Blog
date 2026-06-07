import styled from 'styled-components';
import { CardPostImage, PostCardInfo } from './post-card-info';
import { colorsPallete } from './global-styles';

const StyledPostCard = styled.div`
  width: 400px;
  background-color: ${colorsPallete.purple};
  border-radius: 10px;
`;


function PostCard ({ titleText, subtitleText, imageSrc }) {
  return (
      <StyledPostCard>
        <CardPostImage $imageSrc={imageSrc}></CardPostImage>
        <PostCardInfo
        titleText={titleText}
        subtitleText={subtitleText}></PostCardInfo>
      </StyledPostCard>
    );
}

export default PostCard;