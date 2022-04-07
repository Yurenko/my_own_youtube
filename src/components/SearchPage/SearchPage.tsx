import { useEffect } from "react";
import styles from "./SearchPage.module.css";
import TuneIcon from "@material-ui/icons/Tune";
import ChannelRow from "./../ChannelRow/ChannelRow";
import VideoRow from "./../VideoRow/VideoRow";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";
import Stack from "@mui/material/Stack";
import Alert from "@material-ui/lab/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { UseAppSelector } from "../../hook/reduxHook";
import { getSearchPage } from "../../store/SearchPageReducer/SearchPageSelector";
import { fetchSearchPage } from "../../store/SearchPageReducer/SearchPageThunk";
import { useDispatch } from "react-redux";

export interface IChanelRow {
  channelId?: string;
  image: string;
  title: string;
  subs: string;
  noOfVideos: string;
  description: string;
}

export interface ICreateVideoRow {
  videoId?: string;
  views: string;
  channel: string;
  image: string;
  timestamp: string | null;
  title: string;
  description: string;
}

export type TSearchQuery = {
  searchQuery?: string;
};

const SearchPage = () => {
  const dispatch = useDispatch();
  let { searchQuery } = useParams<TSearchQuery>();

  const { channelRow, videoRows, isLoading, isError } =
    UseAppSelector(getSearchPage);

  useEffect(() => {
    dispatch(fetchSearchPage(searchQuery));
  }, [searchQuery]);

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
    <div className={styles.searchpage}>
      <div className={styles.searchpageFilter}>
        <TuneIcon />
        <h2>Filter</h2>
      </div>
      {isLoading ? (
        <CircularProgress className="loading" color="secondary" />
      ) : null}
      <hr />
      {!isLoading ? (
        <ChannelRow
          key={channelRow.channelId}
          image={channelRow.image}
          title={channelRow.title}
          subs={channelRow.subs}
          noOfVideos={channelRow.noOfVideos}
          description={channelRow.description}
        />
      ) : null}
      <hr />
      {videoRows.map((item: ICreateVideoRow) => {
        return (
          <Link
            key={item.videoId}
            to={`/video/${item.videoId}`}
            className={styles.videoRow}
          >
            <VideoRow
              title={item.title}
              image={item.image}
              views={item.views}
              timestamp={item.timestamp}
              channel={item.channel}
              description={item.description}
            />
          </Link>
        );
      })}
    </div>
  );
};

export default SearchPage;
