import {
  CHANNEL_ROW,
  IS_ERROR,
  IS_LOADING,
  VIDEO_ROWS,
} from "./SearchPageActions";
import { AnyAction } from "redux";

const initialState = {
  channelRow: {
    channelId: "",
    image: "",
    title: "",
    subs: "",
    noOfVideos: "",
    description: "",
  },
  videoRows: [],
  isLoading: true,
  isError: false,
};

export const searchPage = (
  state = initialState,
  { type, payload }: AnyAction
) => {
  switch (type) {
    case CHANNEL_ROW:
      return { ...state, channelRow: payload };
    case VIDEO_ROWS:
      return { ...state, videoRows: payload };
    case IS_LOADING:
      return { ...state, isLoading: payload };
    case IS_ERROR:
      return { ...state, isError: payload };
    default:
      return state;
  }
};
