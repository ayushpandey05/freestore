import { CSSProperties } from "react";

interface TouchProps {
  style?: CSSProperties;
  children?: any;
  onPress?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export type { TouchProps };
