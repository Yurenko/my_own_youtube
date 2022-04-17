import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { UseAppSelector } from "../../../hook/reduxHook";
import { getChannelInfo } from "../../../store/ChannelInfoReducer/ChannelInfoSelector";
import { videosChannel } from "../../../store/ChannelInfoReducer/ChannelInfoThunk";
import styles from "./ChannelMainVideo.module.css";
import Video from "../../Video/Video";
import { NavLink } from "react-router-dom";

interface IChannel {
  id?: string;
}

const ChannelMainVideo: React.FC<IChannel> = ({ id }) => {
  const dispatch = useDispatch();
  const { ownVideos } = UseAppSelector(getChannelInfo);

  useEffect(() => {
    dispatch(videosChannel(id));
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.mainVideo}>
          <div className={styles.video}>
            <Video
              videoId={ownVideos.videoId}
              opts={{ width: "424", height: "238" }}
            />
          </div>
          <div className={styles.information}>
            <div className={styles.title}>{ownVideos.title}</div>
            <p className={styles.views}>переглядів {ownVideos.timestamp}</p>
            <p className={styles.description}>{ownVideos.description}</p>
            <NavLink to={`/video/${ownVideos.videoId}`} className={styles.more}>
              Докладніше
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChannelMainVideo;
