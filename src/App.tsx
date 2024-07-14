import { Container, AppBar, Toolbar, Typography, Grid } from "@mui/material";
import CurrencyConverter from "./components/CurrencyConverter";

function App() {
  return (
    <Container>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">KR-US 단위 변환기</Typography>
        </Toolbar>
      </AppBar>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <CurrencyConverter />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
