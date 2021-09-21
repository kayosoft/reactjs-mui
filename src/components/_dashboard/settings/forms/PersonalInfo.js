import React, { Component } from "react";
import PropTypes from "prop-types";

// material
import { Stack, TextField, Typography } from "@material-ui/core";
import withStyles from "@material-ui/styles/withStyles";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';

// Redux - Auth
import { connect } from "react-redux";

// ----------------------------------------------------------------------

const styles = (theme) => ({});

class PersonalInfo extends Component {
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
  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.UI.errors) {
  //     this.setState({ errors: nextProps.UI.errors });
  //   }
  // }
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
              id="first_name"
              name="first_name"
              type="text"
              label="First Name"
              helperText={errors.first_name}
              error={errors.first_name ? true : false}
              value={this.state.first_name}
              onChange={this.handleChange}
              fullWidth
            />

            <TextField
              id="last_name"
              name="last_name"
              type="text"
              label="Last Name"
              helperText={errors.last_name}
              error={errors.last_name ? true : false}
              value={this.state.last_name}
              onChange={this.handleChange}
              fullWidth
            />
          </Stack>
        
          <TextField
            id="role"
            name="role"
            type="text"
            label="User Role"
            helperText={errors.role}
            error={errors.role ? true : false}
            value={this.state.role}
            onChange={this.handleChange}
            fullWidth
          />
          
        </Stack>
      </form>
    );
  }
}

export default PersonalInfo;
