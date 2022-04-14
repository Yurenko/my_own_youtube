import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Video from "./../Video/Video";
import styles from "./VideoPlayer.module.css";
import RecommendedVideos from "../RecommendedVideos/RecommendedVideos";
import VideoInfo from "../VideoInfo/VideoInfo";
import CircularProgress from "@material-ui/core/CircularProgress";
import Alert from "@material-ui/lab/Alert";
import { getVideoPlayer } from "../../store/VideoPlayerReducer/VideoPlayerThunk";
import { useDispatch } from "react-redux";
import { UseAppSelector } from "../../hook/reduxHook";
import { getVideoInfo } from "../../store/VideoPlayerReducer/VideoPlayerSelectors";

export interface IVideoInfo {
  title?: string;
  description: string;
  publishedDate: string;
  channelTitle: string;
  channelImage: string;
  viewCount: string;
  likeCount: string;
  dislikeCount: string;
  subs: string;
}

export type VideoParams = {
  videoId?: string;
};

const VideoPlayer = () => {
  const dicpatch = useDispatch();
  let { videoId } = useParams<VideoParams>();

  const { videoInfo, isLoading, isError } = UseAppSelector(getVideoInfo);

  useEffect(() => {
    dicpatch(getVideoPlayer(videoId));
  }, [videoId]);

  if (isError) {
    return (
      <Alert severity="error" className="loading">
        No Results found!
      </Alert>
    );
  }
  return (
    <div className={styles.videoplayer}>
      <div className={styles.videoplayerVideodetails}>
        <div className={styles.videoplayerVideo}>
          {isLoading ? (
            <CircularProgress className="loading" color="secondary" />
          ) : (
            <Video videoId={videoId} opts={{ height: "500", width: "100%" }} />
          )}
        </div>
        <div className={styles.videoplayerVideoinfo}>
          {!isLoading ? (
            <VideoInfo
              title={videoInfo.title}
              description={videoInfo.description}
              publishedDate={videoInfo.publishedDate}
              channelTitle={videoInfo.channelTitle}
              channelImage={videoInfo.channelImage}
              viewCount={videoInfo.viewCount}
              likeCount={videoInfo.likeCount}
              dislikeCount={videoInfo.dislikeCount}
              subs={videoInfo.subs}
            />
          ) : null}
        </div>
      </div>
      <div className={styles.videoplayerSuggested}>
        <RecommendedVideos />
      </div>
    </div>
  );
};

export default VideoPlayer;
