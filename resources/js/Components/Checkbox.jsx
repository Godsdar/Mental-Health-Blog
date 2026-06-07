import styled from "styled-components";
import { colorsPallete } from "@/global-styles";

const StyledCheckbox = styled.input`
  width: 16px;
  height: 16px;
  border-radius: 4px;
  border: 1px solid ${colorsPallete.border};
  accent-color: ${colorsPallete.lighterPurple};
  cursor: pointer;
`;

export default function Checkbox({ className = '', ...props }) {
    return (
        <StyledCheckbox
            {...props}
            type="checkbox"
            className={className}
        />
    );
}
