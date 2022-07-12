import React from "react";
import Button from "./index";
import { boolean, number, select, text } from "@storybook/addon-knobs";
import "../index.less";

export default {
  title: "Button"
};

export const TestButton = () => {
  // 模拟请求时间
  const sleep = (time: number) =>
    new Promise(resolve => setTimeout(resolve, time));
  return (
    <div className="box_wrap">
      <Button onClick={e => sleep(3000)} />
    </div>
  );
};
