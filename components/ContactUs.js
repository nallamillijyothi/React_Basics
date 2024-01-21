import { useFormik } from "formik";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';

const ContactUs = () => {
  return (
    <div className="contactus_container">
      <div className="contactus_header">
        <h3>Contact Us</h3>
      </div>
      <div className="contactus_body row p-4 rounded bg-white shadow">
        <form>
          <div className="row row_container">
            <div className="col-6">
              <TextField id="name" label="Full Name" variant="outlined" />
            </div>
            <div className="col-6">
              {" "}
              <TextField
                id="phoneNumber"
                label="Phone Number"
                variant="outlined"
              />
            </div>
          </div>
          <div className="row row_container">
            <div className="col-6">
              <TextField id="email" label="Email" variant="outlined" />
            </div>
            <div className="col-6">
              <TextField
                id="category"
                label="Category"
                variant="outlined"
              />
            </div>
          </div>
          <div className="row row_container">
            <div className="col-12">
              <TextField id="comment" label="Comment" multiline rows={4} />
            </div>
          </div>
          <div className="row row_container">
            <div className="col-12">
            <Button variant="contained" type="submit">Submit</Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
