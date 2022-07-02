import { BrowserRouter, Routes, Route } from "react-router-dom";
import Settings from "./pages/Settings";
import Questions from "./pages/Questions";
import FinalScore from "./pages/FinalScore";
import { Box, Container } from "@mui/system";

function App() {
  return (
    <BrowserRouter>
      <Container maxWidth="sm">
        <Box textAlign="center" mt={5}>
        <Routes>
          <Route path="/" element={<Settings />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/score" element={<FinalScore />} />
        </Routes>
        </Box>
      </Container>
    </BrowserRouter>
  );
}

export default App;
