import { FeatureFlags } from "@/shared/types";
import { getFeatureFlag } from "./setAndGetFeatureFlags";

interface ToggleFeature<O, F> {
  name: keyof FeatureFlags;
  on: () => O
  off: () => F
}

export function toggleFeature<O, F>({name, on, off}: ToggleFeature<O, F>): O | F {
	if (getFeatureFlag(name)) {
		return on();
	}

	return off();
}