"use client";

import styled, { css } from "styled-components";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  [x: string]: any;
}

const StyledButton = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  font-size: 1rem;
  line-height: 1.5;
  font-weight: 700;
  width: fit-content;
  height: fit-content;
  white-space: nowrap;

  ${({ variant }) =>
    variant === "primary"
      ? css`
          background-color: #1e40af;
          color: #fff;
          &:hover {
            background-color: #2f55cf;
          }
        `
      : css`
          background-color: #fff;
          color: #1e40af;
          &:hover {
            background-color: #f1f5f9;
          }
        `}
`;

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  const { variant = "primary" } = props;
  return (
    <StyledButton {...props} className="shadow-md" variant={variant}>
      {children}
    </StyledButton>
  );
};

export default Button;
