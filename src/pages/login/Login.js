import React from "react";
import PropTypes from "prop-types";
import { withRouter, Redirect, Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  Container,
  Row,
  Col,
  Button,
  FormGroup,
  FormText,
  Input,
} from "reactstrap";
import Widget from "../../components/Widget/Widget.js";
import Footer from "../../components/Footer/Footer.js";
import { loginUser } from "../../actions/auth.js";

import loginImage from "../../assets/loginImage.svg";
import GoogleIcon from "../../components/Icons/AuthIcons/GoogleIcon.js";
import TwitterIcon from "../../components/Icons/AuthIcons/TwitterIcon.js";
import FacebookIcon from "../../components/Icons/AuthIcons/FacebookIcon.js";
import GithubIcon from "../../components/Icons/AuthIcons/GithubIcon.js";
import LinkedinIcon from "../../components/Icons/AuthIcons/LinkedinIcon.js";

class Login extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  };

  static isAuthenticated(token) {
    if (token) return true;
  }

  constructor(props) {
    super(props);

    this.state = {
      email: "admin@tunzifarm.com",
      password: "password",
    };

    this.doLogin = this.doLogin.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changePassword = this.changePassword.bind(this);
  }

  doLogin(e) {
    e.preventDefault();
    this.props.dispatch(
      loginUser({ email: this.state.email, password: this.state.password })
    );
  }

  changeEmail(event) {
    this.setState({ email: event.target.value });
  }

  changePassword(event) {
    this.setState({ password: event.target.value });
  }

  render() {
    const { from } = this.props.location.state || {
      from: { pathname: "/template" },
    };

    if (
      Login.isAuthenticated(JSON.parse(localStorage.getItem("authenticated")))
    ) {
      return <Redirect to={from} />;
    }

    return (
      <div className="auth-page">
        <Container className="col-12">
          <Row className="d-flex align-items-center">
            <Col xs={0} lg={6} className="left-column">
              <div>
                <img src={loginImage} alt="Error page" />
              </div>
            </Col>
            <Col xs={12} lg={6} className="right-column">
              <Widget className="widget-auth widget-p-lg">
                <div className="d-flex align-items-center justify-content-between py-3 text-center">
                  <p className="auth-header mb-0">TUNZI FARM</p>
                </div>
                <div className="auth-info my-2">
                  <p>Welcome back!, please Signin ypur accont.</p>
                </div>
                <form onSubmit={this.doLogin}>
                  <FormGroup className="my-3">
                    <FormText>Email</FormText>
                    <Input
                      id="email"
                      className="input-transparent pl-3"
                      value={this.state.email}
                      onChange={this.changeEmail}
                      type="email"
                      required
                      name="email"
                      placeholder="Email"
                    />
                  </FormGroup>
                  <FormGroup className="my-3">
                    <div className="d-flex justify-content-between">
                      <FormText>Password</FormText>
                    </div>
                    <Input
                      id="password"
                      className="input-transparent pl-3"
                      value={this.state.password}
                      onChange={this.changePassword}
                      type="password"
                      required
                      name="password"
                      placeholder="Password"
                    />
                  </FormGroup>
                  <Link to="/error">Signin with OTP?</Link>
                  <Link to="/error">Forgot password?</Link>
                  <div className="bg-widget d-flex justify-content-center">
                    <Button
                      className="btn btn-primary rounded-pill my-6"
                      type="submit"
                      color="secondary-red"
                    >
                      Login
                    </Button>
                  </div>
                  <p className="dividing-line my-3">&#8195;Or&#8195;</p>
                  <div className="d-flex align-items-center my-3">
                    <p className="social-label mb-0">Signin with</p>
                    <div className="socials">
                      <Button variant="primary" size="lg">
                        <GoogleIcon />
                      </Button>{" "}
                      <Button variant="primary" size="lg">
                        <FacebookIcon />
                      </Button>
                    </div>
                  </div>
                  <Link to="/register">
                    Don’t have an account? Sign Up here
                  </Link>
                </form>
              </Widget>
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isFetching: state.auth.isFetching,
    isAuthenticated: state.auth.isAuthenticated,
    errorMessage: state.auth.errorMessage,
  };
}

export default withRouter(connect(mapStateToProps)(Login));
