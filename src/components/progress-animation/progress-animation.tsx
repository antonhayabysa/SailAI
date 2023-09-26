import React, { useEffect, useMemo } from "react";
import { View, Animated } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import styles from "./styles";

export default function ProgressAnimation({ color = "blue", keySuffix = "" }) {
  const progressValue = useSelector(
    (state: RootState) => state.progress.progressValue
  );

  const componentKey = useMemo(
    () => `ProgressAnimation_${progressValue}_${keySuffix}`,
    [progressValue, keySuffix]
  );

  const progress = new Animated.Value(progressValue);

  useEffect(() => {
    Animated.timing(progress, {
      toValue: progressValue,
      duration: 500,
      useNativeDriver: false
    }).start();
  }, [progress, progressValue]);

  const formattedProgressValue = progressValue.toFixed(2);

  return (
    <View key={componentKey} style={styles.container}>
      <Animated.View
        style={{
          width: "100%",
          height: 30,
          backgroundColor: "gray",
          overflow: "hidden"
        }}
      >
        <Animated.View
          style={[
            {
              width: progress.interpolate({
                inputRange: [0, 100],
                outputRange: ["0%", "100%"]
              }),
              height: 30,
              backgroundColor: color
            }
          ]}
        />
      </Animated.View>
      <Animated.Text style={{ marginTop: 10 }}>
        {formattedProgressValue}%
      </Animated.Text>
    </View>
  );
}
