import React from "react";
import "./index.less";

export interface TitleUnFoldProps {
  type?: "reveal" | "gleaming";
  content?: string;
  delay?: number;
}

const TitleUnfold: React.FC<TitleUnFoldProps> = ({
  type = "reveal",
  content = "Before winter comes",
  delay = 0.3
}) => {
  const random = (min: number, max: number) =>
    min + Math.floor(Math.random() * (max - min + 1));
  const typeStyle = (key, index) => {
    switch (key) {
      case "reveal":
        return (
          delay +
          Math.abs(
            index - content.split("").filter(e => e !== " ").length / 2
          ) *
            0.1
        );
      case "gleaming":
        return random(0.001, 1);

      default:
        break;
    }
  };
  return (
    <div className={type}>
      {content?.split("").map((letter, i) => {
        return (
          <span
            key={i}
            style={{
              animationDelay: `${typeStyle(type, i)}s`
            }}
          >
            {letter}
          </span>
        );
      })}
    </div>
  );
};
export default TitleUnfold;
