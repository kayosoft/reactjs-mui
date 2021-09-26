import React, { Component } from "react";


// material
import { Stack, TextField, Typography, Box, Button } from "@mui/material";


// Redux - Auth
// eslint-disable-next-line 
import { connect } from "react-redux";

// ----------------------------------------------------------------------
// eslint-disable-next-line 
const styles = (theme) => ({});

class ChangePasswordForm extends Component {
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
    // eslint-disable-next-line 
    const { classes } = this.props;
    const { errors } = this.state;

    return (
      <form noValidate onSubmit={this.handleSubmit}>
        <Stack spacing={3}>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <TextField
              id="current_password"
              name="current_password"
              type="text"
              label="Current Password"
              helperText={errors.current_password}
              error={errors.current_password ? true : false}
              value={this.state.current_password}
              onChange={this.handleChange}
              fullWidth
            />
          </Stack>

          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <TextField
              id="new_password"
              name="new_password"
              type="text"
              label="New Passsword"
              helperText={errors.new_password}
              error={errors.new_password ? true : false}
              value={this.state.new_password}
              onChange={this.handleChange}
              fullWidth
            />

            <TextField
              id="confirm_password"
              name="confirm_password"
              type="text"
              label="Confirm Password"
              helperText={errors.confirm_password}
              error={errors.confirm_password ? true : false}
              value={this.state.confirm_password}
              onChange={this.handleChange}
              fullWidth
            />
          </Stack>
          {errors.general && (
            <Typography variant="body2" className={classes.customError}>
              {errors.general}
            </Typography>
          )}

<Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 2
          }}
        >
          <Button
            color="primary"
            variant="contained"
          >
            Save
          </Button>
        </Box>
        </Stack>
      </form>
    );
  }
}

export default ChangePasswordForm;
