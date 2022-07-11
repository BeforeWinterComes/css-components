import React from "react";
import TypeWriter from "./index";
import { boolean, number, select, text } from "@storybook/addon-knobs";

export default {
  title: "TypeWriter"
};

export const TestTypeWriter = () => {
  return (
    <TypeWriter
      content={text("content", "Before winter comes", "typeWriter")}
      delay={number("delay", 0.05, {}, "typeWriter")}
      backgroundColor={text("backgroundColor", "#222", "typeWriter")}
      height={text("height", "100vh", "typeWriter")}
    />
  );
};
