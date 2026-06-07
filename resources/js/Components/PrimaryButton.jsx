import styled, { css } from "styled-components";
import { colorsPallete } from "@/global-styles";

const baseButton = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 18px;
  border-radius: 8px;
  border: 1px solid transparent;
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-family: inherit;
  cursor: pointer;
  transition: background-color 0.15s ease, transform 0.05s ease, opacity 0.15s ease;

  &:active {
    transform: translateY(1px);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const StyledPrimaryButton = styled.button`
  ${baseButton}
  background-color: ${colorsPallete.lighterPurple};
  color: ${colorsPallete.white};

  &:hover:not(:disabled) {
    background-color: ${colorsPallete.purple};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(116, 113, 201, 0.4);
  }
`;

export default function PrimaryButton({
    className = '',
    disabled,
    children,
    ...props
}) {
    return (
        <StyledPrimaryButton
            {...props}
            className={className}
            disabled={disabled}
        >
            {children}
        </StyledPrimaryButton>
    );
}
