import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  if (totalPages <= 1) return null;

  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pages.push(i);
        }
        pages.push("...");
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push("...");
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push("...");
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push("...");
        pages.push(totalPages);
      }
    }

    return pages;
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, currentPage === 1 && styles.disabledButton]}
        onPress={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <Text
          style={[
            styles.buttonText,
            currentPage === 1 && styles.disabledButtonText,
          ]}
        >
          Previous
        </Text>
      </TouchableOpacity>

      <View style={styles.pageNumbers}>
        {getPageNumbers().map((page, index) => (
          <React.Fragment key={index}>
            {page === "..." ? (
              <Text style={styles.ellipsis}>...</Text>
            ) : (
              <TouchableOpacity
                style={[
                  styles.pageButton,
                  page === currentPage && styles.activePageButton,
                ]}
                onPress={() => onPageChange(page as number)}
              >
                <Text
                  style={[
                    styles.pageButtonText,
                    page === currentPage && styles.activePageButtonText,
                  ]}
                >
                  {page}
                </Text>
              </TouchableOpacity>
            )}
          </React.Fragment>
        ))}
      </View>

      <TouchableOpacity
        style={[
          styles.button,
          currentPage === totalPages && styles.disabledButton,
        ]}
        onPress={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <Text
          style={[
            styles.buttonText,
            currentPage === totalPages && styles.disabledButtonText,
          ]}
        >
          Next
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "#E0E0E0",
  },
  button: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: "#2196F3",
  },
  disabledButton: {
    backgroundColor: "#E0E0E0",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "600",
  },
  disabledButtonText: {
    color: "#999",
  },
  pageNumbers: {
    flexDirection: "row",
    alignItems: "center",
  },
  pageButton: {
    width: 36,
    height: 36,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 2,
    borderRadius: 18,
    backgroundColor: "#F5F5F5",
  },
  activePageButton: {
    backgroundColor: "#2196F3",
  },
  pageButtonText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#666",
  },
  activePageButtonText: {
    color: "#FFFFFF",
  },
  ellipsis: {
    fontSize: 14,
    color: "#666",
    marginHorizontal: 4,
  },
});
