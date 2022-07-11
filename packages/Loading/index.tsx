import React from "react";
import "./index.less";
import { textTypeArr, iconTypeArr } from "./config";

export interface LoadingProps {
  type?:
    | "loading_blur"
    | "loading_shrink"
    | "loading_lol"
    | "loading_half"
    | "loading_circle"
    | "loading_dot";
  content?: string;
  backgroundColor?: string;
  height?: number | string;
  color?: string;
  fontSize?: string;
}

const Loading: React.FC<LoadingProps> = ({
  content = "Loading",
  backgroundColor = "#000",
  height = "100vh",
  color = "#fff",
  fontSize = "1.5rem",
  type = "loading_blur"
}) => {
  return (
    <div className="loading_wrap" style={{ backgroundColor, height }}>
      {textTypeArr.includes(type) && (
        <div className={type} style={{ color, fontSize }}>
          {content.split("").map((letter, i) => (
            <span key={i} style={{ animationDelay: `${i / 5}s` }}>
              {letter}
            </span>
          ))}
        </div>
      )}
      {iconTypeArr.includes(type) && <div className={type}>Loading</div>}
    </div>
  );
};
export default Loading;
