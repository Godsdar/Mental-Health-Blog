import styled, { css } from "styled-components";

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

const StyledDangerButton = styled.button`
  ${baseButton}
  background-color: #c0392b;
  color: #ffffff;

  &:hover:not(:disabled) {
    background-color: #a93226;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(192, 57, 43, 0.4);
  }
`;

export default function DangerButton({
    className = '',
    disabled,
    children,
    ...props
}) {
    return (
        <StyledDangerButton
            {...props}
            className={className}
            disabled={disabled}
        >
            {children}
        </StyledDangerButton>
    );
}
