import React from "react";
import { ScrollView, RefreshControl } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { DistributionDetailsPresentationProps } from "./DistributionDetails.types";
import { createStyles } from "./DistributionDetails.styles";
import { useTheme } from "../../context/ThemeContext";
import { Loading } from "../Loading/Loading";
import { ErrorDisplay } from "../ErrorDisplay/ErrorDisplay";
import { DistributionHeader } from "./components/DistributionHeader/DistributionHeader";
import { DistributionInfo } from "./components/DistributionInfo/DistributionInfo";
import { BeneficiaryList } from "./components/BeneficiaryList/BeneficiaryList";

export const DistributionDetailsPresentation = ({
  distribution,
  isLoading,
  error,
  onBack,
  onRefresh,
  isRefreshing,
}: DistributionDetailsPresentationProps) => {
  const theme = useTheme();
  const styles = createStyles(theme);

  if (isLoading) {
    return (
      <Loading message="Loading distribution details..." title="Loading" />
    );
  }

  if (error || !distribution) {
    return (
      <ErrorDisplay
        message={error || "Distribution not found"}
        onRetry={onBack}
      />
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <DistributionHeader onBack={onBack} distribution={distribution} />

      <ScrollView
        style={styles.content}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={onRefresh}
            colors={[theme.colors.primary]}
            tintColor={theme.colors.primary}
          />
        }
      >
        <DistributionInfo distribution={distribution} />

        <BeneficiaryList distribution={distribution} />
      </ScrollView>
    </SafeAreaView>
  );
};
