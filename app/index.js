import { StyleSheet, Text, View } from "react-native";

export default function Page() {
  return (
    <View className="flex-1 items-center p-6">
      <View style={styles.main}>
        <Text className="text-2xl text-red-800">Hello World</Text>
        <Text style={styles.subtitle}>Olaolu's first native app.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
