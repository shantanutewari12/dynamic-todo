import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import TodoApp from './components/TodoApp';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#242424',
    },
  },
  typography: {
    fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <TodoApp />
    </ThemeProvider>
  );
}

export default App;
