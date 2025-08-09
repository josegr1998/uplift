import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  Alert,
} from "react-native";
import { Distribution } from "@uplift/types";
import { Filter } from "./components/Filter";
import { Pagination } from "./components/Pagination";

export interface DistributionListPresentationProps {
  distributions: Distribution[];
  isLoading: boolean;
  error: Error | null;
  regionFilter: string;
  statusFilter: string;
  regions: string[];
  statuses: string[];
  onRegionFilterChange: (value: string) => void;
  onStatusFilterChange: (value: string) => void;
  onDistributionSelect: (distribution: Distribution) => void;
}

export const DistributionListPresentation = ({
  distributions,
  isLoading,
  error,
  regionFilter,
  statusFilter,
  regions,
  statuses,
  onRegionFilterChange,
  onStatusFilterChange,
  onDistributionSelect,
}: DistributionListPresentationProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#2196F3" />
        <Text style={styles.loadingText}>Loading distributions...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>
          Error loading distributions: {error.message}
        </Text>
        <TouchableOpacity
          style={styles.retryButton}
          onPress={() => {
            // This would trigger a retry in the container
            Alert.alert("Retry", "Please refresh the screen to retry");
          }}
        >
          <Text style={styles.retryButtonText}>Retry</Text>
        </TouchableOpacity>
      </View>
    );
  }

  // Calculate pagination
  const totalPages = Math.ceil(distributions.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedDistributions = distributions.slice(startIndex, endIndex);

  const renderDistributionItem = ({ item }: { item: Distribution }) => (
    <TouchableOpacity
      style={styles.distributionItem}
      onPress={() => onDistributionSelect(item)}
    >
      <View style={styles.itemHeader}>
        <Text style={styles.regionText}>{item.region}</Text>
        <View style={[styles.statusBadge, getStatusColor(item.status)]}>
          <Text style={styles.statusText}>{item.status}</Text>
        </View>
      </View>

      <View style={styles.itemDetails}>
        <Text style={styles.dateText}>
          {new Date(item.date).toLocaleDateString()}
        </Text>
        <Text style={styles.beneficiariesText}>
          {item.beneficiaries.toLocaleString()} beneficiaries
        </Text>
        <Text style={styles.aidTypeText}>{item.aidType}</Text>
      </View>
    </TouchableOpacity>
  );

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

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Distribution List</Text>

      {/* Filters */}
      <View style={styles.filtersContainer}>
        <View style={styles.filterRow}>
          <Text style={styles.filterLabel}>Region</Text>
          <Filter
            value={regionFilter}
            onChange={(value) => {
              onRegionFilterChange(value);
              setCurrentPage(1); // Reset to first page when filtering
            }}
            options={regions}
            placeholder="All Regions"
          />
        </View>

        <View style={styles.filterRow}>
          <Text style={styles.filterLabel}>Status</Text>
          <Filter
            value={statusFilter}
            onChange={(value) => {
              onStatusFilterChange(value);
              setCurrentPage(1); // Reset to first page when filtering
            }}
            options={statuses}
            placeholder="All Statuses"
          />
        </View>
      </View>

      {/* Results count */}
      <Text style={styles.resultsText}>
        {distributions.length} distribution
        {distributions.length !== 1 ? "s" : ""} found
        {totalPages > 1 && ` (Page ${currentPage} of ${totalPages})`}
      </Text>

      {/* List */}
      <FlatList
        data={paginatedDistributions}
        renderItem={renderDistributionItem}
        keyExtractor={(item) => item.id}
        style={styles.list}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      />

      {/* Pagination */}
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#FFFFFF",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#000",
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
  retryButton: {
    backgroundColor: "#2196F3",
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  retryButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
  filtersContainer: {
    backgroundColor: "#F5F5F5",
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  filterRow: {
    marginBottom: 12,
  },
  filterLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
    marginBottom: 4,
  },
  resultsText: {
    fontSize: 14,
    color: "#666",
    marginBottom: 12,
  },
  list: {
    flex: 1,
  },
  listContent: {
    paddingBottom: 16,
  },
  distributionItem: {
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
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
  itemHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  regionText: {
    fontSize: 18,
    fontWeight: "700",
    color: "#000",
    flex: 1,
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusText: {
    fontSize: 12,
    fontWeight: "600",
  },
  itemDetails: {
    gap: 4,
  },
  dateText: {
    fontSize: 14,
    color: "#666",
  },
  beneficiariesText: {
    fontSize: 14,
    color: "#666",
  },
  aidTypeText: {
    fontSize: 14,
    color: "#666",
    fontStyle: "italic",
  },
});
