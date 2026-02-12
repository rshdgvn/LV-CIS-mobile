import { Moon, Sun } from "lucide-react-native";
import { useColorScheme } from "nativewind";
import React from "react";
import { Pressable, Switch, Text, View } from "react-native";

export function ToggleTheme() {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const isDark = colorScheme === "dark";

  return (
    <Pressable
      onPress={toggleColorScheme}
      className="flex-row items-center justify-between p-3 rounded-2xl border border-border dark:border-dark-border bg-card dark:bg-dark-card shadow-sm active:opacity-95"
    >
      <View className="flex-row items-center gap-3">
        <View className="p-2 rounded-xl">
          {isDark ? (
            <Moon size={20} color="#f8f9fa" />
          ) : (
            <Sun size={20} color="#1c1e26" />
          )}
        </View>

        <View>
          <Text className="text-foreground dark:text-dark-fg font-semibold">
            Dark Mode
          </Text>
        </View>
      </View>

      <Switch
        value={isDark}
        onValueChange={toggleColorScheme}
        trackColor={{ false: "#e9eaec", true: "#0061ff" }}
        thumbColor={"#ffffff"}
        ios_backgroundColor="#e9eaec"
      />
    </Pressable>
  );
}
