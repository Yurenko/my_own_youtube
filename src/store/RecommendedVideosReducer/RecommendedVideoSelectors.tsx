import { RootState } from "../configureStore";

export const getRecommendedVideos = (state: RootState) =>
  state.recommendedVideos;
