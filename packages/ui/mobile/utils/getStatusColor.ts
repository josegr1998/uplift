import { isValidStatus } from "@uplift/ui/utils";
import { defaultTheme, Theme } from "../context/ThemeContext";

export const getStatusColor = (status: string, theme: Theme = defaultTheme) => {
  if (!isValidStatus(status)) {
    return {
      backgroundColor: theme.colors.surface,
      color: theme.colors.secondary,
    };
  }

  const statusColors = {
    Planned: {
      color: theme.colors.primary,
    },
    Completed: {
      color: theme.colors.success,
    },
    "In Progress": {
      color: theme.colors.warning,
    },
    Pending: {
      color: theme.colors.neutral,
    },
  };
  return statusColors[status] || statusColors.Pending;
};
