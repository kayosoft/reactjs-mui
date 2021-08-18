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
import Login from "../login/Login.js";

import loginImage from "../../assets/registerImage.svg";
import SofiaLogo from "../../components/Icons/SidebarIcons/SofiaLogo.js";
import GoogleIcon from "../../components/Icons/AuthIcons/GoogleIcon.js";
import TwitterIcon from "../../components/Icons/AuthIcons/TwitterIcon.js";
import FacebookIcon from "../../components/Icons/AuthIcons/FacebookIcon.js";
import GithubIcon from "../../components/Icons/AuthIcons/GithubIcon.js";
import LinkedinIcon from "../../components/Icons/AuthIcons/LinkedinIcon.js";
import { registerUser } from "../../actions/register.js";

class Register extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };

    this.changeEmail = this.changeEmail.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.doRegister = this.doRegister.bind(this);
  }

  changeEmail(event) {
    this.setState({ email: event.target.value });
  }

  changePassword(event) {
    this.setState({ password: event.target.value });
  }

  doRegister(e) {
    e.preventDefault();
    this.props.dispatch(
      registerUser({
        creds: {
          email: this.state.email,
          password: this.state.password,
        },
        history: this.props.history,
      })
    );
  }

  render() {
    const { from } = this.props.location.state || {
      from: { pathname: "/app" },
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
                <div className="align-items-left justify-content-between py-3">
                  <p className="auth-header mb-0">Create your account</p>
                  <p>Fill the form to register.</p>
                </div>
                <form onSubmit={this.doRegister}>
                  <Row className="d-flex align-items-center">
                    <Col className="first-name">
                      <FormGroup className="my-3">
                        <FormText>First Name</FormText>
                        <Input
                          id="fName"
                          className="input-transparent pl-3"
                          value={this.state.fname}
                          onChange={this.changeFname}
                          type="text"
                          required
                          name="fname"
                          placeholder="Jalaludin"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="last-name">
                      <FormGroup className="my-3">
                        <FormText>Last Name</FormText>
                        <Input
                          id="lName"
                          className="input-transparent pl-3"
                          value={this.state.lName}
                          onChange={this.changeLname}
                          type="text"
                          required
                          name="lName"
                          placeholder="Kalumba"
                        />
                      </FormGroup>
                    </Col>
                  </Row>

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
                      placeholder="kalj@yourmail.com.com"
                    />
                  </FormGroup>
                  <FormGroup className="my-3">
                    <FormText>Phone Number</FormText>
                    <Input
                      id="phone"
                      className="input-transparent pl-3"
                      value={this.state.phone}
                      onChange={this.changephone}
                      type="phone"
                      required
                      name="phone"
                      placeholder="+256754748000"
                    />
                  </FormGroup>
                  <FormGroup className="my-3">
                    <div className="d-flex justify-content-between">
                      <FormText>Country</FormText>
                    </div>
                    <Input
                      id="country"
                      className="input-transparent pl-3"
                      value={this.state.Country}
                      onChange={this.changeCountry}
                      type="Country"
                      required
                      name="Country"
                      placeholder="Place your Country here"
                    />
                  </FormGroup>
                  <FormGroup className="my-3">
                    <div className="d-flex justify-content-between">
                      <FormText>District</FormText>
                    </div>
                    <Input
                      id="district"
                      className="input-transparent pl-3"
                      value={this.state.District}
                      onChange={this.changeDistrict}
                      type="district"
                      required
                      name="district"
                      placeholder="Place your district here"
                    />
                  </FormGroup>
                  <div className="bg-widget d-flex justify-content-center">
                    <Button
                      style={{
                        color: "#fff",
                        width: 400,
                        backgroundColor: "#169BD7",
                        height: 40,
                        borderRadius: 5,
                        borderColor: "#169BD7",
                        fontSize: "30",
                        fontWeight: "bolder",
                      }}
                      className="my-3"
                      type="submit"
                    >
                      Sign Up
                    </Button>
                  </div>
                  <p className="dividing-line my-3">
                    &#8195;Or&#8195;Signup&#8195;
                  </p>
                  <div className="d-flex align-items-center justify-content-center my-3">
                    <div className="socials">
                      <Button
                        style={{
                          color: "#253B80",
                          width: 170,
                          backgroundColor: "#fff",
                          height: 40,
                          borderRadius: 5,
                          borderColor: "#169BD7",
                          fontSize: "30",
                          fontWeight: "bolder",
                          marginTop: 10,
                          marginBottom: 5,
                          marginRight: 5,
                        }}
                        className="SocialBtn"
                        size="lg"
                      >
                        <GoogleIcon /> Google
                      </Button>
                      {"  "}
                    </div>
                    <div className="socials">
                      <Button
                        style={{
                          color: "#253B80",
                          width: 170,
                          backgroundColor: "#fff",
                          height: 40,
                          borderRadius: 5,
                          borderColor: "#253B80",
                          fontSize: "30",
                          fontWeight: "bolder",
                          marginTop: 10,
                          marginBottom: 5,
                          marginLeft: 5,
                        }}
                        size="lg"
                      >
                        <FacebookIcon /> Facebook
                      </Button>
                    </div>
                  </div>
                  <p>
                    Already have an account, <Link to="/login">Signin</Link>
                  </p>
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

export default withRouter(connect(mapStateToProps)(Register));
