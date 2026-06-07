import styled from "styled-components";
import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';
import { colorsPallete } from '@/global-styles';

const StyledInput = styled.input`
  display: block;
  width: 100%;
  margin-top: 6px;
  padding: 10px 12px;
  border-radius: 8px;
  border: 1px solid ${colorsPallete.border};
  background-color: rgba(0, 0, 0, 0.25);
  color: ${colorsPallete.white};
  font-size: 0.95rem;
  font-family: inherit;
  outline: none;
  transition: border-color 0.15s ease, box-shadow 0.15s ease;

  &::placeholder {
    color: rgba(255, 255, 255, 0.4);
  }

  &:focus {
    border-color: ${colorsPallete.lighterPurple};
    box-shadow: 0 0 0 3px rgba(116, 113, 201, 0.25);
  }
`;

export default forwardRef(function TextInput(
    { type = 'text', className = '', isFocused = false, ...props },
    ref,
) {
    const localRef = useRef(null);

    useImperativeHandle(ref, () => ({
        focus: () => localRef.current?.focus(),
    }));

    useEffect(() => {
        if (isFocused) {
            localRef.current?.focus();
        }
    }, [isFocused]);

    return (
        <StyledInput
            {...props}
            type={type}
            className={className}
            ref={localRef}
        />
    );
});
