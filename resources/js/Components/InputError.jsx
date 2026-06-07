import styled from "styled-components";
import { colorsPallete } from "@/global-styles";

const StyledError = styled.p`
  margin-top: 6px;
  color: ${colorsPallete.error};
  font-size: 0.85rem;
`;

export default function InputError({ message, className = '', ...props }) {
    return message ? (
        <StyledError
            {...props}
            className={className}
        >
            {message}
        </StyledError>
    ) : null;
}
