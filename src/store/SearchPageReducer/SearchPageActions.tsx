import {
  IChanelRow,
  ICreateVideoRow,
} from "../../components/SearchPage/SearchPage";

export const CHANNEL_ROW = "CHANNEL_ROW/SEARCH_PAGE";
export const VIDEO_ROWS = "VIDEO_ROWS/SEARCH_PAGE";
export const IS_LOADING = "IS_LOADING/SEARCH_PAGE";
export const IS_ERROR = "IS_ERROR/SEARCH_PAGE";

export const chanelRowAction = (payload: IChanelRow) => ({
  type: CHANNEL_ROW,
  payload,
});

export const videoRowsAction = (payload: ICreateVideoRow[]) => ({
  type: VIDEO_ROWS,
  payload,
});

export const isLoadingAction = (payload: boolean) => ({
  type: IS_LOADING,
  payload,
});

export const isErrorAction = (payload: boolean) => ({
  type: IS_ERROR,
  payload,
});
