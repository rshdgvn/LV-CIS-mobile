import React from "react";
import {
  ActivityIndicator,
  Pressable,
  PressableProps,
  Text,
} from "react-native";

interface PrimaryButtonProps extends PressableProps {
  title: string;
  isLoading?: boolean;
}

const PrimaryButton = ({
  title,
  isLoading = false,
  disabled,
  style,
  ...props
}: PrimaryButtonProps) => {
  return (
    <Pressable
      className={`h-14 rounded-xl items-center justify-center shadow-md 
        ${isLoading || disabled ? "bg-primary/60 dark:bg-primary/60" : "bg-primary dark:bg-dark-primary"}`}
      disabled={isLoading || disabled}
      {...props}
    >
      {isLoading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <Text className="text-primary-fg dark:text-dark-primary-fg font-bold text-lg">
          {title}
        </Text>
      )}
    </Pressable>
  );
};

export default PrimaryButton;
