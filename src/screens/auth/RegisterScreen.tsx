import { InputField } from "@/src/components/InputField";
import { useTheme } from "@/src/hooks/useTheme";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";

interface RegisterProps {
  onClose: () => void;
  onSwitch: () => void;
}

export default function RegisterScreen({ onClose, onSwitch }: RegisterProps) {
  const { mutedFgColor } = useTheme();

  return (
    <View className="flex-1 justify-end">
      <Pressable
        style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
        onPress={onClose}
      />
      <View className="bg-background dark:bg-dark-bg rounded-t-[40px] px-8 pt-4 pb-10 h-[85%]">
        <View className="w-12 h-1.5 bg-input dark:bg-dark-input rounded-full self-center mb-6" />

        <ScrollView showsVerticalScrollIndicator={false}>
          <View className="items-center mb-6">
            <Text className="text-2xl font-bold text-foreground dark:text-dark-fg">
              Create an account
            </Text>
            <Text className="text-muted-fg dark:text-dark-muted-fg text-center mt-1">
              Join La Verdad Club Integrated System
            </Text>
          </View>

          <Text className="text-primary dark:text-dark-primary font-bold mb-3">
            Personal Information
          </Text>

          <View className="flex-row gap-3 mb-4">
            <View className="flex-1">
              <InputField placeholder="First name" />
            </View>
            <View className="flex-1">
              <InputField placeholder="Last name" />
            </View>
          </View>

          <InputField
            label="Email address"
            placeholder="Enter your email"
            keyboardType="email-address"
            containerStyles="mb-4"
          />

          <InputField
            label="Password"
            placeholder="Set a password"
            isPassword={true}
            containerStyles="mb-4"
          />

          <Text className="text-primary dark:text-dark-primary font-bold mb-3 mt-2">
            Academic Information
          </Text>

          <View className="flex-row gap-3 mb-8">
            <View className="flex-1">
              <Text className="font-medium mb-2 text-foreground dark:text-dark-fg">
                Course
              </Text>
              <Pressable className="h-12 border border-input dark:border-dark-input rounded-xl px-4 flex-row items-center justify-between bg-transparent">
                <Text style={{ color: mutedFgColor }}>Course</Text>
                <Ionicons name="chevron-down" size={18} color={mutedFgColor} />
              </Pressable>
            </View>

            <View className="flex-1">
              <Text className="font-medium mb-2 text-foreground dark:text-dark-fg">
                Year Level
              </Text>
              <Pressable className="h-12 border border-input dark:border-dark-input rounded-xl px-4 flex-row items-center justify-between bg-transparent">
                <Text style={{ color: mutedFgColor }}>Year level</Text>
                <Ionicons name="chevron-down" size={18} color={mutedFgColor} />
              </Pressable>
            </View>
          </View>

          <Pressable className="bg-primary dark:bg-dark-primary h-14 rounded-xl items-center justify-center shadow-md active:opacity-90">
            <Text className="text-primary-fg dark:text-dark-primary-fg font-bold text-lg">
              Create an Account
            </Text>
          </Pressable>

          <View className="flex-row items-center my-6">
            <View className="flex-1 h-[1px] bg-border dark:bg-dark-border" />
            <Text className="mx-4 text-muted-fg dark:text-dark-muted-fg text-sm">
              Or continue with
            </Text>
            <View className="flex-1 h-[1px] bg-border dark:bg-dark-border" />
          </View>

          <Pressable className="border border-border dark:border-dark-border h-14 rounded-xl items-center justify-center flex-row active:bg-muted dark:active:bg-dark-muted mb-6">
            <Image
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/2991/2991148.png",
              }}
              className="w-5 h-5 mr-3"
            />
            <Text className="font-semibold text-secondary-fg dark:text-dark-secondary-fg">
              Continue with Google
            </Text>
          </Pressable>

          <View className="flex-row justify-center pb-8">
            <Text className="text-muted-fg dark:text-dark-muted-fg">
              Already have an account?{" "}
            </Text>
            <Pressable onPress={onSwitch}>
              <Text className="text-primary dark:text-dark-primary font-bold">
                Sign in.
              </Text>
            </Pressable>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
