import { Link } from "react-router-dom";
import MenuService from "../../data/services/menu.service";
import "./menu.css";

const Menu = () => {
    const routes = new MenuService().getRoutes();

    const routesLi = routes.map((route, i) => {
        return <li>
            <Link key={i} to={route.to}>{route.title}</Link>
        </li>
    });

    return (
        <aside className="menu">
            <nav>
                <ul>
                    {routesLi}
                </ul>
            </nav>
        </aside>
    );
};

export default Menu;
