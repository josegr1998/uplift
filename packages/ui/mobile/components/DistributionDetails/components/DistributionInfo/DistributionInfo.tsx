import React from "react";
import { View, Text } from "react-native";
import { createStyles } from "./DistributionInfo.styles";
import { useTheme } from "../../../../context/ThemeContext";

export const DistributionInfo = ({ distribution }: { distribution: any }) => {
  const theme = useTheme();
  const styles = createStyles(theme);

  return (
    <View style={styles.card}>
      <View style={styles.detailsGrid}>
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Region</Text>
          <Text style={styles.detailValue}>{distribution.region}</Text>
        </View>

        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Status</Text>
          <Text
            style={[
              styles.detailValue,
              { color: distribution.statusStyle.color },
            ]}
          >
            {distribution.status}
          </Text>
        </View>

        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Date</Text>
          <Text style={styles.detailValue}>{distribution.date}</Text>
        </View>

        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Aid Type</Text>
          <Text style={styles.detailValue}>{distribution.aidType}</Text>
        </View>

        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Delivery Channel</Text>
          <Text style={styles.detailValue}>{distribution.deliveryChannel}</Text>
        </View>

        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Beneficiaries</Text>
          <Text style={styles.detailValue}>
            {distribution.beneficiaries.toLocaleString()}
          </Text>
        </View>
      </View>
    </View>
  );
};
