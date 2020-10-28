import React from "react";
import Button from "./button";

export const basicButton = () => <Button>Basic button</Button>;

const buttonClicked = (e) => {
  e.preventDefault();
  alert("hello");
};

export const functionButton = () => (
  <Button onClick={buttonClicked} variant="secondary">
    Function button
  </Button>
);

export const linkedButton = () => <Button href="/route">Linked button</Button>;

export default {
  component: Button,
  title: "Button",
};
