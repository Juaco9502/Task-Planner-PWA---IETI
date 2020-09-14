import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import LockIcon from "@material-ui/icons/LockOutlined";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import "./Login.css";


export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handlePassword(e) {
    this.setState({
      password: e.target.value
    });
  }
  handleEmail(e) {
    this.setState({
      email: e.target.value
    });
  }
  handleSubmit(e) {
    
    const user = "juan.ortiz-m@mail.escuelaing.edu.co";
    const pass = "1234";
    
    e.preventDefault();


    if (
      localStorage.getItem("email") === null ||
      localStorage.getItem("password") === null
    ) {
      if (this.state.email !== user || this.state.password !== pass) {
        alert("Correo o password incorrecto");
        return;
      }
    } else if (
      localStorage.getItem("email") !== this.state.email ||
      localStorage.getItem("password") !== this.state.password
    ) {
      alert("Correo o password incorrecto");
      return;
    }
    localStorage.setItem("email", this.state.email);
    localStorage.setItem("password", this.state.password);
    this.props.login();
    document.location.href = "/home";
  }
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <main className="layout">
          <Paper className="paper">
            <Avatar className="avatar">
              <LockIcon />
            </Avatar>
            <Typography variant="h2">Sign in</Typography>
            <form className="form" onSubmit={this.handleSubmit}>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="email">Email Address</InputLabel>
                <Input
                  id="email"
                  name="email"
                  autoComplete="email"
                  onChange={this.handleEmail}
                  autoFocus
                />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input
                  name="password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={this.handlePassword}
                />
              </FormControl>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className="submit"
              >
                Sign in
              </Button>
            </form>
          </Paper>
        </main>
      </React.Fragment>
    );
  }
}
