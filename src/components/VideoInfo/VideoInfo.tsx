import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import ReplyIcon from "@material-ui/icons/Reply";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
import styles from "./VideoInfo.module.css";
import { Avatar, Button } from "@material-ui/core";
import { IVideoInfo } from "../VideoPlayer/VideoPlayer";
import ButtonsVideo from "../ButtonsVideo/ButtonsVideo";
import { useState } from "react";

const VideoInfo: React.FC<IVideoInfo> = ({
  title,
  description,
  publishedDate,
  channelTitle,
  channelImage,
  viewCount,
  likeCount,
  dislikeCount,
  subs,
}) => {
  const shortText = `${description.slice(0, 300)}...`;
  const [isHide, setIsHide] = useState("more");
  const [descriptionShort, setDescriptionShort] = useState(shortText);

  const hendlerInfoVideo = () => {
    if (isHide === "more") {
      setDescriptionShort(description);
      return setIsHide("hide");
    }
    setDescriptionShort(shortText);
    setIsHide("more");
  };

  return (
    <div className={styles.videoinfo}>
      <div className={styles.videoinfoHeadline}>
        <h1>{title}</h1>
      </div>
      <div className={styles.videoinfoStats}>
        <p>
          {viewCount} views • {publishedDate}
        </p>
        <div className={styles.videoinfoLikes}>
          <ButtonsVideo Icon={ThumbUpIcon} title={likeCount} />
          <ButtonsVideo Icon={ThumbDownIcon} title={dislikeCount} />
          <ButtonsVideo Icon={ReplyIcon} title="SHARE" />
          <ButtonsVideo Icon={PlaylistAddIcon} title="SAVE" />
          <ButtonsVideo Icon={MoreHorizIcon} title="" />
        </div>
      </div>
      <hr />
      <div className={styles.videoinfoChannel}>
        <div>
          <Avatar
            className={styles.videoinfoAvatar}
            alt={channelTitle}
            src={channelImage}
          />
          <div className={styles.videoinfoChannelinfo}>
            <h3 className={styles.videoinfoChanneltitle}>{channelTitle}</h3>
            <p className={styles.videoinfoChannelsubs}>{subs} subscribers</p>
          </div>
        </div>
        <div className={styles.videoinfoSubscribe}>
          <Button variant="contained" color="primary">
            SUBSCRIBE
          </Button>
        </div>
      </div>
      <div className={styles.videoinfoChanneldesc}>
        <pre className={styles.description}>{descriptionShort}</pre>
        <Button variant="text" onClick={hendlerInfoVideo}>
          show {isHide}
        </Button>
      </div>
    </div>
  );
};

export default VideoInfo;
