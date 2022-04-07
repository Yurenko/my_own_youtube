import styles from "./ChannelRow.module.css";
import Avatar from "@material-ui/core/Avatar";
import { IChanelRow } from "../SearchPage/SearchPage";

const ChannelRow: React.FC<IChanelRow> = ({
  image,
  title,
  subs,
  noOfVideos,
  description,
}) => {
  return (
    <div className={styles.channelrow}>
      <Avatar className={styles.channelrowLogo} alt={title} src={image} />
      <div className={styles.channelrowText}>
        <h4>{title}</h4>
        <p>
          {subs} subscribers • {noOfVideos} videos
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ChannelRow;
