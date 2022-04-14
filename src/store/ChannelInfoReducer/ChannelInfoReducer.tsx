import {
  IS_ERROR,
  IS_LOADING,
  SET_HEADER_INFO,
  SET_VIDEO_CHANNEL,
} from "./ChannelInfoActions";
import { AnyAction } from "redux";

interface IinitialState {
  channelInfo: {
    id: string;
    title: string;
    image: string;
    icon: {
      default: {
        url: string;
      };
    };
    subscriberCount: string | null;
  };
  isLoading: boolean;
  isError: boolean;
}

const initialState = {
  channelInfo: {
    id: "",
    title: "",
    image: "",
    icon: {
      default: {
        url: "",
      },
    },
    subscriberCount: "",
  },
  isLoading: true,
  isError: false,
};

export const channelInfo = (
  state: IinitialState = initialState,
  { type, payload }: AnyAction
) => {
  switch (type) {
    case SET_HEADER_INFO:
      return { ...state, channelInfo: payload };
    case SET_VIDEO_CHANNEL:
      return { ...state, ownVideos: payload };
    case IS_LOADING:
      return { ...state, isLoading: payload };
    case IS_ERROR:
      return { ...state, isError: payload };
    default:
      return state;
  }
};
