import { isValidStatus } from "@uplift/ui/utils";
import { colors } from "../DistributionTable/DistributionTablePresentation.styles";

export const getStatusColor = (status: string) => {
  if (!isValidStatus(status)) {
    return { backgroundColor: colors.surface, color: colors.secondary };
  }

  const statusColors = {
    Planned: { backgroundColor: colors.infoBackground, color: colors.info },
    Completed: {
      backgroundColor: colors.successBackground,
      color: colors.success,
    },
    "In Progress": {
      backgroundColor: colors.warningBackground,
      color: colors.warning,
    },
    Pending: { backgroundColor: colors.surface, color: colors.secondary },
  };
  return statusColors[status] || statusColors.Pending;
};
