import { func, node, string } from "prop-types";
import React from "react";
import StyledButton, { StyledLinkButton } from "./button.styles";

const Button = ({ children, href, onClick, variant }) => {
  if (!href)
    return (
      <StyledButton onClick={onClick} variant={variant}>
        {children}
      </StyledButton>
    );
  return (
    <StyledLinkButton href={href} variant={variant}>
      {children}
    </StyledLinkButton>
  );
};

Button.propTypes = {
  children: node.isRequired,
  href: string,
  onClick: func,
  variant: string,
};

Button.defaultProps = {
  variant: "primary",
};

export default Button;
