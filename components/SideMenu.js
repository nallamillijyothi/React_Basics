import Grid from "@mui/material/Grid";
import TaylorFarms from "../assets/TaylorFarms.png";
import { sidemenu } from "../utils/mockData";
import { useState } from "react";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { Link, NavLink } from "react-router-dom";

const SideMenu = () => {
  const [isExpanded, setExpanded] = useState(0);

  const handleAccordionChange = (id) => {
    setExpanded( id === isExpanded || isExpanded === 0 ? false : id);
  };
  return (
    <Grid container spacing={2} className="sidemenu_container">
      <Grid item xs={12} className="logo_container">
        <Grid item xs={5}>
          <img src={TaylorFarms} alt="Taylor Farms" className="logo" />
        </Grid>
        <Grid item xs={7}>
          <h4 className="brand_name">Order Flow Pro</h4>
        </Grid>
      </Grid>
      {sidemenu.map((menuItem) => {
        return (
          <Grid item xs={12} key={menuItem.id} className="menu__container">
            {menuItem?.menuItems.length > 0 ? (
              <Accordion
                defaultExpanded
                expanded={menuItem.id === isExpanded || isExpanded === 0}
                onChange={()=>handleAccordionChange(menuItem.id)}
              >
                <AccordionSummary
                  expandIcon={
                    isExpanded === menuItem.id || isExpanded === 0? (
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
                    <span className="menu_heading">{menuItem?.heading}</span>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
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
  );
};

export default SideMenu;
