import React from "react";
import TitleUnfold from "./index";
import { boolean, number, select, text } from "@storybook/addon-knobs";

export default {
  title: "TitleUnfold"
};

export const TestTitleUnfold = () => {
  return (
    <TitleUnfold
      type={select(
        "type",
        { reveal: "reveal", gleaming: "gleaming" },
        "reveal",
        "titleUnfold"
      )}
      content={text("content", "Before winter comes", "titleUnfold")}
      delay={number("delay", 0.3, {}, "titleUnfold")}
      backgroundColor={text("backgroundColor", "#222", "titleUnfold")}
      height={text("height", "100vh", "titleUnfold")}
    />
  );
};
