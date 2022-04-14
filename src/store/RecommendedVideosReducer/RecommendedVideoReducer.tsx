import { AnyAction } from "redux";
import { IVideoCards } from "../../components/RecommendedVideos/RecommendedVideos";
import { IS_ERROR, IS_LOADING, VIDEO_CARDS } from "./RecommendedVideoActions";

interface InitialVideo {
  videoCards: IVideoCards[];
  isLoading: boolean;
  isError: boolean;
}

const InitialState = {
  videoCards: [],
  isLoading: true,
  isError: false,
};

export const recommendedVideos = (
  state: InitialVideo = InitialState,
  { type, payload }: AnyAction
) => {
  switch (type) {
    case VIDEO_CARDS:
      return { ...state, videoCards: payload };
    case IS_LOADING:
      return { ...state, isLoading: payload };
    case IS_ERROR:
      return { ...state, isError: payload };
    default:
      return state;
  }
};
