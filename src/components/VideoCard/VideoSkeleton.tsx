import Skeleton from "@mui/material/Skeleton";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";

function VideoSkeleton() {
  return (
    <Box
      sx={{
        marginBottom: "35px",
      }}
    >
      <Skeleton variant="rectangular" width="250px" height="140px">
        <div style={{ paddingTop: "57%" }} />
      </Skeleton>
      <Box
        sx={{
          marginTop: "20px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Skeleton variant="circular" width="30px" height="30px">
          <Avatar />
        </Skeleton>
        <Skeleton
          variant="rectangular"
          width={205}
          height={80}
          sx={{ borderRadius: "5px" }}
        />
      </Box>
    </Box>
  );
}

export default VideoSkeleton;
