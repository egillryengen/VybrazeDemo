import { StyleProp, ViewStyle, TextStyle, ImageStyle } from 'react-native';

type RNStyle = ViewStyle | TextStyle | ImageStyle;
type StyleInput = StyleProp<RNStyle> | Array<StyleProp<RNStyle>> | undefined;

/**
 * Enkel cn som returnerer en array eller enkelt style for RN.
 * Bruk: style={cn(styles.foo, props.style)}
 */
export function cn(...args: StyleInput[]) {
  const flattened = args.flatMap(a => (a ? (Array.isArray(a) ? a : [a]) : []));
  return flattened.length === 0 ? undefined : flattened;
}
export default cn;
