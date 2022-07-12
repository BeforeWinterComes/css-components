import React from "react";
import "./index.less";

export interface UnfoldWordsProps {
  content?: string;
  backgroundColor?: string;
  height?: number | string;
}

const UnfoldWords: React.FC<UnfoldWordsProps> = ({
  content = "Before Winter Comes"
}) => {
  return (
    <abbr data-title={content}>
      {content?.split(" ")?.map((item, i) => {
        return item?.split("")?.map((item_2, index) => (
          <span
            className={item.indexOf(item_2) === 0 ? "initial" : "hidden"}
            key={index}
          >
            {item_2}
          </span>
        ));
      })}
    </abbr>
  );
};
export default UnfoldWords;
