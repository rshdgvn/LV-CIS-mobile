import { useAuth } from "@/src/contexts/AuthContext";
import LoginScreen from "@/src/screens/auth/LoginScreen";
import { authService } from "@/src/services/authService";
import { LoginPayload } from "@/src/types/auth";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Alert } from "react-native";

const login = () => {
  const router = useRouter();
  const { signIn } = useAuth();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleLogin = async (data: LoginPayload) => {
    if (isSubmitting) return;
    setIsSubmitting(true);

    try {
      const response = await authService.login(data);

      await signIn(response.token, response.user);

      router.replace("/dashboard");
    } catch (error: any) {
      console.error("Login Error:", error);
      const message = error.response?.data?.message || "Invalid credentials";
      Alert.alert("Login Failed", message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <LoginScreen
      onLogin={handleLogin}
      onNavigate={() => {
        router.push("/(auth)/register");
      }}
    />
  );
};

export default login;
