import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import Avatar from "@material-ui/core/Avatar";
import styles from "./Header.module.css";
import { ReactComponent as Youtube } from "../../assets/icon/youtube.svg";
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.headerLeft}>
        <MenuIcon style={{ padding: "8px" }} />
        <NavLink to="/" className={styles.headerLogo}>
          <Youtube />
        </NavLink>
      </div>

      <div className={styles.headerCenter}>
        <input
          type="text"
          className={styles.headerCenterInput}
          placeholder="Search"
        />
        <div className={styles.headerSearchbutton}>
          <SearchIcon />
        </div>
      </div>

      <ul className={styles.headerRight}>
        <li className={styles.headerIcon}>
          <VideoCallOutlinedIcon fontSize="medium" />
        </li>
        <li className={styles.headerIcon}>
          <AppsIcon style={{ width: 24, height: 24 }} />
        </li>
        <li className={styles.headerIcon}>
          <NotificationsOutlinedIcon style={{ width: 24, height: 24 }} />
        </li>
        <li>
          <Avatar
            src="/broken-image.jpg"
            style={{ width: "32px", height: "32px" }}
          />
        </li>
      </ul>
    </div>
  );
}
