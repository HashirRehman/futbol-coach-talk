import { useState } from "react";
import {
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import PepTalkCard from "../components/PepTalkCard";
import { generatePepTalk } from "../services/gemini";

export default function HomeScreen() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [position, setPosition] = useState("");
  const [pepTalk, setPepTalk] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerate = async () => {
    const trimmedName = name.trim();
    const trimmedPosition = position.trim();

    if (!trimmedName || !age || !trimmedPosition) {
      return alert("Please fill all fields.");
    }

    if (!/^[a-zA-Z\s]{1,30}$/.test(trimmedName)) {
      return alert("Name must be letters only and max 30 characters.");
    }

    const ageNum = parseInt(age, 10);
    if (isNaN(ageNum) || ageNum < 5 || ageNum > 50) {
      return alert("Age must be a number between 5 and 50.");
    }

    if (!/^[a-zA-Z\s]{1,20}$/.test(trimmedPosition)) {
      return alert("Position must be letters only and max 20 characters.");
    }

    setIsLoading(true);
    try {
      const response = await generatePepTalk(
        trimmedName,
        ageNum,
        trimmedPosition
      );
      setPepTalk(response);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Gemini Coach Talk</Text>

      <Text style={styles.label}>Player Name</Text>
      <TextInput
        placeholder="Player Name"
        style={styles.input}
        value={name}
        onChangeText={setName}
        maxLength={30}
      />

      <Text style={styles.label}>Age</Text>
      <TextInput
        placeholder="Age"
        style={styles.input}
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
        maxLength={2}
      />

      <Text style={styles.label}>Position</Text>
      <TextInput
        placeholder="Position"
        style={styles.input}
        value={position}
        onChangeText={setPosition}
        maxLength={20}
      />

      <Button title="Generate Pep Talk" onPress={handleGenerate} />

      {isLoading ? (
        <ActivityIndicator
          size="large"
          style={{ marginTop: 20 }}
        />
      ) : pepTalk ? (
        <PepTalkCard text={pepTalk} />
      ) : null}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    gap: 15,
    justifyContent: "flex-start",
    flexGrow: 1,
  },
  label: {
    fontWeight: "bold",
    marginBottom: 6,
    fontSize: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
  },
});
