import { TouchableOpacity, View, Text } from "react-native";
import { Distribution } from "@uplift/types";
import { getStatusColor, Theme } from "@uplift/ui/mobile";
import { createStyles } from "./DistributionCard.styles";

type Props = {
  distribution: Distribution;
  onDistributionSelect: (distribution: Distribution) => void;
  theme: Theme;
};

export const DistributionCard = ({
  distribution,
  onDistributionSelect,
  theme,
}: Props) => {
  const styles = createStyles(theme);

  return (
    <TouchableOpacity
      style={styles.distributionItem}
      onPress={() => onDistributionSelect(distribution)}
    >
      <View style={styles.itemHeader}>
        <Text style={styles.regionText}>{distribution.region}</Text>
        <View style={[styles.statusBadge]}>
          <Text
            style={[
              styles.statusText,
              getStatusColor(distribution.status, theme),
            ]}
          >
            {distribution.status}
          </Text>
        </View>
      </View>

      <View style={styles.itemDetails}>
        <Text style={styles.dateText}>
          <Text style={styles.labelText}>Date: </Text>
          {new Date(distribution.date).toLocaleDateString()}
        </Text>
        <Text style={styles.beneficiariesText}>
          <Text style={styles.labelText}>Beneficiaries: </Text>
          {distribution.beneficiaries.toLocaleString()}
        </Text>
        <Text style={styles.aidTypeText}>
          <Text style={styles.labelText}>Aid Type: </Text>
          {distribution.aidType}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
