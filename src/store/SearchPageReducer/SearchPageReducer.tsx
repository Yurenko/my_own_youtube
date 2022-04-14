import {
  CHANNEL_ROW,
  IS_ERROR,
  IS_LOADING,
  VIDEO_ROWS,
} from "./SearchPageActions";
import { AnyAction } from "redux";

interface IinitialState {
  channelRow: {
    channelId: string;
    image: string;
    title: string;
    subs: string;
    noOfVideos: string;
    description: string;
  };
  videoRows: Array<object>;
  isLoading: boolean;
  isError: boolean;
}

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
  state: IinitialState = initialState,
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
