import YouTube from "react-youtube";
import { VideoParams } from "../VideoPlayer/VideoPlayer";

const Video: React.FC<VideoParams> = ({ videoId }) => {
  const opts = {
    height: "500",
    width: "100%",
  };
  return (
    <div>
      <YouTube videoId={videoId} opts={opts} />
    </div>
  );
};

export default Video;
