import React from "react";
import { View, Text } from "react-native";
import { createStyles } from "./Statistics.styles";
import { useTheme } from "../../../../context/ThemeContext";

export const Statistics = ({ summaryStats }: { summaryStats: any }) => {
  const theme = useTheme();
  const styles = createStyles(theme);

  return (
    <View style={styles.statsContainer}>
      <Text style={styles.sectionTitle}>Summary Statistics</Text>
      <View style={styles.statsGrid}>
        <View style={styles.statCard}>
          <Text style={[styles.statValue, { color: theme.colors.primary }]}>
            {summaryStats.totalDistributions}
          </Text>
          <Text style={styles.statLabel}>Total Distributions</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={[styles.statValue, { color: theme.colors.success }]}>
            {summaryStats.totalBeneficiaries.toLocaleString()}
          </Text>
          <Text style={styles.statLabel}>Total Beneficiaries</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={[styles.statValue, { color: theme.colors.secondary }]}>
            {summaryStats.averageBeneficiaries.toLocaleString()}
          </Text>
          <Text style={styles.statLabel}>Average Beneficiaries</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={[styles.statValue, { color: theme.colors.warning }]}>
            {summaryStats.uniqueRegions}
          </Text>
          <Text style={styles.statLabel}>Unique Regions</Text>
        </View>
      </View>
    </View>
  );
};
