/**
 * 打字机效果
 */

import React from "react";
import "./index.less";

export interface TypeWriterProps {
  content?: string;
  delay?: number;
  backgroundColor?: string;
  height?: number | string;
}

const TypeWriter: React.FC<TypeWriterProps> = ({
  content = "Before winter comes",
  delay = 0.05,
  backgroundColor = "#222",
  height = "100vh"
}) => {
  return (
    <div className="type_writer_wrap" style={{ backgroundColor, height }}>
      <p className="glowIn">
        {content?.split("").map((item, i) => {
          return (
            <span key={i} style={{ animationDelay: `${i * delay}s` }}>
              {item}
            </span>
          );
        })}
      </p>
    </div>
  );
};
export default TypeWriter;
