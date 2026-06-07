import styled from "styled-components";
import { colorsPallete } from "@/global-styles";

const StyledItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 24px;
  background-color: ${colorsPallete.purple};
  border-radius: 10px;
  min-width: 200px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
`;

const Title = styled.h3`
  margin: 0;
  font-size: 0.95rem;
  font-weight: 500;
  color: ${colorsPallete.font};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const Number = styled.h2`
  margin: 0;
  font-size: 2.5rem;
  font-weight: 700;
  color: ${colorsPallete.white};
  line-height: 1.1;
`;

const Description = styled.p`
  margin: 0;
  color: ${colorsPallete.font};
  font-size: 0.9rem;
  line-height: 1.4;
`;

function Item ({ title, number, description }) {
  return (
    <StyledItem>
      <Title>{title}</Title>
      <Number>{number}</Number>
      <Description>{description}</Description>
    </StyledItem>
  );
}

export default Item;
