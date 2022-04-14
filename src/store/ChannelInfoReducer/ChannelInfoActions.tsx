import { channelInfo } from "../../components/ChannelPage/ChannelPage";

export const SET_HEADER_INFO = "SET_HEADER_INFO/CHANNEL_INFO";
export const SET_VIDEO_CHANNEL = "SET_VIDEO_CHANNEL/CHANNEL_INFO";
export const IS_LOADING = "IS_LOADING/SEARCH_PAGE/CHANNEL_INFO";
export const IS_ERROR = "IS_ERROR/SEARCH_PAGE/CHANNEL_INFO";

export const setHeaderInfo = (payload: channelInfo) => ({
  type: SET_HEADER_INFO,
  payload,
});

export const setVideoChannel = (payload: any) => ({
  type: SET_VIDEO_CHANNEL,
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
