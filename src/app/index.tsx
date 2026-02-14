import { router } from "expo-router";
import { AnimatePresence, MotiView } from "moti";
import React, { useState } from "react";
import { View } from "react-native";
import MainScreen from "../screens/MainScreen";
import { CustomSplashScreen } from "../screens/SplashScreen";
import { AuthScreen } from "../types/navigation";

export default function App() {
  const [isSplashVisible, setSplashVisible] = useState(true);

  const navigate = (screen: AuthScreen) => {
    router.replace(`/(auth)/${screen}`);
  };

  return (
    <View className="flex-1 bg-background dark:bg-dark-bg">
      <AnimatePresence>
        {isSplashVisible ? (
          <MotiView
            key="splash"
            exit={{ opacity: 0 }}
            transition={{ type: "timing", duration: 500 }}
            className="absolute inset-0 z-50"
          >
            <CustomSplashScreen onComplete={() => setSplashVisible(false)} />
          </MotiView>
        ) : (
          <MotiView
            key="main"
            from={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ type: "timing", duration: 400 }}
            className="flex-1"
          >
            <MainScreen onNavigate={navigate} />
          </MotiView>
        )}
      </AnimatePresence>
    </View>
  );
}
