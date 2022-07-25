import { Link } from "react-router-dom";
import "./menu.css";

const Menu = (props) => {
  return (
    <aside className="menu">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Menu;
