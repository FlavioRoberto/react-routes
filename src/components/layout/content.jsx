import "./content.css";
import { Routes, Route } from "react-router-dom";
import MenuService from "../../data/services/menu.service";

const Content = () => {
    const menus = new MenuService().getMenus();

    return (
        <main className="content">
            <Routes>
                {menus.map((menu, i) => <Route key={i} exact path={menu.path} element={menu.element} />)}
            </Routes>
        </main>
    );
};

export default Content;
