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

export interface IVideoCards {
  videoId?: string;
  image: string;
  title: string;
  channel: string;
  views: string;
  timestamp: string | null;
  channelImage: string;
}

const RecommendedVideos = () => {
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
      <Stack sx={{ flex: 0.8 }}>
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          Video <strong>not</strong> found!
        </Alert>
      </Stack>
    );
  }
  return (
    <div className={styles.recommendedvideos}>
      <div className={styles.recommendedvideosVideos}>
        {(isLoading ? Array.from(new Array(12)) : videoCards).map(
          (item: IVideoCards) => (
            <>
              {item ? (
                <VideoCard
                  key={item.videoId}
                  title={item.title}
                  image={item.image}
                  views={item.views}
                  timestamp={item.timestamp}
                  channel={item.channel}
                  channelImage={item.channelImage}
                />
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
