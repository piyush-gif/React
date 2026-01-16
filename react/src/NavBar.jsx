import { Link } from "react-router-dom";

const NavBar = ({ count }) => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/questions">Questions</Link>
      <Link to="/characters">characters</Link>
      <p>Total count: {count}</p>
    </nav>
  );
};

export default NavBar;
