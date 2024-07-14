import { Container, AppBar, Toolbar, Typography, Grid } from "@mui/material";
import CurrencyConverter from "./components/CurrencyConverter";
import LengthConverter from "./components/LengthConverter";
import WeightConverter from "./components/WeightConverter";
import VolumeConverter from "./components/VolumeConverter";
import ShoeSizeConverter from "./components/ShoeSizeConverter";
import TemperatureConverter from "./components/TemperatureConverter";
import SpeedConverter from "./components/SpeedConverter";
import WorldClock from "./components/WorldClock";

function App() {
  return (
    <Container>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">KR-US 단위 변환기</Typography>
        </Toolbar>
      </AppBar>
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
  );
}

export default App;
