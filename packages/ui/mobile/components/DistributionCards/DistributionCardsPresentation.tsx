import { View, Text, FlatList, TouchableOpacity, Alert } from "react-native";
import { Distribution } from "@uplift/types";
import { ValidFilter } from "@uplift/ui/utils";

import { createStyles } from "./DistributionCards.styles";
import { useTheme } from "../../context/ThemeContext";
import { Pagination } from "./components/Pagination/Pagination";
import { DistributionCard } from "./components/DistributionCard/DistributionCard";
import { ErrorDisplay } from "../ErrorDisplay/ErrorDisplay";
import { Loading } from "../Loading/Loading";
import { Filter } from "./components/Filter/Filter";

type Props = {
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
};

export const DistributionCardsPresentation = ({
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
}: Props) => {
  const theme = useTheme();
  const styles = createStyles(theme);

  if (isLoading) {
    return <Loading message="Loading distributions..." title="Loading" />;
  }

  if (error) {
    return (
      <ErrorDisplay
        message={error.message}
        onRetry={() => {
          // This would trigger a retry in the container
          Alert.alert("Retry", "Please refresh the screen to retry");
        }}
      />
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
          <DistributionCard
            distribution={item}
            onDistributionSelect={onDistributionSelect}
            theme={theme}
          />
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
