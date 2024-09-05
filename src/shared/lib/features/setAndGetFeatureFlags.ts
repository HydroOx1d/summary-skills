import { FeatureFlags } from "@/shared/types";

let featureFlags: FeatureFlags;

export function setFeatureFlags(newFeatureFlags: FeatureFlags) {
	if (newFeatureFlags) {
		featureFlags = newFeatureFlags;
	}
}

export function getFeatureFlag(flag: keyof FeatureFlags) {
	return featureFlags?.[flag];
}