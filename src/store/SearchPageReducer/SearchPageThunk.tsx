import { searchVideo, videoChanelAPI, videoInfoAPI } from "../api/youtubeApi";
import { AppDispatch, RootState } from "../configureStore";
import {
  chanelRowAction,
  isErrorAction,
  isLoadingAction,
  videoRowsAction,
} from "./SearchPageActions";
import { DateTime } from "luxon";
import { ThunkAction } from "redux-thunk";
import { AnyAction } from "redux";

const initialState = {
  channelId: "",
  image: "",
  title: "",
  subs: "",
  noOfVideos: "",
  description: "",
};

interface IChanel {
  id: {
    channelId: string;
    videoId: string;
  };
  snippet: {
    publishedAt: string;
    channelTitle: string;
    title: string;
    description: string;
    thumbnails: {
      medium: {
        url: string;
      };
    };
  };
}

export const fetchSearchPage =
  (searchQuery?: string): ThunkAction<void, RootState, unknown, AnyAction> =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(chanelRowAction(initialState));
      dispatch(videoRowsAction([]));
      const responseSearchVideo = await searchVideo(1, "channel", searchQuery);

      dispatch(createChannelRow(responseSearchVideo.data["items"][0]));

      const responseVideoRows = await searchVideo(20, "video", searchQuery);
      dispatch(createVideoRows(responseVideoRows.data["items"]));
      dispatch(isErrorAction(false));
    } catch (error) {
      console.log(error);
      dispatch(isErrorAction(true));
      dispatch(isLoadingAction(false));
    }
  };

const createChannelRow =
  (channel: IChanel): any =>
  async (dispatch: AppDispatch) => {
    try {
      const channelId = channel.id.channelId;
      const response = await videoChanelAPI(channelId);
      const noOfVideos = response.data.items[0].statistics.videoCount;
      const subs = response.data.items[0].statistics.subscriberCount;
      const snippet = channel.snippet;
      const title = snippet.title;
      const description = snippet.description;
      const image = snippet.thumbnails.medium.url;
      const newChanel = {
        channelId,
        image,
        title,
        subs,
        noOfVideos,
        description,
      };
      dispatch(chanelRowAction(newChanel));
    } catch (error) {
      console.log(error);
      dispatch(isErrorAction(true));
      dispatch(isLoadingAction(false));
    }
  };

const createVideoRows =
  (videos: IChanel[]): any =>
  async (dispatch: AppDispatch) => {
    try {
      let newVideoRows = [];
      for (const video of videos) {
        const videoId = video.id.videoId;
        const response = await videoInfoAPI(videoId);
        const views = response.data.items[0].statistics.viewCount;
        const snippet = video.snippet;
        const title = snippet.title;
        const timestamp = DateTime.fromISO(snippet.publishedAt).toRelative();
        const channel = snippet.channelTitle;
        const description = snippet.description;
        const image = snippet.thumbnails.medium.url;

        newVideoRows.push({
          videoId,
          title,
          image,
          views,
          timestamp,
          channel,
          description,
        });
      }
      dispatch(videoRowsAction(newVideoRows));
      dispatch(isLoadingAction(false));
    } catch (error) {
      console.log(error);
      dispatch(isErrorAction(true));
      dispatch(isLoadingAction(false));
    }
  };
