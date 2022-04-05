import SideBarRow from "./../SideBarRow/SideBarRow";
import styles from "./SideBar.module.css";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import YouTubeIcon from "@material-ui/icons/YouTube";
import LocalMoviesIcon from "@material-ui/icons/LocalMovies";
import VideogameAssetIcon from "@material-ui/icons/VideogameAsset";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import SportsIcon from "@material-ui/icons/Sports";
import SettingsIcon from "@material-ui/icons/Settings";
import FlagOutlinedIcon from "@material-ui/icons/FlagOutlined";

const SideBar = () => {
  return (
    <div className={styles.sidebar}>
      <SideBarRow selected Icon={HomeIcon} title="Home" />
      <SideBarRow Icon={WhatshotIcon} title="Trending" />
      <SideBarRow Icon={SubscriptionsIcon} title="Subscription" />
      <hr />
      <SideBarRow Icon={VideoLibraryIcon} title="Library" />
      <SideBarRow Icon={HistoryIcon} title="History" />
      <SideBarRow Icon={OndemandVideoIcon} title="Your videos" />
      <SideBarRow Icon={WatchLaterIcon} title="Watch later" />
      <SideBarRow Icon={ThumbUpIcon} title="Liked vides" />
      <hr />
      <p className={styles.subtitle}>MORE FROM YOUTUBE</p>
      <SideBarRow Icon={YouTubeIcon} title="Youtube Premium" />
      <SideBarRow Icon={LocalMoviesIcon} title="Movies" />
      <SideBarRow Icon={VideogameAssetIcon} title="Games" />
      <SideBarRow Icon={LiveTvIcon} title="Live broadcasts" />
      <SideBarRow Icon={SportsIcon} title="Sport" />
      <SideBarRow Icon={SettingsIcon} title="Settings" />
      <SideBarRow Icon={FlagOutlinedIcon} title="Complaints history" />
    </div>
  );
};

export default SideBar;
