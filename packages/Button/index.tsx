import React, { useState } from "react";
import "./index.less";
import classnames from "classnames";

export interface ButtonProps {
  onClick?: React.MouseEventHandler<HTMLElement>;
}

const statusMap: Record<string, string> = {
  initial: "login",
  begin: "login loading",
  success: "login loading success"
};

const Button: React.FC<ButtonProps> = ({ onClick }) => {
  const [status, setStatus] = useState<"initial" | "begin" | "success">(
    "initial"
  );

  const handleClick = async (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>
  ) => {
    await setStatus("begin");
    try {
      await (
        onClick as React.MouseEventHandler<
          HTMLButtonElement | HTMLAnchorElement
        >
      )?.(e);
      setStatus("success");
    } catch {}
  };

  return (
    <button className={classnames(statusMap[status])} onClick={handleClick}>
      <span>login</span>
      <div className="loader">
        <div className="line-scale-pulse-out-rapid">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <svg
        className="tick"
        width="30px"
        height="30px"
        stroke="white"
        fill="none"
      >
        <polyline points="2,10 12,18, 28,2"></polyline>
      </svg>
    </button>
  );
};
export default Button;
