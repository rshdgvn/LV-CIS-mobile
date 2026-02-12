import { useColorScheme } from "nativewind";
import { Pressable, Switch, Text, View } from "react-native";

export function ToggleTheme() {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const isDark = colorScheme === "dark";

  return (
    <Pressable
      onPress={toggleColorScheme}
      className="flex-row items-center justify-between p-4 bg-card dark:bg-dark-card rounded-xl border border-border dark:border-dark-border"
    >
      <View>
        <Text className="text-foreground dark:text-dark-fg font-bold text-lg">
          {isDark ? "Dark Mode" : "Light Mode"}
        </Text>
        <Text className="text-muted-fg dark:text-dark-muted-fg text-sm">
          Tap to switch themes
        </Text>
      </View>

      <Switch
        value={isDark}
        onValueChange={toggleColorScheme}
        trackColor={{ false: "#e9eaec", true: "#0061ff" }}
        thumbColor={"#ffffff"}
      />
    </Pressable>
  );
}
