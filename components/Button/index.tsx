import React from 'react';
import styled, { css } from 'styled-components';

export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  bgColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({
  primary = false,
  size = 'medium',
  bgColor,
  label,
  ...props
}) => {
  return (
    <ButtonWrap
      type="button"
      primary={primary}
      style={{ backgroundColor: bgColor }}
      size={size}
      {...props}
    >
      {label}
    </ButtonWrap>
  );
};

interface buttonProps {
  primary: boolean;
  size: string;
}

const sizeProps = (size: string) => {
  switch (size) {
    case 'small':
      return 'font-size: 12px; padding: 10px 16px;';
    case 'medium':
      return 'font-size: 14px; padding: 11px 20px;';
    case 'large':
      return 'font-size: 16px;  padding: 12px 24px;';
    default:
      return '';
  }
};

const ButtonWrap = styled.button<buttonProps>`
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;

  color: #333;
  background-color: transparent;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;

  ${(props) =>
    props.primary &&
    css`
      color: white;
      background-color: #1ea7fd;
    `}

  ${({ size }) => sizeProps(size)}
`;
