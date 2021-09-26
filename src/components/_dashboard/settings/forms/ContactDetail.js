import React, { Component } from "react";


// material
import { Stack, TextField, Typography } from "@mui/material";


// Redux - Auth
// eslint-disable-next-line 
import { connect } from "react-redux";

// ----------------------------------------------------------------------
// eslint-disable-next-line 
const styles = (theme) => ({});

class ContactDetail extends Component {
  constructor() {
    super();
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      farm_name: "",
      phone_number: "",
      password: "",
      password_confirmation: "",
      errors: {},
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.UI.errors) {
      this.setState({ errors: nextProps.UI.errors });
    }
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({});
    const newUserData = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,

      email: this.state.email,
      farm_name: this.state.farm_name,
      phone_number: this.state.phone_number,
      password: this.state.password,
      password_confirmation: this.state.password_confirmation,
    };
    this.props.signupUser(newUserData, this.props.history);
  };
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  render() {
    const { classes } = this.props;
    const { errors } = this.state;

    return (
      <form noValidate onSubmit={this.handleSubmit}>
        <Stack spacing={3}>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <TextField
              id="email"
              name="email"
              type="email"
              label="Email Address"
              helperText={errors.email}
              error={errors.email ? true : false}
              value={this.state.email}
              onChange={this.handleChange}
              fullWidth
            />

            <TextField
              id="phone_number"
              name="phone_number"
              type="text"
              label="Phone Number"
              helperText={errors.phone_number}
              error={errors.phone_number ? true : false}
              value={this.state.phone_number}
              onChange={this.handleChange}
              fullWidth
            />
          </Stack>

          <TextField
            id="country"
            name="country"
            type="text"
            label="Country"
            helperText={errors.country}
            error={errors.country ? true : false}
            value={this.state.country}
            onChange={this.handleChange}
            fullWidth
          />

          <TextField
            id="Address"
            name="Address"
            type="text"
            label="Address"
            helperText={errors.Address}
            error={errors.Address ? true : false}
            value={this.state.Address}
            onChange={this.handleChange}
            fullWidth
          />

          {errors.general && (
            <Typography variant="body2" className={classes.customError}>
              {errors.general}
            </Typography>
          )}

          
        </Stack>
      </form>
    );
  }
}

export default ContactDetail;
