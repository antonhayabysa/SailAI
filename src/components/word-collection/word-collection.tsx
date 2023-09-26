import React, { useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
  useSharedValue,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  withSpring
} from "react-native-reanimated";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { updateWords } from "../../store/progress-slice";

export default function WordCollection() {
  const dispatch = useDispatch();
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const words = useSelector((state: RootState) => state.progress.selectedWords);

  useEffect(() => {
    translateX.value = withSpring(0);
    translateY.value = withSpring(0);
  }, [words]);

  const onGestureEvent = useAnimatedGestureHandler({
    onActive: (event, context) => {
      translateX.value = event.translationX;
      translateY.value = event.translationY;
    }
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: translateX.value },
        { translateY: translateY.value }
      ]
    };
  });

  const handleWordSelect = (word: string) => {
    dispatch(updateWords(word));
  };

  return (
    <View style={{ flex: 1 }}>
      {words.map((word, index) => (
        <PanGestureHandler key={index} onGestureEvent={onGestureEvent}>
          <Animated.View style={animatedStyle}>
            <TouchableOpacity onPress={() => handleWordSelect(word)}>
              <Text>{word}</Text>
            </TouchableOpacity>
          </Animated.View>
        </PanGestureHandler>
      ))}
    </View>
  );
}
