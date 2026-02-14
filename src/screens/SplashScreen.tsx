import { StatusBar } from "expo-status-bar";
import { MotiView } from "moti";
import { useColorScheme } from "nativewind";
import React, { useEffect, useState } from "react";
import { Dimensions, Image, View } from "react-native";

const { height } = Dimensions.get("window");
const CIRCLE_SIZE = 100;
const FINAL_SCALE = (height / CIRCLE_SIZE) * 4;

export function CustomSplashScreen({ onComplete }: { onComplete: () => void }) {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === "dark";
  const [showStatusBar, setShowStatusBar] = useState(false);

  const targetBgColor = isDark ? "#1c1e26" : "#ffffff";

  useEffect(() => {
    const completionTimer = setTimeout(onComplete, 3200);

    return () => {
      clearTimeout(completionTimer);
    };
  }, [onComplete]);

  return (
    <View className="flex-1 bg-foreground dark:bg-dark-fg justify-center items-center overflow-hidden">
      <StatusBar
        hidden={!showStatusBar}
        style={isDark ? "light" : "dark"}
        animated={true}
      />

      <MotiView
        from={{ scale: 0 }}
        animate={{ scale: FINAL_SCALE }}
        transition={{
          type: "timing",
          duration: 800,
          delay: 1800,
        }}
        style={{
          position: "absolute",
          width: CIRCLE_SIZE,
          height: CIRCLE_SIZE,
          borderRadius: CIRCLE_SIZE / 2,
          backgroundColor: targetBgColor,
        }}
      />

      <MotiView
        from={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{
          type: "spring",
          delay: 500,
        }}
      >
        <Image
          source={require("../../assets/lvcc-logo.png")}
          style={{ width: 100, height: 100 }}
          resizeMode="contain"
        />
      </MotiView>
    </View>
  );
}
