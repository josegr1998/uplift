import React, { createContext, useContext, ReactNode } from "react";

// Theme interface that matches the design tokens
export interface Theme {
  colors: {
    primary: string;
    primaryDark: string;
    secondary: string;
    secondaryDark: string;
    neutral: string;
    white: string;
    black: string;
    success: string;
    warning: string;
    error: string;
    background: string;
    accent: string;
    accentForeground: string;
    ring: string;
    input: string;
    surface: string;
    border: string;
    textPrimary: string;
    textSecondary: string;
    textLight: string;
    infoBackground: string;
    successBackground: string;
    warningBackground: string;
  };
  spacing: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    xxl: number;
  };
  borderRadius: {
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
  shadows: {
    small: {
      shadowColor: string;
      shadowOffset: { width: number; height: number };
      shadowOpacity: number;
      shadowRadius: number;
      elevation: number;
    };
    medium: {
      shadowColor: string;
      shadowOffset: { width: number; height: number };
      shadowOpacity: number;
      shadowRadius: number;
      elevation: number;
    };
  };
  typography: {
    title: {
      fontSize: number;
      fontWeight:
        | "normal"
        | "bold"
        | "100"
        | "200"
        | "300"
        | "400"
        | "500"
        | "600"
        | "700"
        | "800"
        | "900";
      color: string;
    };
    subtitle: {
      fontSize: number;
      fontWeight:
        | "normal"
        | "bold"
        | "100"
        | "200"
        | "300"
        | "400"
        | "500"
        | "600"
        | "700"
        | "800"
        | "900";
      color: string;
    };
    body: {
      fontSize: number;
      color: string;
    };
    caption: {
      fontSize: number;
      color: string;
    };
    small: {
      fontSize: number;
      color: string;
    };
  };
}

// Default theme (fallback)
export const defaultTheme: Theme = {
  colors: {
    primary: "#3b82f6",
    primaryDark: "#1d4ed8",
    secondary: "#8b5cf6",
    secondaryDark: "#6d28d9",
    neutral: "#737373",
    white: "#ffffff",
    black: "#171717",
    success: "#22c55e",
    warning: "#f59e0b",
    error: "#ef4444",
    background: "#ffffff",
    accent: "#f1f5f9",
    accentForeground: "#171717",
    ring: "#3b82f6",
    input: "#e2e8f0",
    surface: "#F5F5F5",
    border: "#E0E0E0",
    textPrimary: "#000",
    textSecondary: "#666",
    textLight: "#999",
    infoBackground: "#E3F2FD",
    successBackground: "#E8F5E8",
    warningBackground: "#FFF3E0",
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 24,
    xxl: 32,
  },
  borderRadius: {
    sm: 4,
    md: 8,
    lg: 12,
    xl: 16,
  },
  shadows: {
    small: {
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.1,
      shadowRadius: 2,
      elevation: 2,
    },
    medium: {
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 3.84,
      elevation: 5,
    },
  },
  typography: {
    title: {
      fontSize: 24,
      fontWeight: "bold" as const,
      color: "#000",
    },
    subtitle: {
      fontSize: 20,
      fontWeight: "600" as const,
      color: "#000",
    },
    body: {
      fontSize: 16,
      color: "#666",
    },
    caption: {
      fontSize: 14,
      color: "#666",
    },
    small: {
      fontSize: 12,
      color: "#666",
    },
  },
};

interface ThemeContextType {
  theme: Theme;
}

const ThemeContext = createContext<ThemeContextType>({ theme: defaultTheme });

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context.theme;
};

interface ThemeProviderProps {
  theme: Theme;
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  theme,
  children,
}) => {
  return (
    <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>
  );
};
