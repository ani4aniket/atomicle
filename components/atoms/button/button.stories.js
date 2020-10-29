import React from "react";
import { withDesign } from "storybook-addon-designs";
import Button from "./button";

const buttonClicked = (e) => {
  e.preventDefault();
  alert("Hello");
};

export const basicButton = () => <Button>Basic button</Button>;
export const secondaryButton = () => (
  <Button variant="secondary">Secondary button</Button>
);
export const tertiaryButton = () => (
  <Button variant="tertiary">Tertiary button</Button>
);
export const iconButton = () => <Button icon="user">Icon button</Button>;
export const functionButton = () => (
  <Button onClick={buttonClicked}>Function button</Button>
);
export const linkedButton = () => <Button href="/route">Linked button</Button>;

basicButton.story = {
  name: "Basic Button",
  parameters: {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/5DExbYWfiOx8UumMD2cmAr/P-Pine-UI-Framework?node-id=12%3A71",
    },
  },
};

export default {
  component: Button,
  title: "Button",
  decorators: [withDesign],
};
