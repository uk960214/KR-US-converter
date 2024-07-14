import { Box } from "@mui/material";
import TimeDisplay from "./TimeDisplay";

const WorldClock = () => {
  return (
    <Box display="flex" justifyContent="space-around">
      <TimeDisplay city="Seoul" timeZone="Asia/Seoul" />
      <TimeDisplay city="New York" timeZone="America/New_York" />
    </Box>
  );
};

export default WorldClock;
