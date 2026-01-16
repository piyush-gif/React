import TodoList from "./TodoList";
import "./App.css";
import NavBar from "./NavBar";
import FlashCard from "./FlashCard";
import SimpleApi from "./SimpleApi";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path="/questions" element={<FlashCard />} />
        <Route path="/characters" element={<SimpleApi />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
