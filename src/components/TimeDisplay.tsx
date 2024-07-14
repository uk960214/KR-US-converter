import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";

interface TimeDisplayProps {
  city: string;
  timeZone: string;
}

const TimeDisplay: React.FC<TimeDisplayProps> = ({ city, timeZone }) => {
  const [time, setTime] = useState(
    new Date().toLocaleTimeString("en-US", {
      timeZone,
      hour: "2-digit",
      minute: "2-digit",
    })
  );
  const [date, setDate] = useState(
    new Date().toLocaleDateString("en-US", {
      timeZone,
      weekday: "long",
      month: "long",
      day: "numeric",
    })
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(
        new Date().toLocaleTimeString("en-US", {
          timeZone,
          hour: "2-digit",
          minute: "2-digit",
        })
      );
      setDate(
        new Date().toLocaleDateString("en-US", {
          timeZone,
          weekday: "long",
          month: "long",
          day: "numeric",
        })
      );
    }, 1000);

    return () => clearInterval(interval);
  }, [timeZone]);

  return (
    <Box display="flex" flexDirection="column" alignItems="center" my={2}>
      <Typography variant="h6" align="center" sx={{ fontWeight: "bold" }}>
        {city}
      </Typography>
      <Typography variant="subtitle1" align="center">
        {date}
      </Typography>
      <Typography variant="h4" align="center" sx={{ fontWeight: "bold" }}>
        {time}
      </Typography>
    </Box>
  );
};

export default TimeDisplay;
