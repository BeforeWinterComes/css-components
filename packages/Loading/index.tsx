import React from "react";
import "./index.less";

export interface LoadingProps {
  type?: "loading_blur" | "loading_shrink";
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
      <div className={type} style={{ color, fontSize }}>
        {content.split("").map((letter, i) => (
          <span style={{ animationDelay: `${i / 5}s` }}>{letter}</span>
        ))}
      </div>
    </div>
  );
};
export default Loading;
