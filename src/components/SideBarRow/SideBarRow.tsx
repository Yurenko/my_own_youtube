import styles from "./SideBarRow.module.css";
import { SvgIconProps } from "@material-ui/core/SvgIcon";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";

interface PropsType {
  path: string;
  Icon: (props: SvgIconProps) => JSX.Element;
  title: string;
}

const SideBarRow: React.FC<PropsType> = ({ path, Icon, title }) => {
  let location = useLocation();

  const [selected, setSelected] = useState(false);

  useEffect(() => {
    if (location.pathname === path) {
      setSelected(true);
    } else {
      setSelected(false);
    }
  }, [location.pathname]);

  return (
    <NavLink
      to={path}
      className={`${styles.sidebarrow} ${selected ? styles.selected : ""}`}
    >
      <Icon className={styles.sidebarrowIcon} />
      <h2 className={styles.sidebarrowTitle}>{title}</h2>
    </NavLink>
  );
};

export default SideBarRow;
