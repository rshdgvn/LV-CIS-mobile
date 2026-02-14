import { InputField } from "@/src/components/InputField";
import React from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";

interface LoginProps {
  onClose: () => void;
  onSwitch: () => void;
}

export default function LoginScreen({ onClose, onSwitch }: LoginProps) {
  return (
    <View className="flex-1 justify-end ">
      <Pressable
        style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
        onPress={onClose}
      />
      <View className="bg-card dark:bg-dark-bg rounded-t-[40px] px-8 pt-4 pb-10">
        <View className="w-12 h-1.5 bg-input dark:bg-dark-input rounded-full self-center mb-6" />

        <ScrollView showsVerticalScrollIndicator={false}>
          <View className="items-center mb-8">
            <View className="w-20 h-20 rounded-full bg-card dark:bg-dark-card shadow-sm items-center justify-center mb-4 border border-border dark:border-dark-border">
              <Image
                source={require("../../../assets/lvcc-logo.png")}
                className="w-16 h-16"
                resizeMode="contain"
              />
            </View>
            <Text className="text-2xl font-bold text-foreground dark:text-dark-fg">
              Welcome Back
            </Text>
            <Text className="text-muted-fg dark:text-dark-muted-fg text-center mt-1">
              Login with your La Verdad account
            </Text>
          </View>

          <InputField
            label="Email address"
            placeholder="Enter your email"
            keyboardType="email-address"
            autoCapitalize="none"
            containerStyles="mb-4"
          />

          <View className="mb-6">
            <View className="flex-row justify-between items-center mb-2">
              <Text className="font-semibold text-foreground dark:text-dark-fg">
                Password
              </Text>
              <Pressable>
                <Text className="text-primary dark:text-dark-primary text-xs font-bold">
                  Forgot your password?
                </Text>
              </Pressable>
            </View>

            <InputField placeholder="Enter your password" isPassword={true} />
          </View>

          <Pressable
            className="bg-primary dark:bg-dark-primary h-14 rounded-xl items-center justify-center shadow-md active:opacity-90"
            onPress={() => {}}
          >
            <Text className="text-primary-fg dark:text-dark-primary-fg font-bold text-lg">
              Sign in
            </Text>
          </Pressable>

          <View className="flex-row justify-center mt-6">
            <Text className="text-muted-fg dark:text-dark-muted-fg">
              Don't have an account?{" "}
            </Text>
            <Pressable onPress={onSwitch}>
              <Text className="text-primary dark:text-dark-primary font-bold">
                Sign up.
              </Text>
            </Pressable>
          </View>
          <View className="flex-row items-center my-8">
            <View className="flex-1 h-[1px] bg-border dark:bg-dark-border" />
            <Text className="mx-4 text-muted-fg dark:text-dark-muted-fg text-xs">
              Or continue with
            </Text>
            <View className="flex-1 h-[1px] bg-border dark:bg-dark-border" />
          </View>

          <Pressable className="border border-border dark:border-dark-border h-14 rounded-xl items-center justify-center flex-row active:bg-muted dark:active:bg-dark-muted mb-4">
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
        </ScrollView>
      </View>
    </View>
  );
}
