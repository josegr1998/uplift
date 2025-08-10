import React from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { useTheme } from "../../context/ThemeContext";
import { createStyles } from "./Loading.styles";

export type Props = {
  message?: string;
  title?: string;
  size?: "small" | "large";
  containerStyle?: any;
  centered?: boolean;
};

export const Loading: React.FC<Props> = ({
  message = "Loading...",
  title,
  size = "large",
  containerStyle,
  centered = true,
}) => {
  const theme = useTheme();
  const styles = createStyles(theme);

  return (
    <View
      style={[styles.container, centered && styles.centered, containerStyle]}
    >
      {title && <Text style={styles.title}>{title}</Text>}
      <ActivityIndicator size={size} color={theme.colors.primary} />
      <Text style={styles.message}>{message}</Text>
    </View>
  );
};
