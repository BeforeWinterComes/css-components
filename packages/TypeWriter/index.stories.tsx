import React from "react";
import TypeWriter from "./index";
import { boolean, number, select, text } from "@storybook/addon-knobs";
import "./index.less";

export default {
  title: "TypeWriter"
};

export const TestTypeWriter = () => {
  return (
    <div className="type_writer_wrap">
      <TypeWriter
        content={text("content", "Before winter comes", "typeWriter")}
        delay={number("delay", 0.05, {}, "typeWriter")}
      />
    </div>
  );
};
