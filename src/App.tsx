import { ThemeProvider } from 'styled-components';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import Header from './layout/Header';
import GlobalStyles from './theme/GlobalStyles';
import { defaultTheme } from './theme/themeColors';
import Container from './components/Container';
import SubjectPage from './pages/subject/SubjectPage';
import QuizPage from './pages/quiz/QuizPage';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header/>
      <Router>
        <Container>
          <Routes>
            <Route path="/" element={<SubjectPage/>} />
            <Route path="/quiz/:themeId" element={<QuizPage/>} />
          </Routes>
        </Container>
      </Router>
      <GlobalStyles/>
    </ThemeProvider>
  );
}



export default App;
