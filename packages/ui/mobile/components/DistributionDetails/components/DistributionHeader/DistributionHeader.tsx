import { Text, TouchableOpacity, View } from "react-native";
import { useTheme } from "../../../../context/ThemeContext";
import { createStyles } from "./DistributionHeader.styles";

import { Distribution } from "@uplift/types";

type Props = {
  onBack: () => void;
  distribution: Distribution;
};

export const DistributionHeader = ({ onBack, distribution }: Props) => {
  const theme = useTheme();
  const styles = createStyles(theme);

  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.backButton} onPress={onBack}>
        <Text style={styles.backButtonText}>← Back</Text>
      </TouchableOpacity>
      <Text style={styles.headerTitle}>Distribution Details</Text>
      <Text style={styles.distributionId}>ID: {distribution.id}</Text>
    </View>
  );
};
