import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Distribution } from "@uplift/types";

interface DistributionListProps {
  distributions: Distribution[];
  onDistributionSelect: (distribution: Distribution) => void;
  selectedDistribution?: Distribution | null;
}

export const DistributionList = ({
  distributions,
  onDistributionSelect,
  selectedDistribution,
}: DistributionListProps) => {
  const renderDistributionItem = ({ item }: { item: Distribution }) => (
    <TouchableOpacity
      style={[
        styles.distributionItem,
        selectedDistribution?.id === item.id && styles.selectedItem,
      ]}
      onPress={() => onDistributionSelect(item)}
    >
      <Text style={styles.regionText}>{item.region}</Text>
      <Text style={styles.dateText}>{item.date}</Text>
      <Text style={styles.statusText}>{item.status}</Text>
      <Text style={styles.beneficiariesText}>
        {item.beneficiaries} beneficiaries
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Distributions</Text>
      <FlatList
        data={distributions}
        renderItem={renderDistributionItem}
        keyExtractor={(item) => item.id}
        style={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#000",
  },
  list: {
    flex: 1,
  },
  distributionItem: {
    backgroundColor: "#F8F9FA",
    padding: 16,
    borderRadius: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: "#E9ECEF",
  },
  selectedItem: {
    backgroundColor: "#E3F2FD",
    borderColor: "#2196F3",
  },
  regionText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
    marginBottom: 4,
  },
  dateText: {
    fontSize: 14,
    color: "#666",
    marginBottom: 2,
  },
  statusText: {
    fontSize: 14,
    color: "#666",
    marginBottom: 2,
  },
  beneficiariesText: {
    fontSize: 14,
    color: "#666",
  },
});
