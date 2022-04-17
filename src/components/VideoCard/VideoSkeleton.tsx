import Skeleton from "@mui/material/Skeleton";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import CardHeader from "@mui/material/CardHeader";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import IconButton from "@mui/material/IconButton";

function VideoSkeleton() {
  return (
    <Box
      sx={{
        marginBottom: "35px",
        width: "24%",
      }}
    >
      <Skeleton variant="rectangular" width="100%">
        <div style={{ paddingTop: "57%" }} />
      </Skeleton>
      {/* <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      > */}
      <CardHeader
        avatar={
          <Skeleton
            animation="wave"
            variant="circular"
            width={40}
            height={40}
          />
        }
        title={
          <Skeleton
            animation="wave"
            height={15}
            width="80%"
            style={{ marginBottom: 6 }}
          />
        }
        subheader={<Skeleton animation="wave" height={15} width="40%" />}
      />

      {/* <Skeleton
          variant="circular"
          width="36px"
          height="36px"
          sx={{ marginTop: "12px", marginRight: "12px" }}
        >
          <Avatar />
        </Skeleton>

        <Skeleton
          variant="rectangular"
          width="75%"
          height="20px"
          sx={{ borderRadius: "5px" }}
        />
        <Skeleton
          variant="rectangular"
          width="50%"
          height="20px"
          sx={{ borderRadius: "5px" }}
        />  */}
      {/* </Box> */}
    </Box>
  );
}

export default VideoSkeleton;
