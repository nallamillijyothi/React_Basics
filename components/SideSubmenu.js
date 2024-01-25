import { NavLink } from "react-router-dom";

const SideSubmenu = (props) => {
  const { menuItem } = props;
  return (
    <>
      {menuItem?.menuItems.map((item) => {
        return (
          <div className="submenu_container" key={item?.id}>
            <NavLink
              to={item?.path}
              className="submenu_item"
              activeclassname="active"
            >
              {item?.submenu}
            </NavLink>
          </div>
        );
      })}
    </>
  );
};

export default SideSubmenu;
