import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { DistributionDetailsPresentationProps } from "./DistributionDetails.types";
import { createStyles } from "./DistributionDetails.styles";
import { useTheme } from "../../context/ThemeContext";

export const DistributionDetailsPresentation = ({
  distribution,
  isLoading,
  error,
  onBack,
}: DistributionDetailsPresentationProps) => {
  const theme = useTheme();
  const styles = createStyles(theme);

  if (isLoading) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={theme.colors.primary} />
          <Text style={styles.loadingText}>
            Loading distribution details...
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  if (error || !distribution) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>
            {error || "Distribution not found"}
          </Text>
          <TouchableOpacity style={styles.backButton} onPress={onBack}>
            <Text style={styles.backButtonText}>Go Back</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={onBack}>
          <Text style={styles.backButtonText}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Distribution Details</Text>
        <Text style={styles.distributionId}>ID: {distribution.id}</Text>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
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
              <Text style={styles.detailValue}>
                {distribution.deliveryChannel}
              </Text>
            </View>

            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Beneficiaries</Text>
              <Text style={styles.detailValue}>
                {distribution.beneficiaries.toLocaleString()}
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.beneficiariesSection}>
          <Text style={styles.sectionTitle}>
            Beneficiary List ({distribution.beneficiaryList.length}{" "}
            beneficiaries)
          </Text>

          <View style={styles.beneficiariesList}>
            {distribution.beneficiaryList.map((beneficiary) => (
              <View key={beneficiary.id} style={styles.beneficiaryItem}>
                <Text style={styles.beneficiaryName}>{beneficiary.name}</Text>
                <Text style={styles.beneficiaryId}>ID: {beneficiary.id}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
