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
      backgroundColor: theme.colors.infoBackground,
      color: theme.colors.accent,
    },
    Completed: {
      backgroundColor: theme.colors.successBackground,
      color: theme.colors.success,
    },
    "In Progress": {
      backgroundColor: theme.colors.warningBackground,
      color: theme.colors.warning,
    },
    Pending: {
      backgroundColor: theme.colors.surface,
      color: theme.colors.secondary,
    },
  };
  return statusColors[status] || statusColors.Pending;
};
