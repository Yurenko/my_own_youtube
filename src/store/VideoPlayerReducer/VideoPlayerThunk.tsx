import { ThunkAction } from "redux-thunk";
import { videoChanelAPI, videoInfoAPI } from "../api/youtubeApi";
import { AppDispatch, RootState } from "../configureStore";

import { AnyAction } from "redux";
import {
  isErrorAction,
  isLoadingAction,
  videoPlayerAction,
} from "./VideoPlayerActions";

interface IVideo {
  snippet: {
    channelId: string;
    publishedAt: string;
    title?: string;
    description: string;
    channelTitle: string;
  };
  statistics: {
    viewCount: string;
    likeCount: string;
    dislikeCount: string;
  };
}

export const getVideoPlayer =
  (videoId?: string): ThunkAction<void, RootState, unknown, AnyAction> =>
  async (dispatch: AppDispatch) => {
    dispatch(isLoadingAction(true));
    await videoInfoAPI(videoId)
      .then((response) => {
        const dataVideo: IVideo = {
          snippet: response.data["items"][0].snippet,
          statistics: response.data["items"][0].statistics,
        };
        dispatch(createVideoInfo(dataVideo));
        dispatch(isErrorAction(false));
      })
      .catch((error) => {
        console.log(error);
        dispatch(isErrorAction(true));
      });
  };

const createVideoInfo =
  (video: IVideo): any =>
  async (dispatch: AppDispatch) => {
    const snippet = video.snippet;
    const stats = video.statistics;
    const channelId = snippet.channelId;

    const publishedDate = new Date(snippet.publishedAt).toLocaleDateString(
      "en-GB",
      {
        day: "numeric",
        month: "short",
        year: "numeric",
      }
    );
    const title = snippet.title;
    const description = snippet.description;
    const channelTitle = snippet.channelTitle;
    const viewCount = stats.viewCount;
    const likeCount = stats.likeCount;
    const dislikeCount = stats.dislikeCount;
    const response = await videoChanelAPI(channelId);

    const channelImage = response.data.items[0].snippet.thumbnails.medium.url;
    const subs = response.data.items[0].statistics.subscriberCount;
    const newVideoInfo = {
      title,
      description,
      publishedDate,
      channelTitle,
      channelImage,
      viewCount,
      likeCount,
      dislikeCount,
      subs,
    };
    dispatch(videoPlayerAction(newVideoInfo));
    dispatch(isLoadingAction(false));
  };
