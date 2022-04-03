import Avatar from "@material-ui/core/Avatar";
import styles from "./VideoCard.module.css";

const VideoCard = ({
  image,
  title,
  channel,
  views,
  timestamp,
  channelImage,
}) => {
  return (
    <div className={styles.videocard}>
      <img className={styles.videocardImage} src={image} alt="" />
      <div className={styles.videocardInfo}>
        <Avatar
          className={styles.videocardAvatar}
          alt={channel}
          src={channelImage}
        />
        <div className={styles.videocardText}>
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>
            {views} views • {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
