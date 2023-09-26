import React, { useState } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import DraggableFlatList from "react-native-draggable-flatlist";
import styles from "./styles";

export default function WordCollectionScreen() {
  const correctSentence = "Hello World";
  const [selectedWords, setSelectedWords] = useState([]);
  const [data, setData] = useState([
    { key: "Hello" },
    { key: "World" }
    // Добавьте здесь больше случайных слов
  ]);

  const handleCheck = () => {
    const sentence = selectedWords.join(" ");
    if (sentence === correctSentence) {
      Alert.alert("Correct!", "The sentence is correct.");
    } else {
      Alert.alert("Incorrect!", "The sentence is incorrect. Try again.");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.dropZone}>
        {selectedWords.map((word, index) => (
          <TouchableOpacity key={index} style={styles.droppedWord}>
            <Text>{word}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <DraggableFlatList
        data={data}
        renderItem={({ item, drag }) => (
          <TouchableOpacity
            onLongPress={drag}
            onPress={() => {
              if (!selectedWords.includes(item.key)) {
                setSelectedWords([...selectedWords, item.key]);
              }
            }}
          >
            <Text>{item.key}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => `draggable-item-${item.key}`}
        onDragEnd={({ data }) => setData(data)}
      />
      <TouchableOpacity onPress={handleCheck} style={styles.button}>
        <Text style={styles.buttonText}>Check</Text>
      </TouchableOpacity>
    </View>
  );
}
