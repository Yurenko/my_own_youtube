import { IVideoInfo } from "../../components/VideoPlayer/VideoPlayer";

export const VIDEO_PLAYER = "VIDEO_PLAYER/PLAYER";
export const IS_LOADING = "IS_LOADING/PLAYER";
export const IS_ERROR = "IS_ERROR/PLAYER";

export const videoPlayerAction = (payload: IVideoInfo) => ({
  type: VIDEO_PLAYER,
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
