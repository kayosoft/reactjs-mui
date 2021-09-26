import React, { Component } from "react";
import { Link as RouterLink } from "react-router-dom";

// material
import { Link, Stack, TextField, Button, Typography } from "@mui/material";
import withStyles from "@mui/styles/withStyles";
import CircularProgress from "@mui/material/CircularProgress";

// Redux - Auth
import { connect } from "react-redux";
import { loginUser } from "../../../redux/actions/userActions";

// ----------------------------------------------------------------------
const styles = (theme) => ({});
class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {},
    };
  }

  //const [showPassword, setShowPassword] = useState(false);

  componentWillReceiveProps(nextProps) {
    if (nextProps.UI.errors) {
      this.setState({ errors: nextProps.UI.errors });
    }
  }
  // Handle submit
  handleSubmit = (event) => {
    event.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password,
    };
    //Push history
    this.props.loginUser(userData, this.props.navigate);
  };
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  // Show password function
  // handleShowPassword = () => {
  //   constsetShowPassword((show) => !show);
  // };
  render() {
    const {
      classes,
      UI: { loading },
    } = this.props;
    const { errors } = this.state;
    return (
      <form noValidate onSubmit={this.handleSubmit}>
        <Stack spacing={3}>
          <TextField
            fullWidth
            id="email"
            name="email"
            type="email"
            label="Email address"
            helperText={errors.email}
            error={errors.email ? true : false}
            value={this.state.email}
            onChange={this.handleChange}
          />

          <TextField
            fullWidth
            type={"password"}
            label="Password"
            name="password"
            id="password"
            helperText={errors.password}
            error={errors.password ? true : false}
            value={this.state.password}
            onChange={this.handleChange}
          />
        </Stack>

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ my: 2 }}
        >
          <Link component={RouterLink} variant="subtitle2" to="#">
            Signin with OTP?
          </Link>

          <Link component={RouterLink} variant="subtitle2" to="#">
            Forgot password?
          </Link>
        </Stack>
        {errors.general && (
          <Typography variant="body2" className={classes.customError}>
            {errors.general}
          </Typography>
        )}
        <Button
          fullWidth
          size="large"
          variant="contained"
          type="submit"
          className={classes.button}
          disabled={loading}
        >
          Login
          {loading && (
            <CircularProgress size={30} className={classes.progress} />
          )}
        </Button>
      </form>
    );
  }
}
const mapStateToProps = (state) => ({
  user: state.user,
  UI: state.UI,
});

const mapActionsToProps = {
  loginUser,
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(styles)(LoginForm));
