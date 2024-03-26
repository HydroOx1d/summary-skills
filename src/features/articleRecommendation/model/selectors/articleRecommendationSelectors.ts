import { StateSchema } from "app/providers/store";


export const getArtcileRecommendationIsLoading = (state: StateSchema) => state.articleRecommendation?.isLoading || false;
export const getArtcileRecommendationError = (state: StateSchema) => state.articleRecommendation?.error;