import { View } from "react-native";
import ProgressAnimation from "../../components/progress-animation/progress-animation";
import styles from "./styles";

export default function ProgressAnimationScreen() {
  return (
    <View style={styles.container}>
      <ProgressAnimation color="blue" />
    </View>
  );
}
