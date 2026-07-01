// C:\VybrazeDemo\src\ui\breadcrumb.tsx
import { ChevronRight, MoreHorizontal } from "@/lib/icons";
import React from "react";
import {
  GestureResponderEvent,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";

/**
 * Enkel lokal cn helper for å kombinere styles.
 * Returnerer en array som kan kastes til StyleProp ved brukspunktet.
 * Hvis dere har en felles cn i prosjektet, bytt denne ut med import.
 */
function cn(...args: any[]) {
  return args.flat().filter(Boolean);
}

type Crumb = {
  label: string;
  onPress?: (e: GestureResponderEvent) => void;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
};

type BreadcrumbsProps = {
  crumbs: Crumb[];
  style?: StyleProp<ViewStyle>;
};

export default function Breadcrumbs({ crumbs, style }: BreadcrumbsProps) {
  return (
    <View style={cn(styles.container, style) as StyleProp<ViewStyle>}>
      {crumbs.map((crumb, idx) => {
        const isLast = idx === crumbs.length - 1;
        const crumbViewStyle = cn(styles.crumbContainer, crumb.style) as StyleProp<ViewStyle>;
        const crumbTextStyle = cn(styles.crumbText, crumb.textStyle) as StyleProp<TextStyle>;

        return (
          <React.Fragment key={idx}>
            <TouchableOpacity
              onPress={crumb.onPress}
              accessibilityRole="button"
              style={crumbViewStyle}
              disabled={!crumb.onPress}
            >
              {isLast ? (
                <Text
                  style={cn(styles.crumbTextCurrent, crumb.textStyle) as StyleProp<TextStyle>}
                  accessibilityState={{ selected: true }}
                >
                  {crumb.label}
                </Text>
              ) : (
                <Text style={crumbTextStyle}>{crumb.label}</Text>
              )}
            </TouchableOpacity>

            {!isLast && (
              <View style={styles.separator}>
                <ChevronRight size={16} color="#666" />
              </View>
            )}
          </React.Fragment>
        );
      })}

      <View style={styles.moreButton}>
        <MoreHorizontal size={20} color="#666" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  } as ViewStyle,
  crumbContainer: {
    paddingHorizontal: 8,
    paddingVertical: 6,
  } as ViewStyle,
  crumbText: {
    fontSize: 14,
    color: "#333",
  } as TextStyle,
  crumbTextCurrent: {
    fontSize: 14,
    fontWeight: "700",
    color: "#000",
  } as TextStyle,
  separator: {
    marginHorizontal: 4,
  } as ViewStyle,
  moreButton: {
    marginLeft: 8,
  } as ViewStyle,
});
