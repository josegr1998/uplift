import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams, useRouter } from "expo-router";
import { DistributionDetails } from "@uplift/types";
import { getDistributionDetails } from "@uplift/network";

export default function DistributionDetailsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const [distribution, setDistribution] = useState<DistributionDetails | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDistributionDetails = async () => {
      if (!id) return;

      try {
        setIsLoading(true);
        setError(null);
        const data = await getDistributionDetails(id);
        setDistribution(data);
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : "Failed to load distribution details"
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchDistributionDetails();
  }, [id]);

  const getStatusColor = (status: string) => {
    const statusColors = {
      Planned: { backgroundColor: "#E3F2FD", color: "#1976D2" },
      Completed: { backgroundColor: "#E8F5E8", color: "#388E3C" },
      "In Progress": { backgroundColor: "#FFF3E0", color: "#F57C00" },
      Pending: { backgroundColor: "#F5F5F5", color: "#616161" },
    };
    return (
      statusColors[status as keyof typeof statusColors] || statusColors.Pending
    );
  };

  if (isLoading) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#2196F3" />
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
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <Text style={styles.backButtonText}>Go Back</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Text style={styles.backButtonText}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Distribution Details</Text>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.regionText}>{distribution.region}</Text>
            <View
              style={[styles.statusBadge, getStatusColor(distribution.status)]}
            >
              <Text
                style={[
                  styles.statusText,
                  { color: getStatusColor(distribution.status).color },
                ]}
              >
                {distribution.status}
              </Text>
            </View>
          </View>

          <View style={styles.detailsGrid}>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Date</Text>
              <Text style={styles.detailValue}>
                {new Date(distribution.date).toLocaleDateString()}
              </Text>
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  backButton: {
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  backButtonText: {
    fontSize: 16,
    color: "#2196F3",
    fontWeight: "600",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#000",
    marginLeft: 8,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  loadingText: {
    marginTop: 8,
    fontSize: 16,
    color: "#666",
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  errorText: {
    fontSize: 16,
    color: "#D32F2F",
    textAlign: "center",
    marginBottom: 16,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  regionText: {
    fontSize: 24,
    fontWeight: "700",
    color: "#000",
    flex: 1,
  },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  statusText: {
    fontSize: 14,
    fontWeight: "600",
  },
  detailsGrid: {
    gap: 16,
  },
  detailItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  detailLabel: {
    fontSize: 16,
    color: "#666",
    fontWeight: "500",
  },
  detailValue: {
    fontSize: 16,
    color: "#000",
    fontWeight: "600",
  },
  beneficiariesSection: {
    marginTop: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#000",
    marginBottom: 12,
  },
  beneficiariesList: {
    gap: 8,
  },
  beneficiaryItem: {
    backgroundColor: "#F8F9FA",
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E9ECEF",
  },
  beneficiaryName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
    marginBottom: 4,
  },
  beneficiaryId: {
    fontSize: 14,
    color: "#666",
  },
});
