import styles from "./ButtonsVideo.module.css";
import { SvgIconProps } from "@material-ui/core/SvgIcon";
import { useState } from "react";

interface PropsType {
  selected?: boolean;
  Icon: (props: SvgIconProps) => JSX.Element;
  title: string;
}

const ButtonsVideo: React.FC<PropsType> = ({ selected, Icon, title }) => {
  const [isToggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle((prev) => !prev);
  };
  return (
    <div
      className={`${styles.container} ${isToggle ? styles.selected : ""}`}
      onClick={handleToggle}
    >
      <Icon className={styles.icon} />
      {title}
    </div>
  );
};

export default ButtonsVideo;
