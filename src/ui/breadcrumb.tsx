// C:\VybrazeDemo\src\ui\breadcrumb.tsx
import { ChevronRight, MoreHorizontal } from "@/lib/icons";
import { cn } from "@/ui/utils";
import {
    GestureResponderEvent,
    StyleSheet,
    Text,
    TextStyle,
    TouchableOpacity,
    View,
    ViewStyle,
} from "react-native";

type Crumb = {
  key?: string;
  label: string;
  onPress?: (e?: GestureResponderEvent) => void;
  /** Hvis true, vises som aktiv/aktuell side (ikke trykkbar) */
  isCurrent?: boolean;
  /** Valgfri ekstra stil for crumb container */
  style?: ViewStyle;
  /** Valgfri ekstra stil for crumb tekst */
  textStyle?: TextStyle;
};

type BreadcrumbProps = {
  items: Crumb[];
  /** Maks antall crumbs før vi viser "more" (vises som første element) */
  maxVisible?: number;
  /** Ekstra stil på wrapper */
  style?: ViewStyle;
};

/**
 * Enkel, tilgjengelig Breadcrumb-komponent for RN.
 * - Ingen routing eller Link-avhengighet.
 * - Bruker cn(...) for å slå sammen StyleSheet-objekter.
 */
export default function Breadcrumb({
  items,
  maxVisible = 5,
  style,
}: BreadcrumbProps) {
  if (!items || items.length === 0) return null;

  // Hvis for mange items, vis første, "more" og de siste N-2
  const shouldCollapse = items.length > maxVisible;
  let visible: Crumb[] = items;

  if (shouldCollapse) {
    const lastCount = maxVisible - 2; // f.eks. 5 -> vis 1, more, 3 siste
    const first = items[0];
    const last = items.slice(-lastCount);
    visible = [first, { key: "__more__", label: "...", onPress: undefined }, ...last];
  }

  return (
    <View style={cn(styles.wrapper, style)}>
      {visible.map((crumb, idx) => {
        const isMore = crumb.key === "__more__" || crumb.label === "...";
        const isLast = idx === visible.length - 1;
        return (
          <View key={crumb.key ?? `${idx}-${crumb.label}`} style={styles.crumbRow}>
            {isMore ? (
              <View style={styles.moreContainer}>
                <MoreHorizontal width={16} height={16} color="#666" />
              </View>
            ) : crumb.isCurrent || isLast ? (
              <View style={cn(styles.crumbContainer, crumb.style)}>
                <Text style={cn(styles.crumbTextCurrent, crumb.textStyle)} accessibilityState={{ selected: true }}>
                  {crumb.label}
                </Text>
              </View>
            ) : (
              <TouchableOpacity
                style={cn(styles.crumbContainer, crumb.style)}
                onPress={crumb.onPress}
                activeOpacity={0.7}
                accessibilityRole="button"
                accessibilityLabel={`Gå til ${crumb.label}`}
              >
                <Text style={cn(styles.crumbText, crumb.textStyle)}>{crumb.label}</Text>
              </TouchableOpacity>
            )}

            {/* Separator: vis ikke etter siste */}
            {!isLast && <View style={styles.separator}><ChevronRight width={14} height={14} color="#999" /></View>}
          </View>
        );
      })}
    </View>
  );
}

/* Styles */
const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: "transparent",
  },
  crumbRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  crumbContainer: {
    paddingVertical: 6,
    paddingHorizontal: 8,
    borderRadius: 6,
  },
  moreContainer: {
    paddingVertical: 6,
    paddingHorizontal: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  crumbText: {
    fontSize: 14,
    color: "#007AFF",
  },
  crumbTextCurrent: {
    fontSize: 14,
    color: "#111",
    fontWeight: "600",
  },
  separator: {
    marginHorizontal: 6,
    justifyContent: "center",
    alignItems: "center",
  },
});
