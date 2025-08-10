import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal, FlatList } from "react-native";
import { useTheme } from "../../../../context/ThemeContext";
import { createStyles } from "./Filter.styles";

interface FilterProps {
  value: string;
  onChange: (name: string, value: string) => void;
  options: string[];
  placeholder: string;
  name: string;
}

export const Filter: React.FC<FilterProps> = ({
  value,
  onChange,
  options,
  placeholder,
  name,
}) => {
  const theme = useTheme();
  const styles = createStyles(theme);
  const [isVisible, setIsVisible] = useState(false);

  const handleSelect = (option: string) => {
    onChange(name, option === value ? "" : option);
    setIsVisible(false);
  };

  const displayValue = value || placeholder;

  return (
    <View>
      <TouchableOpacity
        style={styles.selector}
        onPress={() => setIsVisible(true)}
      >
        <Text style={[styles.selectorText, !value && styles.placeholderText]}>
          {displayValue}
        </Text>
        <Text style={styles.arrow}>▼</Text>
      </TouchableOpacity>

      <Modal
        visible={isVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setIsVisible(false)}
      >
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={() => setIsVisible(false)}
        >
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Select {placeholder}</Text>
              <TouchableOpacity onPress={() => setIsVisible(false)}>
                <Text style={styles.closeButton}>✕</Text>
              </TouchableOpacity>
            </View>

            <FlatList
              data={options}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={[
                    styles.option,
                    item === value && styles.selectedOption,
                  ]}
                  onPress={() => handleSelect(item)}
                >
                  <Text
                    style={[
                      styles.optionText,
                      item === value && styles.selectedOptionText,
                    ]}
                  >
                    {item}
                  </Text>
                  {item === value && <Text style={styles.checkmark}>✓</Text>}
                </TouchableOpacity>
              )}
              style={styles.optionsList}
            />

            <TouchableOpacity
              style={styles.clearButton}
              onPress={() => {
                onChange(name, "");
                setIsVisible(false);
              }}
            >
              <Text style={styles.clearButtonText}>Clear Filter</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};
