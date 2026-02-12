import { AnimatePresence, MotiView } from "moti";
import React, { useState } from "react";
import { Dimensions, View } from "react-native";
import MainScreen from "../screens/MainScreen";
import { CustomSplashScreen } from "../screens/SplashScreen";

const { height } = Dimensions.get("window");

export default function App() {
  const [isSplashVisible, setSplashVisible] = useState(true);

  return (
    <View className="flex-1 bg-background dark:bg-dark-bg">
      <AnimatePresence>
        {isSplashVisible ? (
          <MotiView
            key="splash-wrapper"
            exit={{
              translateY: height,
            }}
            transition={{
              type: "timing",
              duration: 400,
            }}
            className="absolute inset-0 z-50"
          >
            <CustomSplashScreen onComplete={() => setSplashVisible(false)} />
          </MotiView>
        ) : (
          <MotiView
            key="app-content"
            from={{
              translateY: -height,
            }}
            animate={{
              translateY: 0,
            }}
            transition={{
              type: "timing",
              duration: 400,
            }}
            className="flex-1"
          >
            <MainScreen />
          </MotiView>
        )}
      </AnimatePresence>
    </View>
  );
}
