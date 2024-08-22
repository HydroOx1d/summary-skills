import { FeatureFlags } from "@/shared/types";
import { ReactNode } from "react";
import { getFeatureFlag } from "../setAndGetFeatureFlags";


interface ToggleFeatureProps {
  name: keyof FeatureFlags;
  on: ReactNode;
  off: ReactNode;
}

export function ToggleFeature({name, on, off}: ToggleFeatureProps) {
	if (getFeatureFlag(name)) {
		return on;
	}

	return off;
}