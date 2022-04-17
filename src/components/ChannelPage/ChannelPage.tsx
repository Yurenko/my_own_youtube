import { Avatar, Button } from "@mui/material";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useParams } from "react-router";
import { fetchChannelInfo } from "../../store/ChannelInfoReducer/ChannelInfoThunk";
import styles from "./ChannelPage.module.css";
import { UseAppSelector } from "../../hook/reduxHook";
import { getChannelInfo } from "../../store/ChannelInfoReducer/ChannelInfoSelector";
import TabsContent from "./TabsContent/TabsContent";
import ChannelMainVideo from "./ChannelMainVideo/ChannelMainVideo";

export interface channelInfo {
  id: string;
  title: string;
  image: string;
}

export type channelId = {
  channelId?: string;
};

const ChannelPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { channelInfo, isLoading } = UseAppSelector(getChannelInfo);

  const { channelId } = useParams<channelId>();

  const icon = channelInfo.icon.default.url;
  const simplificationOfSubscribers = channelInfo.subscriberCount / 1000000;

  useEffect(() => {
    dispatch(fetchChannelInfo(channelId));
  }, []);

  return (
    <div className={styles.channelPage}>
      <div className={styles.channelBanner}>
        <img src={channelInfo.image} alt="" className={styles.bannerImage} />
      </div>
      <div className={styles.containerChannel}>
        <div className={styles.headerContainer}>
          <div className={styles.header}>
            {isLoading ? (
              <Avatar
                src="/broken-image.jpg"
                style={{ width: "80px", height: "80px", marginRight: "24px" }}
              />
            ) : (
              <img src={icon} alt="" className={styles.icon} />
            )}
            <div className={styles.innerChannel}>
              <div className={styles.headerTitle}>
                {channelInfo.title}
                <p className={styles.headerSubtitle}>
                  Підписалося {simplificationOfSubscribers} млн користувачів
                </p>
              </div>
              <Button
                variant="contained"
                sx={{
                  width: 135,
                  height: 37,
                  fontWeight: "500",
                  backgroundColor: "#c00",
                }}
              >
                Підписатися
              </Button>
            </div>
          </div>
          <TabsContent />
        </div>
      </div>
      {location.pathname.includes("featured") && (
        <ChannelMainVideo id={channelId} />
      )}
    </div>
  );
};

export default ChannelPage;
