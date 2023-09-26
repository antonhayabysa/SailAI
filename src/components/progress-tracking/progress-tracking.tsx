import React, { useMemo } from "react";
import { View, Text, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { updateProgress } from "../../store/progress-slice";
import styles from "./styles";

export default function ProgressTracking({ keySuffix = "", progressData }) {
  const progressValue = useSelector(
    (state: RootState) => state.progress.progressValue
  );
  const dispatch = useDispatch();

  const componentKey = useMemo(
    () => `ProgressTracking_${progressValue}_${keySuffix}`,
    [progressValue, keySuffix]
  );

  const formattedProgressValue = progressValue.toFixed(2);

  const handleUpdateProgress = () => {
    const progress = Math.random() * 100;
    dispatch(updateProgress({ topicName: "Topic 1", progress }));
  };

  return (
    <View key={componentKey} style={styles.container}>
      <Text style={styles.topic}>
        Total Progress: {formattedProgressValue}%
      </Text>
      <Button title="Update Total Progress" onPress={handleUpdateProgress} />
    </View>
  );
}
