import { Link } from "react-router-dom";
import { Context } from "./Context";
import { useContext } from "react";
const NavBar = ({ count }) => {
  const { navCount, setNavCount } = useContext(Context);
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/questions">Questions</Link>
      <Link to="/characters">characters</Link>

      <p>Total count: {navCount}</p>
    </nav>
  );
};

export default NavBar;
