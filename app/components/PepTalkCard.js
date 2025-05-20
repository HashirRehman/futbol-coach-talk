import { View, Text, StyleSheet } from "react-native";

export default function PepTalkCard({ text }) {
  return (
    <View style={styles.card}>
      <Text style={styles.label}>Pep Talk:</Text>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#f0f8ff",
    padding: 16,
    borderRadius: 10,
    marginTop: 20,
  },
  label: {
    fontWeight: "bold",
    marginBottom: 8,
    fontSize: 16,
  },
  text: {
    fontSize: 16,
    lineHeight: 22,
  },
});
