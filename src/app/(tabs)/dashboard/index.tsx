import { useAuth } from "@/src/contexts/AuthContext";
import React from "react";
import { Image, Text, View } from "react-native";

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <View>
      <Text>index</Text>

      <Image
        source={{ uri: user?.avatar }}
        style={{ width: 50, height: 50, borderRadius: 25 }}
      />
    </View>
  );
};

export default Dashboard;
