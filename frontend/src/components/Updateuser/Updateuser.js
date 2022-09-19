import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { API_CLIENT } from "../../shared/services/API_CLIENT";

export const Updateuser = () => {
  const [name, setname] = useState("");

  const [pass, setpass] = useState("");
  const [cpass, setcpass] = useState("");
  const [message, setmessage] = useState("");

  const submit = async (event) => {
    event.preventDefault();
    // console.log("name is ", name);

    // console.log("pass is ", pass);
    // console.log("pass is ", cpass);
    const n = ValidateName(name);

    const token = document.cookie.split("=");
    // console.log("token is", token[1]);

    const p = ValidatePass(pass, cpass);
    if (n && p) {
      const result = await API_CLIENT.update(
        process.env.REACT_APP_UPDATE_USER,
        {
          name: name,
          pass: pass,
          token: token[1],
        }
      );

      setname("");

      setpass("");
      setcpass("");
      setmessage(result.data);

      // console.log(result);
    } else {
      // console.log("Update Account Failed");
    }
  };
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
          <Form.Label>New Name</Form.Label>
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
          <Form.Label>New Password</Form.Label>
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
          <Form.Label>Confirm New Password</Form.Label>
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
          Update
        </Button>
      </Form>
      <div>
        <h1>{message}</h1>
      </div>
    </>
  );
};
