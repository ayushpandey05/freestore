import { CSSProperties } from "react";

interface FlatListProps {
  children?: any;
  style?: CSSProperties;
  contentContainerStyle?: CSSProperties;
  horizontal?: boolean;
  data: any;
  renderItem: ({ item, index }: { item: any; index: number }) => any;
}

export type { FlatListProps };
