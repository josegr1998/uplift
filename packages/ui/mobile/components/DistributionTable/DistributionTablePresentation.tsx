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
import { ValidFilter } from "@uplift/ui/utils";
import { Filter } from "./components/Filter";
import { createStyles } from "./DistributionTablePresentation.styles";
import { useTheme } from "../../context/ThemeContext";
import { getStatusColor } from "../../utils/getStatusColor";
import { Pagination } from "./components/Pagination/Pagination";

export interface DistributionTablePresentationProps {
  distributions: Distribution[];
  isLoading: boolean;
  error: Error | null;
  filters: Record<ValidFilter, string>;
  regions: string[];
  statuses: string[];
  onFilterChange: (name: string, value: string) => void;
  onDistributionSelect: (distribution: Distribution) => void;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  totalItems: number;
  areFiltersVisible: boolean;
  handleFilterToggle: () => void;
}

export const DistributionTablePresentation = ({
  distributions,
  isLoading,
  error,
  filters,
  regions,
  statuses,
  onFilterChange,
  onDistributionSelect,
  currentPage,
  totalPages,
  onPageChange,
  totalItems,
  areFiltersVisible,
  handleFilterToggle,
}: DistributionTablePresentationProps) => {
  const theme = useTheme();
  const styles = createStyles(theme);

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={theme.colors.primary} />
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

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Distribution List</Text>

      {/* Filter Toggle Button */}
      <TouchableOpacity
        style={styles.filterToggleButton}
        onPress={handleFilterToggle}
      >
        <Text style={styles.filterToggleText}>
          {areFiltersVisible ? "Hide Filters" : "Show Filters"}
        </Text>
        <Text style={styles.filterToggleIcon}>
          {areFiltersVisible ? "▼" : "▶"}
        </Text>
      </TouchableOpacity>

      {/* Filters */}
      {areFiltersVisible && (
        <View style={styles.filtersContainer}>
          <View style={styles.filterRow}>
            <Text style={styles.filterLabel}>Region</Text>
            <Filter
              value={filters.region}
              onChange={onFilterChange}
              options={regions}
              placeholder="All Regions"
              name="region"
            />
          </View>

          <View style={styles.filterRow}>
            <Text style={styles.filterLabel}>Status</Text>
            <Filter
              value={filters.status}
              onChange={onFilterChange}
              options={statuses}
              placeholder="All Statuses"
              name="status"
            />
          </View>
        </View>
      )}

      {/* Results count */}
      <Text style={styles.resultsText}>
        {totalItems} distribution
        {totalItems !== 1 ? "s" : ""} found
        {totalPages > 1 && ` (Page ${currentPage} of ${totalPages})`}
      </Text>

      {/* List */}
      <FlatList
        data={distributions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.distributionItem}
            onPress={() => onDistributionSelect(item)}
          >
            <View style={styles.itemHeader}>
              <Text style={styles.regionText}>{item.region}</Text>
              <View style={[styles.statusBadge]}>
                <Text
                  style={[
                    styles.statusText,
                    getStatusColor(item.status, theme),
                  ]}
                >
                  {item.status}
                </Text>
              </View>
            </View>

            <View style={styles.itemDetails}>
              <Text style={styles.dateText}>
                <Text style={styles.labelText}>Date: </Text>
                {new Date(item.date).toLocaleDateString()}
              </Text>
              <Text style={styles.beneficiariesText}>
                <Text style={styles.labelText}>Beneficiaries: </Text>
                {item.beneficiaries.toLocaleString()}
              </Text>
              <Text style={styles.aidTypeText}>
                <Text style={styles.labelText}>Aid Type: </Text>
                {item.aidType}
              </Text>
            </View>
          </TouchableOpacity>
        )}
        style={styles.list}
      />

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />

      {/* Bottom Spacer for Tabs */}
      <View style={styles.bottomSpacer} />
    </View>
  );
};

//TODO: Make the text and backgrounds have same colors as the web app
//TODO: After that componetize everything as the web app
