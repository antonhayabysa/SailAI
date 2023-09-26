import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Provider } from "react-redux";
import { gestureHandlerRootHOC } from "react-native-gesture-handler";
import store from "./src/store";
import WordCollectionScreen from "./src/screens/word-collection-screen/word-collection-screen";
import ProgressAnimationScreen from "./src/screens/progress-animation-screen/progress-animation-screen";
import ProgressTrackingScreen from "./src/screens/progress-tracking-screen/progress-tracking-screen";

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="WordCollection" component={WordCollectionScreen} />
          <Tab.Screen
            name="ProgressAnimation"
            component={ProgressAnimationScreen}
          />
          <Tab.Screen
            name="ProgressTracking"
            component={ProgressTrackingScreen}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default gestureHandlerRootHOC(App);
