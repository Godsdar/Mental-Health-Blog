import styled from "styled-components";
import { colorsPallete } from "@/global-styles";

const StyledLabel = styled.label`
  display: block;
  margin-bottom: 4px;
  color: ${colorsPallete.fontStrong};
  font-size: 0.9rem;
  font-weight: 500;
`;

export default function InputLabel({
    value,
    className = '',
    children,
    ...props
}) {
    return (
        <StyledLabel
            {...props}
            className={className}
        >
            {value ? value : children}
        </StyledLabel>
    );
}
