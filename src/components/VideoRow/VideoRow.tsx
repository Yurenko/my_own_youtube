import { ICreateVideoRow } from "../SearchPage/SearchPage";
import styles from "./VideoRow.module.css";

const VideoRow: React.FC<ICreateVideoRow> = ({
  views,
  description,
  timestamp,
  channel,
  title,
  image,
}) => {
  return (
    <div className={styles.videorow}>
      <img className={styles.videoRowImg} src={image} alt={title} />
      <div className={styles.videorowText}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.videorowHeadline}>
          {channel} • {views} views • {timestamp}
        </p>
        <p className={styles.videorowDescription}>{description}</p>
      </div>
    </div>
  );
};

export default VideoRow;
