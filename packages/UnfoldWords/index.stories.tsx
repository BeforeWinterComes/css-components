import React from "react";
import UnfoldWords from "./index";
import { boolean, number, select, text } from "@storybook/addon-knobs";

export default {
  title: "UnfoldWords"
};

export const TestUnfoldWords = () => {
  return (
    <UnfoldWords
      content={text("content", "Before Winter Comes", "unfoldWords")}
      backgroundColor={text("backgroundColor", "#222", "unfoldWords")}
      height={text("height", "100vh", "unfoldWords")}
    />
  );
};
