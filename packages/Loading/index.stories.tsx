import React from "react";
import Loading from "./index";
import { boolean, number, select, text } from "@storybook/addon-knobs";

export default {
  title: "Loading"
};

export const TestLoading = () => {
  return (
    <Loading
      type={select(
        "type",
        { loading_blur: "loading_blur", loading_shrink: "loading_shrink" },
        "loading_blur",
        "loading"
      )}
      content={text("content", "Loading", "loading")}
      height={text("height", "100vh", "loading")}
      backgroundColor={text("backgroundColor", "#000", "loading")}
      color={text("color", "#fff", "loading")}
      fontSize={text("fontSize", "1.5rem", "loading")}
    />
  );
};
