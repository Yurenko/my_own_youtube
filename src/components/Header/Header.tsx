import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
import styles from "./Header.module.css";

export function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.headerLeft}>
        <MenuIcon />
        <img
          className={styles.headerLogo}
          src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
          alt=""
        />
      </div>

      <div className={styles.headerCenter}>
        <input type="text" className={styles.headerCenterInput} />
        <SearchIcon className={styles.headerSearchbutton} />
      </div>

      <div className={styles.headerRight}>
        <VideoCallIcon className={styles.headerIcon} />
        <AppsIcon className={styles.headerIcon} />
        <NotificationsIcon className={styles.headerIcon} />
        <Avatar src="/broken-image.jpg" />
      </div>
    </div>
  );
}
