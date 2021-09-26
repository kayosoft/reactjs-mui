import React, { Component } from "react";
import PropTypes from "prop-types";

// material
import { Stack, TextField, Typography } from "@mui/material";
import withStyles from "@mui/styles/withStyles";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

// Redux - Auth
import { connect } from "react-redux";
import { signupUser } from "../../../redux/actions/userActions";

// ----------------------------------------------------------------------

const styles = (theme) => ({});

class RegisterForm extends Component {
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
    this.setState({
      loading: true,
    });
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
    const {
      classes,
      UI: { loading },
    } = this.props;
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
          <TextField
            id="farm_name"
            name="farm_name"
            type="text"
            label="Farm Name"
            helperText={errors.farm_name}
            error={errors.farm_name ? true : false}
            value={this.state.farm_name}
            onChange={this.handleChange}
            fullWidth
          />

          <TextField
            id="password"
            name="password"
            type="password"
            label="Password"
            helperText={errors.password}
            error={errors.password ? true : false}
            value={this.state.password}
            onChange={this.handleChange}
            fullWidth
          />
          <TextField
            id="confirmPassword"
            name="password_confirmation"
            type="password"
            label="Confirm Password"
            helperText={errors.password_confirmation}
            error={errors.password_confirmation ? true : false}
            value={this.state.password_confirmation}
            onChange={this.handleChange}
            fullWidth
          />

          {errors.general && (
            <Typography variant="body2" className={classes.customError}>
              {errors.general}
            </Typography>
          )}

          <Button
            type="submit"
            fullWidth
            variant="contained"
            size="large"
            className={classes.button}
            disabled={loading}
          >
            SignUp
            {loading && (
              <CircularProgress size={30} className={classes.progress} />
            )}
          </Button>
        </Stack>
      </form>
    );
  }
}
RegisterForm.propTypes = {
  classes: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired,
  signupUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
  UI: state.UI,
});

export default connect(mapStateToProps, { signupUser })(
  withStyles(styles)(RegisterForm)
);
