import { ThunkAction } from "redux-thunk";
import { channelInfo, channelVideosById } from "../api/youtubeApi";
import { AppDispatch, RootState } from "../configureStore";
import {
  isErrorAction,
  isLoadingAction,
  setHeaderInfo,
  setVideoChannel,
} from "./ChannelInfoActions";
import { AnyAction } from "redux";
import { DateTime } from "luxon";

export const fetchChannelInfo =
  (channelId?: string): ThunkAction<void, RootState, unknown, AnyAction> =>
  async (dispatch: AppDispatch) => {
    try {
      const channelBorder = await channelInfo("brandingSettings", channelId);
      const item = channelBorder[0];
      const id = item.id;
      const title = item.brandingSettings.channel.title;
      const image = item.brandingSettings.image.bannerExternalUrl;

      const responseIcon = await channelInfo("snippet", channelId);
      const icon = responseIcon[0].snippet.thumbnails;

      const responseStatistic = await channelInfo("statistics", channelId);

      const subscriberCount = responseStatistic[0].statistics.subscriberCount;

      const newHeaderInfo = {
        id,
        title,
        image,
        icon,
        subscriberCount,
      };

      dispatch(setHeaderInfo(newHeaderInfo));
      dispatch(isErrorAction(false));
      dispatch(isLoadingAction(false));
    } catch (error) {
      console.log(error);
      dispatch(isErrorAction(true));
      dispatch(isLoadingAction(false));
    }
  };

export const videosChannel =
  (id?: string): ThunkAction<void, RootState, unknown, AnyAction> =>
  async (dispatch: AppDispatch) => {
    try {
      const video = await channelVideosById(50, "date", id);
      const videoId = video[0].id.videoId;
      const snippet = video[0].snippet;
      const channelId = snippet.channelId;
      const title = snippet.title;
      const description = snippet.description;
      const image = snippet.thumbnails.medium.url;
      const timestamp = DateTime.fromISO(snippet.publishedAt).toRelative();
      const channel = snippet.channelTitle;

      const newVideosChannel = {
        videoId,
        channelId,
        description,
        image,
        title,
        channel,
        timestamp,
      };
      dispatch(setVideoChannel(newVideosChannel));
      dispatch(isLoadingAction(false));
    } catch (error) {
      console.log(error);
      dispatch(isErrorAction(true));
      dispatch(isLoadingAction(false));
    }
  };
