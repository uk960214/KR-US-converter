import { Container, Typography, Grid, Box } from "@mui/material";
import CurrencyConverter from "./components/CurrencyConverter";
import LengthConverter from "./components/LengthConverter";
import WeightConverter from "./components/WeightConverter";
import VolumeConverter from "./components/VolumeConverter";
import ShoeSizeConverter from "./components/ShoeSizeConverter";
import TemperatureConverter from "./components/TemperatureConverter";
import SpeedConverter from "./components/SpeedConverter";
import WorldClock from "./components/WorldClock";
import "./App.css";

function App() {
  return (
    <Container style={{ padding: 0 }} className="gradient-background">
      <div className="overlay">
        <Container style={{ paddingTop: 20 }}>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Typography variant="h5" fontWeight="bold">
              🇰🇷 한국 - 🇺🇸 미국
            </Typography>
            <Typography variant="h5" fontWeight="bold">
              단위 변환기
            </Typography>
          </Box>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <WorldClock />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CurrencyConverter />
            </Grid>
            <Grid item xs={12} sm={6}>
              <LengthConverter />
            </Grid>
            <Grid item xs={12} sm={6}>
              <WeightConverter />
            </Grid>
            <Grid item xs={12} sm={6}>
              <VolumeConverter />
            </Grid>
            <Grid item xs={12} sm={6}>
              <ShoeSizeConverter />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TemperatureConverter />
            </Grid>
            <Grid item xs={12} sm={6}>
              <SpeedConverter />
            </Grid>
          </Grid>
        </Container>
      </div>
    </Container>
  );
}

export default App;
