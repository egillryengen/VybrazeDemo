// C:\VybrazeDemo\src\lib\icons.tsx
import { Feather } from "@expo/vector-icons";
import React from "react";
import type { StyleProp, TextStyle } from "react-native";

/**
 * Vi eksponerer kun de props vi trenger til Feather og sørger for at
 * `style` som sendes til Feather har riktig TextStyle-typing.
 */
type FeatherProps = React.ComponentProps<typeof Feather>;

type IconWrapperProps = {
  size?: number;
  color?: string;
  style?: StyleProp<TextStyle>;
} & Omit<FeatherProps, "name" | "style" | "size" | "color">;

export const ChevronRight = (props: IconWrapperProps) => {
  const { size = 16, color = "#000", style, ...rest } = props;
  const restProps = rest as Omit<FeatherProps, "name" | "style">;
  return <Feather name="chevron-right" size={size} color={color} style={style} {...restProps} />;
};

export const MoreHorizontal = (props: IconWrapperProps) => {
  const { size = 16, color = "#000", style, ...rest } = props;
  const restProps = rest as Omit<FeatherProps, "name" | "style">;
  return <Feather name="more-horizontal" size={size} color={color} style={style} {...restProps} />;
};
