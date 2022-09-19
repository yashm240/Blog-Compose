import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { API_CLIENT } from "../../shared/services/API_CLIENT";
import { useCookies } from "react-cookie";
import { Naviagtionbar } from "../../components/Navbar/Navbar";
import { UserNaviagtionbar } from "../Navbar/UserNavbar";

export const LoginBody = () => {
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");
  const [message, setmessage] = useState("");
  const [navbar, setnavbar] = useState(<Naviagtionbar />);
  const [cookies, setCookie] = useCookies(["user"]);

  const submit = async (event) => {
    event.preventDefault();
    const e = ValidateEmail(email);
    if (e) {
      const result = await API_CLIENT.post(process.env.REACT_APP_LOGIN, {
        email: email,
        pass: pass,
      });
      setmessage(result.data.message);
      setemail("");
      setpass("");
      setCookie("token", result.data.token, {
        path: "/",
      });

      setnavbar(<UserNaviagtionbar />);
      // console.log(result.data.token);
    } else {
      // console.log("Login Failed");
    }
  };
  function ValidateEmail(input) {
    var validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (input.match(validRegex)) {
      return true;
    } else {
      alert("Invalid email address!");
      return false;
    }
  }

  return (
    <>
      {navbar}
      <br />
      <br />
      <div
        style={{
          width: "30vw",
          display: "block",
          margin: "auto",
          borderRadius: "15px",
          border: "1px solid black",
          padding: "15px",
        }}
      >
        <h1>Login</h1>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(event) => {
                event.preventDefault();
                setemail(event.target.value);
              }}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={pass}
              onChange={(event) => {
                event.preventDefault();
                setpass(event.target.value);
              }}
            />
          </Form.Group>

          <Button variant="primary" type="submit" onClick={submit}>
            Log In
          </Button>
        </Form>
        <div>
          <h1>{message}</h1>
        </div>
      </div>
    </>
  );
};
