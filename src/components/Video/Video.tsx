import YouTube from "react-youtube";

interface iVideo {
  videoId?: string;
  opts: {
    height: string;
    width: string;
  };
}

const Video: React.FC<iVideo> = ({ videoId, opts }) => {
  return (
    <div>
      <YouTube videoId={videoId} opts={opts} />
    </div>
  );
};

export default Video;
