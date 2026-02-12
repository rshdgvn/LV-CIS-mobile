import { Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ToggleTheme } from "../components/settings/ToggleTheme";

export default function App() {
  return (
    <SafeAreaProvider>
      <View className="flex-1 bg-background dark:bg-dark-bg">
        <View className="p-6">
          <ToggleTheme />

          <View className="mt-6 p-4 bg-card dark:bg-dark-card border border-border dark:border-dark-border rounded-2xl">
            <Text className="text-foreground dark:text-dark-fg">
              DarkMode Test
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaProvider>
  );
}
