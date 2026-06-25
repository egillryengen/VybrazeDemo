// C:\VybrazeDemo\src\app\pages\Home.tsx
import Breadcrumb from "@/ui/breadcrumb";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Home() {
  const items = [
    { key: "home", label: "Home", onPress: () => console.log("Gå til Home") },
    { key: "products", label: "Products", onPress: () => console.log("Gå til Products") },
    { key: "shoes", label: "Shoes", onPress: () => console.log("Gå til Shoes") },
    { key: "nike", label: "Nike", isCurrent: true },
  ];

  return (
    <View style={styles.container}>
      <Breadcrumb items={items} maxVisible={5} style={styles.breadcrumb} />
      <Text style={styles.title}>Dummy Home</Text>
      <Text style={styles.subtitle}>Denne siden er en isolert testside for emulatoren.</Text>
      <Button title="Logg test" onPress={() => console.log("Home loaded")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 48,
    paddingHorizontal: 16,
  },
  breadcrumb: {
    marginBottom: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: "#444",
    marginBottom: 16,
  },
});
