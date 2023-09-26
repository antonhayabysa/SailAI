import React, { useState, useEffect } from "react";
import { View } from "react-native";
import ProgressTracking from "../../components/progress-tracking/progress-tracking";
import styles from "./styles";
import fetchDataFromAPI from "../../api/fetch-data";

export default function ProgressTrackingScreen() {
  const [progressData, setProgressData] = useState([]);

  useEffect(() => {
    fetchDataFromAPI().then((data) => {
      setProgressData(data);
    });
  }, []);

  return (
    <View style={styles.container}>
      <ProgressTracking progressData={progressData} />
    </View>
  );
}
