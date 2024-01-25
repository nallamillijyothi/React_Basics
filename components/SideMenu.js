import Grid from "@mui/material/Grid";
import TaylorFarms from "../assets/TaylorFarms.png";
import { sidemenu } from "../utils/mockData";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Popper from "@mui/material/Popper";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Link, NavLink } from "react-router-dom";
import SideSubmenu from "./SideSubmenu";
import Fade from "@mui/material/Fade";
import Paper from "@mui/material/Paper";

const SideMenu = (props) => {
  const [menu, setMenu] = useState(sidemenu);
  const [isPopupVisible, setPopupVisible] = useState(false);
  const { isMenuExpanded } = props;
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState();
  const [popperContent, setPopperContent] = useState();

  const handleAccordionChange = (id) => {
    const updatedMenu = menu.map((item) => {
      if (item.id === id) {
        return { ...item, isExpanded: !item?.isExpanded };
      }
      return item;
    });
    setMenu(updatedMenu);
  };

  const toggleSideMenu = (menuFlag) => {
    setOpen(false);
    setPlacement();
    setPopperContent();
    props.toggleMenu(menuFlag);
  };

  const handleClick = (newPlacement, submenuContent) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
    setPopperContent(submenuContent);
  };

  return (
    <>
      {isMenuExpanded ? (
        <Grid container spacing={2} className="sidemenu_container">
          <Grid item xs={12} className="logo_container">
            <Grid item xs={4}>
              <img src={TaylorFarms} alt="Taylor Farms" className="logo" />
            </Grid>
            <Grid item xs={7} className="brand_name_container">
              <h4 className="brand_name">Order Flow Pro</h4>
            </Grid>
            <Grid item xs={1} className="menu_toggle_container">
              <IconButton
                aria-label="delete"
                size="small"
                onClick={() => toggleSideMenu(false)}
              >
                <NavigateBeforeIcon className="menu_toggle_btn" />
              </IconButton>
            </Grid>
          </Grid>
          {menu.map((menuItem) => {
            return (
              <Grid item xs={12} key={menuItem.id} className="menu__container">
                {menuItem?.menuItems.length > 0 ? (
                  <Accordion
                    defaultExpanded
                    expanded={menuItem?.isExpanded}
                    onChange={() => handleAccordionChange(menuItem.id)}
                  >
                    <AccordionSummary
                      expandIcon={
                        menuItem?.isExpanded ? (
                          <RemoveCircleOutlineIcon />
                        ) : (
                          <AddCircleOutlineIcon />
                        )
                      }
                      aria-controls="panel1-content"
                      id="panel1-header"
                    >
                      <Typography>
                        <i className={menuItem?.icon}></i>
                        <span className="menu_heading">
                          {menuItem?.heading}
                        </span>
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        <SideSubmenu menuItem={menuItem} />
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                ) : (
                  <div className="submenu_container">
                    <NavLink
                      exact="true"
                      to={menuItem?.path}
                      className="submenu_item single_menu_item"
                      activeclassname="active"
                    >
                      <i className={menuItem?.icon}></i>
                      {menuItem?.heading}
                    </NavLink>
                  </div>
                )}
              </Grid>
            );
          })}
        </Grid>
      ) : (
        <Grid container spacing={2} className="sidemenu_container">
          <Grid item xs={12} className="logo_container">
            <Grid item xs={11}>
              <img src={TaylorFarms} alt="Taylor Farms" className="logo" />
              <h6>
                <small className="brand_name">Order Flow Pro</small>
              </h6>
            </Grid>
            <Grid item xs={1} className="menu_toggle_container">
              <IconButton
                aria-label="delete"
                size="small"
                onClick={() => toggleSideMenu(true)}
              >
                <NavigateNextIcon className="menu_toggle_btn" />
              </IconButton>
            </Grid>
          </Grid>
          {menu.map((menuItem) => {
            return (
              <Grid
                item
                xs={12}
                key={menuItem.id}
                className="collapsed_menu__container"
              >
                {menuItem.menuItems.length > 0 ? (
                  <div
                    className="collapsed_menu_items"
                    onClick={handleClick("right-start", menuItem)}
                  >
                    <i className={menuItem?.icon}></i>
                  </div>
                ) : (
                  <div
                  className="collapsed_menu_items"
                >
                                    <NavLink
                    to={menuItem?.path}
                    className="submenu_item collapsed_submenuitem"
                    activeclassname="active"
                  >
                    <i className={menuItem?.icon}></i>
                  </NavLink>
                </div>
                )}
                <Popper
                  sx={{ zIndex: 1200 }}
                  open={open}
                  anchorEl={anchorEl}
                  placement={placement}
                  transition
                >
                  {({ TransitionProps }) => (
                    <Fade {...TransitionProps} timeout={350}>
                      <Paper>
                        <Typography sx={{ p: 2 }}>
                          {popperContent?.menuItems.map((item) => {
                            return (
                              <NavLink
                                to={item?.path}
                                className="submenu_item"
                                activeclassname="active"
                              >
                                {item?.submenu}
                              </NavLink>
                            );
                          })}
                        </Typography>
                      </Paper>
                    </Fade>
                  )}
                </Popper>
              </Grid>
            );
          })}
        </Grid>
      )}
    </>
  );
};

export default SideMenu;
