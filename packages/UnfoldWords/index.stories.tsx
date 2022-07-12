import React from "react";
import UnfoldWords from "./index";
import { boolean, number, select, text } from "@storybook/addon-knobs";
import "../index.less";

export default {
  title: "UnfoldWords"
};

export const TestUnfoldWords = () => {
  return (
    <div className="box_wrap">
      <UnfoldWords
        content={text("content", "Before Winter Comes", "unfoldWords")}
      />
    </div>
  );
};
