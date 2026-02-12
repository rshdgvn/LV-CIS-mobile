import React from "react";
import { Pressable, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ToggleTheme } from "../components/settings/ToggleTheme";

export default function MainScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View
      className="flex-1 bg-background dark:bg-dark-bg"
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
      }}
    >
      <View className="flex-1" />

      <View className="flex-1 px-8 justify-center pb-12">
        <View className="items-center mb-10 ">
          <Text className="text-foreground dark:text-dark-fg text-4xl font-bold text-center leading-tight">
            Welcome to <Text className="text-primary">LVCIS</Text>
          </Text>

          <Text className="text-muted-fg dark:text-dark-muted-fg text-lg text-center mt-4 leading-6">
            Everything your student organization needs in one easy platform.
          </Text>
          <ToggleTheme />
        </View>

        <View className="gap-4">
          <Pressable className="bg-primary h-14 rounded-2xl items-center justify-center shadow-md active:opacity-90">
            <Text className="text-white font-bold text-lg">Get Started</Text>
          </Pressable>

          <Pressable className="h-12 items-center justify-center active:opacity-60">
            <Text className="text-muted-fg dark:text-dark-muted-fg font-medium text-base">
              I already have an account
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
