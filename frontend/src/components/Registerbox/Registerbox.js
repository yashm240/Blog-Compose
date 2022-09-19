import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { API_CLIENT } from "../../shared/services/API_CLIENT";

export const RegisterBody = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");
  const [cpass, setcpass] = useState("");
  const [message, setmessage] = useState("");

  const submit = async (event) => {
    event.preventDefault();
    // console.log("name is ", name);
    // console.log("email is ", email);
    // console.log("pass is ", pass);
    // console.log("pass is ", cpass);
    const n = ValidateName(name);
    const e = ValidateEmail(email);
    const p = ValidatePass(pass, cpass);
    if (n && e && p) {
      const result = await API_CLIENT.post(process.env.REACT_APP_REGISTER, {
        name: name,
        email: email,
        pass: pass,
      });

      setname("");
      setemail("");
      setpass("");
      setcpass("");
      setmessage(result.data);

      // console.log(result);
    } else {
      // console.log("Registration Failed");
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
  function ValidateName(input) {
    if (input == "") {
      alert("Invalid Name");
      return false;
    } else {
      return true;
    }
  }
  function ValidatePass(a, b) {
    if (a == b && a != "") {
      return true;
    } else if (a == b && a == "") {
      alert("Invalid Password");
      return false;
    } else {
      alert("Passwords Do not match");
      return false;
    }
  }

  return (
    <>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Full Name"
            value={name}
            onChange={(event) => {
              event.preventDefault();
              setname(event.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3">
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

        <Form.Group className="mb-3">
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
        <Form.Group className="mb-3">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            value={cpass}
            onChange={(event) => {
              event.preventDefault();
              setcpass(event.target.value);
            }}
          />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={submit}>
          Submit
        </Button>
      </Form>
      <div>
        <h1>{message}</h1>
      </div>
    </>
  );
};
