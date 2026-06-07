import styled from "styled-components";
import { colorsPallete } from "@/global-styles";

export const Brand = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 700;
  color: ${colorsPallete.white};
  letter-spacing: 0.08em;
  text-transform: uppercase;

  & > a {
    color: inherit;
    text-decoration: none;
  }

  & > a:hover {
    opacity: 0.85;
  }

  & > img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
`;
