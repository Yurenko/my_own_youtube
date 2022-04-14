import { ThunkAction } from "redux-thunk";
import { channelInfo } from "../api/youtubeApi";
import { AppDispatch, RootState } from "../configureStore";
import {
  isErrorAction,
  isLoadingAction,
  setHeaderInfo,
} from "./ChannelInfoActions";
import { AnyAction } from "redux";

export const fetchChannelInfo =
  (channelId?: string): ThunkAction<void, RootState, unknown, AnyAction> =>
  async (dispatch: AppDispatch) => {
    try {
      const channelBorder = await channelInfo("brandingSettings", channelId);
      const item = channelBorder.data.items[0];
      const id = item.id;
      const title = item.brandingSettings.channel.title;
      const image = item.brandingSettings.image.bannerExternalUrl;

      const responseIcon = await channelInfo("snippet", channelId);
      const icon = responseIcon.data.items[0].snippet.thumbnails;

      const responseStatistic = await channelInfo("statistics", channelId);

      const subscriberCount =
        responseStatistic.data.items[0].statistics.subscriberCount;

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
