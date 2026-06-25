// src/lib/icons.tsx
import React from 'react';
import { Feather } from '@expo/vector-icons';
import { ViewProps } from 'react-native';

type IconProps = {
  width?: number;
  height?: number;
  color?: string;
} & ViewProps;

export const ChevronRight = ({ width = 16, height = 16, color = '#000', ...rest }: IconProps) => (
  <Feather name='chevron-right' size={Math.max(width, height)} color={color} {...rest} />
);

export const MoreHorizontal = ({ width = 16, height = 16, color = '#000', ...rest }: IconProps) => (
  <Feather name='more-horizontal' size={Math.max(width, height)} color={color} {...rest} />
);

export default { ChevronRight, MoreHorizontal };
