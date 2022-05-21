import React, { CSSProperties } from "react";
import { defaultStyles } from "../utility";
import { ScrollViewProps } from "./index.type";

const ScrollView: React.FC<ScrollViewProps> = ({
  style,
  contentContainerStyle,
  children = void 0,
  horizontal,
  ...restProps
}) => {
  const styles: CSSProperties = {
    ...defaultStyles,
    ...style,
    overflowX: !horizontal ? "hidden" : "auto",
    overflowY: horizontal ? "hidden" : "auto",
    // [horizontal ? "max-width" : "max-height"]: "100%",
  };
  const contentContainerStyles: CSSProperties = {
    ...defaultStyles,
    ...style,
    flexDirection: horizontal ? "row" : "column",
  };

  return (
      <div style={styles}>
        <div style={contentContainerStyles}>{children}</div>
      </div>
  );
};

export default ScrollView;
