import styled, { css } from "styled-components";
import { colorsPallete } from "@/global-styles";

const baseButton = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 18px;
  border-radius: 8px;
  border: 1px solid ${colorsPallete.border};
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

const StyledSecondaryButton = styled.button`
  ${baseButton}
  background-color: transparent;
  color: ${colorsPallete.fontStrong};

  &:hover:not(:disabled) {
    background-color: rgba(255, 255, 255, 0.06);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(116, 113, 201, 0.3);
  }
`;

export default function SecondaryButton({
    type = 'button',
    className = '',
    disabled,
    children,
    ...props
}) {
    return (
        <StyledSecondaryButton
            {...props}
            type={type}
            className={className}
            disabled={disabled}
        >
            {children}
        </StyledSecondaryButton>
    );
}
