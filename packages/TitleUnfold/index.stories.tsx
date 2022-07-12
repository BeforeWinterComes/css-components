import React from "react";
import TitleUnfold from "./index";
import { boolean, number, select, text } from "@storybook/addon-knobs";
import "../index.less";

export default {
  title: "TitleUnfold"
};

export const TestTitleUnfold = () => {
  return (
    <div className="box_wrap">
      <TitleUnfold
        type={select(
          "type",
          { reveal: "reveal", gleaming: "gleaming" },
          "reveal",
          "titleUnfold"
        )}
        content={text("content", "Before winter comes", "titleUnfold")}
        delay={number("delay", 0.3, {}, "titleUnfold")}
      />
    </div>
  );
};
