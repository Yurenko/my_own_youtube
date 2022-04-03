import { DateTime } from "luxon";
import { ThunkAction } from "redux-thunk";
import { videoCardsAPI } from "../api/youtubeApi";
import { AppDispatch, RootState } from "../configureStore";
import { isLoadingAction, videoCardsAction } from "./RecommendedVideoActions";
import { AnyAction } from "redux";

interface IVideoItems {
  id: string;
  snippet: {
    channelId: string;
    title: string;
    thumbnails: {
      medium: {
        url: string;
      };
    };
    publishedAt: string;
    channelTitle: string;
  };
  statistics: {
    viewCount: string;
  };
}

export const createVideoCards =
  (
    videoItems: IVideoItems[]
  ): ThunkAction<void, RootState, unknown, AnyAction> =>
  async (dispatch: AppDispatch) => {
    let newVideoCards = [];
    for (const video of videoItems) {
      const videoId = video.id;
      const snippet = video.snippet;
      const channelId = snippet.channelId;
      const title = snippet.title;
      const image = snippet.thumbnails.medium.url;
      const views = video.statistics.viewCount;
      const timestamp = DateTime.fromISO(snippet.publishedAt).toRelative();
      const channel = snippet.channelTitle;

      const response = await videoCardsAPI(channelId);

      const channelImage = response.data.items[0].snippet.thumbnails.medium.url;

      newVideoCards.push({
        videoId,
        image,
        title,
        channel,
        views,
        timestamp,
        channelImage,
      });
    }
    dispatch(videoCardsAction(newVideoCards));
    dispatch(isLoadingAction(false));
  };
