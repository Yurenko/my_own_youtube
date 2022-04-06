import { AnyAction } from "redux";
import { IS_ERROR, IS_LOADING, VIDEO_PLAYER } from "./VideoPlayerActions";

export interface IVideoPlayer {
  videoInfo: {
    title?: string;
    description: string;
    publishedDate: string;
    channelTitle: string;
    channelImage: string;
    viewCount: string;
    likeCount: string;
    dislikeCount: string;
    subs: string;
  };
  isLoading: boolean;
  isError: boolean;
}

const initialState: IVideoPlayer = {
  videoInfo: {
    title: "",
    description: "",
    publishedDate: "",
    channelTitle: "",
    channelImage: "",
    viewCount: "",
    likeCount: "",
    dislikeCount: "",
    subs: "",
  },
  isLoading: true,
  isError: false,
};

export const videoPlayer = (
  state = initialState,
  { type, payload }: AnyAction
) => {
  switch (type) {
    case VIDEO_PLAYER:
      return { ...state, videoInfo: payload };
    case IS_LOADING:
      return { ...state, isLoading: payload };
    case IS_ERROR:
      return { ...state, isError: payload };
    default:
      return state;
  }
};
