import Grid from "@mui/material/Grid";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const Navbar = () => {
  return (
    <Grid container item xs={12} className="navbar_container">
      <Grid item xs={12} md={6}>
        <h2 className="dark_cloud title">Create Order</h2>
      </Grid>
      <Grid item xs={12} md={6} className="navbar_profilr_container">
        <Grid item xs={4} className="navbar_second_grid">
          <NotificationsNoneIcon className="profile_icon"/>
        </Grid>
        <Grid item xs={8} className="navbar_second_grid profile_section">
          <div>
            <AccountCircleIcon className="profile_icon"/>
          </div>
          <div className="user_profile_info">
            <h6 className="user_name dark_cloud">Anita | Super Admin</h6>
            <small className="dark_cloud">example@gmail.com</small>
          </div>
          <div>
            <MoreVertIcon className="profile_icon"/>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Navbar;
