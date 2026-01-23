import TodoList from "./TodoList";
import NavBar from "./NavBar";
import FlashCard from "./FlashCard";
import SimpleApi from "./SimpleApi";
import Login from "./Login";
import UserProfile from "./UserProfile";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Context } from "./Context";
import { useState } from "react";
import "./style/Nav.css";
import "./style/TodoList.css";
function App() {
  const [navCount, setNavCount] = useState(0);
  return (
    <BrowserRouter>
      <Context.Provider value={{ navCount, setNavCount }}>
        <NavBar />
        <Routes>
          <Route path="/" element={<TodoList />} />
          <Route path="/questions" element={<FlashCard />} />
          <Route path="/characters" element={<SimpleApi />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<UserProfile />} />
        </Routes>
      </Context.Provider>
    </BrowserRouter>
  );
}

export default App;
