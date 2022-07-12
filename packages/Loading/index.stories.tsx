import React from "react";
import Loading from "./index";
import { boolean, number, select, text } from "@storybook/addon-knobs";
import "../index.less";

export default {
  title: "Loading"
};

export const TestLoading = () => {
  return (
    <div className="box_wrap">
      <Loading
        type={select(
          "type",
          {
            loading_blur: "loading_blur",
            loading_shrink: "loading_shrink",
            loading_lol: "loading_lol",
            loading_half: "loading_half",
            loading_circle: "loading_circle",
            loading_dot: "loading_dot"
          },
          "loading_blur",
          "loading"
        )}
        content={text("content", "Loading", "loading")}
        color={text("color", "#fff", "loading")}
        fontSize={text("fontSize", "1.5rem", "loading")}
      />
    </div>
  );
};
