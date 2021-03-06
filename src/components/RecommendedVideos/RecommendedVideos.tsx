import { useEffect } from "react";
import VideoCard from "./../VideoCard/VideoCard";
import styles from "./RecommendedVideos.module.css";
import Alert from "@material-ui/lab/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";
import { firstRecomendedVideos } from "../../store/api/youtubeApi";
import { isErrorAction } from "../../store/RecommendedVideosReducer/RecommendedVideoActions";
import { getRecommendedVideos } from "../../store/RecommendedVideosReducer/RecommendedVideoSelectors";
import VideoSkeleton from "../VideoCard/VideoSkeleton";
import { UseAppSelector } from "../../hook/reduxHook";
import { createVideoCards } from "../../store/RecommendedVideosReducer/RecommendedThunk";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export interface IVideoCards {
  videoId?: string;
  image: string;
  title: string;
  channel: string;
  views: string;
  timestamp: string | null;
  channelImage: string;
}

interface IRecommendedVideos {
  isSelectedVideo?: boolean;
}

const RecommendedVideos: React.FC<IRecommendedVideos> = ({
  isSelectedVideo,
}) => {
  const dispatch = useDispatch();
  const { videoCards, isLoading, isError } =
    UseAppSelector(getRecommendedVideos);

  useEffect(() => {
    firstRecomendedVideos()
      .then((res) => {
        dispatch(createVideoCards(res));
      })
      .catch((error) => {
        console.log(error);
        dispatch(isErrorAction(true));
      });
  }, []);

  if (isError) {
    return (
      <Stack sx={{ width: "100%" }}>
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          Video <strong>not</strong> found!
        </Alert>
      </Stack>
    );
  }
  return (
    <div
      className={
        isSelectedVideo
          ? styles.recommendedvideosSelected
          : styles.recommendedvideos
      }
    >
      <div className={styles.recommendedvideosVideos}>
        {(isLoading ? Array.from(new Array(12)) : videoCards).map(
          (item: IVideoCards) => (
            <>
              {item ? (
                <Link
                  key={item.videoId}
                  to={`/video/${item.videoId}`}
                  className={
                    isSelectedVideo ? styles.isSelectedVideo : styles.linkVideo
                  }
                >
                  <VideoCard
                    key={item.videoId}
                    title={item.title}
                    image={item.image}
                    views={item.views}
                    timestamp={item.timestamp}
                    channel={item.channel}
                    channelImage={item.channelImage}
                  />
                </Link>
              ) : (
                <VideoSkeleton />
              )}
            </>
          )
        )}
      </div>
    </div>
  );
};

export default RecommendedVideos;
