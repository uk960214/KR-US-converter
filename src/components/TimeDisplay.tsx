import { useState, useEffect } from "react";
import { Typography } from "@mui/material";

function TimeDisplay() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [newYorkTime, setNewYorkTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setCurrentTime(now);
      setNewYorkTime(
        new Date(now.toLocaleString("en-US", { timeZone: "America/New_York" }))
      );
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <Typography variant="h6">현재 시간</Typography>
      <Typography variant="body1">
        한국 시간: {currentTime.toLocaleTimeString()}
      </Typography>
      <Typography variant="body1">
        뉴욕 시간: {newYorkTime.toLocaleTimeString()}
      </Typography>
    </div>
  );
}

export default TimeDisplay;
