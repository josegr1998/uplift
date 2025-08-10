import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useTheme } from "../../context/ThemeContext";
import { createStyles } from "./ErrorDisplay.styles";

export interface ErrorDisplayProps {
  message: string;
  title?: string;
  retryText?: string;
  onRetry?: () => void;
  showRetryButton?: boolean;
  containerStyle?: any;
  centered?: boolean;
}

export const ErrorDisplay: React.FC<ErrorDisplayProps> = ({
  message,
  title = "Error",
  retryText = "Retry",
  onRetry,
  showRetryButton,
  containerStyle,
  centered = true,
}) => {
  const theme = useTheme();
  const styles = createStyles(theme);

  // Show retry button if onRetry is provided and showRetryButton is not explicitly false
  const shouldShowRetryButton = showRetryButton !== false && onRetry;

  return (
    <View
      style={[styles.container, centered && styles.centered, containerStyle]}
    >
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.message}>{message}</Text>

      {shouldShowRetryButton && (
        <TouchableOpacity
          style={styles.retryButton}
          onPress={onRetry}
          activeOpacity={0.7}
        >
          <Text style={styles.retryButtonText}>{retryText}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
