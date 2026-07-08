import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import AppRoutes from './routes/AppRoutes';
import theme from './theme/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* CssBaseline akan mereset CSS tambahan dari MUI, tapi kita kombinasikan dengan Tailwind */}
      <CssBaseline />
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
