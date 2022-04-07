import thunk from "redux-thunk";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { recommendedVideos } from "./RecommendedVideosReducer/RecommendedVideoReducer";
import { videoPlayer } from "./VideoPlayerReducer/VideoPlayerReducer";
import { searchPage } from "./SearchPageReducer/SearchPageReducer";

const rootReducer = combineReducers({
  recommendedVideos,
  videoPlayer,
  searchPage,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = AppStore["dispatch"];
