import React from "react";
import { View, Text } from "react-native";
import { createStyles } from "./BeneficiaryList.styles";
import { useTheme } from "../../../../context/ThemeContext";

export const BeneficiaryList = ({ distribution }: { distribution: any }) => {
  const theme = useTheme();
  const styles = createStyles(theme);

  return (
    <View style={styles.beneficiariesSection}>
      <Text style={styles.sectionTitle}>
        Beneficiary List ({distribution.beneficiaryList.length} beneficiaries)
      </Text>

      <View style={styles.beneficiariesList}>
        {distribution.beneficiaryList.map((beneficiary: any) => (
          <View key={beneficiary.id} style={styles.beneficiaryItem}>
            <Text style={styles.beneficiaryName}>{beneficiary.name}</Text>
            <Text style={styles.beneficiaryId}>ID: {beneficiary.id}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};
