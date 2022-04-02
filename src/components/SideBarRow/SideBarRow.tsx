import styles from "./SideBarRow.module.css";
import { SvgIconProps } from "@material-ui/core/SvgIcon";

interface PropsType {
  selected?: boolean;
  Icon: (props: SvgIconProps) => JSX.Element;
  title: string;
}

const SideBarRow: React.FC<PropsType> = ({ selected, Icon, title }) => {
  return (
    <div className={`${styles.sidebarrow} ${selected ? styles.selected : ""}`}>
      <Icon className={styles.sidebarrowIcon} />
      <h2 className={styles.sidebarrowTitle}>{title}</h2>
    </div>
  );
};

export default SideBarRow;
