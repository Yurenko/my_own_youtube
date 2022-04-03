import { IVideoCards } from "../../components/RecommendedVideos/RecommendedVideos";

export const VIDEO_CARDS = "VIDEO_CARDS";
export const IS_LOADING = "IS_LOADING";
export const IS_ERROR = "IS_ERROR";

export const videoCardsAction = (payload: IVideoCards[]) => ({
  type: VIDEO_CARDS,
  payload,
});

export const isLoadingAction = (payload: boolean) => ({
  type: IS_LOADING,
  payload,
});

export const isErrorAction = (payload: boolean) => ({
  type: IS_ERROR,
  payload,
});
