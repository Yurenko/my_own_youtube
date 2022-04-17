import styles from "./TabsContent.module.css";
import SearchIcon from "@mui/icons-material/Search";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router";

const buttonsMainChannel = [
  {
    id: 1,
    title: "Головна",
    path: `/featured`,
    isFlag: true,
  },
  {
    id: 2,
    title: "Відео",
    path: `/videos`,
    isFlag: false,
  },
  {
    id: 3,
    title: "Списки відтворення",
    path: `/playlists`,
    isFlag: false,
  },
  {
    id: 4,
    title: "Спільнота",
    path: `/community`,
    isFlag: false,
  },
  {
    id: 5,
    title: "Канали",
    path: `/channels`,
    isFlag: false,
  },
  {
    id: 6,
    title: "Про канал",
    path: `/about`,
    isFlag: false,
  },
  {
    id: 7,
    title: <SearchIcon sx={{ paddingTop: "20px" }} />,
    path: "",
    isFlag: false,
  },
];

const TabsContent = () => {
  const { channelId } = useParams<string>();

  const handleClick = (id: number) => {
    buttonsMainChannel.map((item) => {
      item.isFlag = false;
      if (item.id === id) {
        return (item.isFlag = !item.isFlag);
      }
    });
  };
  return (
    <ul className={styles.tabsContainer}>
      {buttonsMainChannel.map((item) => (
        <li
          key={item.id}
          className={`${styles.tabsList} ${item.isFlag ? styles.selected : ""}`}
          onClick={() => handleClick(item.id)}
        >
          <NavLink
            to={`/channel/${channelId}${item.path}`}
            className={`${styles.tabsItem} ${styles.selected}`}
          >
            {item.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default TabsContent;
