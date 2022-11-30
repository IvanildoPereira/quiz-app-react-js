import { ThemeProvider } from 'styled-components';
import Container from './components/Container';
import { subjects } from './data/questions';
import Header from './layout/Header';
import Quiz from './pages/quiz/Quiz';
import Subject from './pages/subject/Subject';
import GlobalStyles from './theme/GlobalStyles';
import { darkTheme, defaultTheme } from './theme/themeColors';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header/>
      <Container>
          <Subject/>
      </Container>
      <GlobalStyles/>
    </ThemeProvider>
  );
}



export default App;
