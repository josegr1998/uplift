import React from "react";
import { Stack } from "expo-router";
import { DistributionDetails } from "@uplift/ui/mobile";

export default function DistributionDetailsScreen() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <DistributionDetails />
    </>
  );
}
