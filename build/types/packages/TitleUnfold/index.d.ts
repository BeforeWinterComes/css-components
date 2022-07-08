import React from "react";
import "./index.less";
export interface TitleUnFoldProps {
    content?: string;
    delay?: number;
    backgroundColor?: string;
    height?: number | string;
}
declare const TitleUnfold: React.FC<TitleUnFoldProps>;
export default TitleUnfold;
