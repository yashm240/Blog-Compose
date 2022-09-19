import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { API_CLIENT } from "../../shared/services/API_CLIENT";

export const Composebox = () => {
  const [title, settitle] = useState("");
  const [body, setbody] = useState("");
  const [category, setcategory] = useState("Asia");
  const [message, setmessage] = useState("");

  const submit = async (event) => {
    event.preventDefault();
    const token = document.cookie.split("=");
    // console.log(token);
    if (title == "" || body == "") {
      alert("Please enter Title and Body");
    } else {
      const data = {
        title: title,
        body: body,
        category: category,
        token: token[1],
      };
      const result = await API_CLIENT.post(process.env.REACT_APP_COMPOSE, data);
      // console.log(result);
      setmessage(result.data.message);
      setbody("");
      setcategory("Asia");
      settitle("");
    }
  };

  return (
    <>
      <div
        style={{
          width: "90vw",
          display: "block",
          margin: "auto",
          borderRadius: "15px",
          border: "1px solid black",
          padding: "15px",
          textAlign: "left",
        }}
      >
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              size="lg"
              style={{ width: "40vw" }}
              type="text"
              placeholder="Enter Title of blog"
              value={title}
              onChange={(event) => {
                event.preventDefault();
                settitle(event.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Body</Form.Label>
            <Form.Control
              as="textarea"
              rows={20}
              placeholder="Body of blog here.."
              value={body}
              onChange={(event) => {
                event.preventDefault();
                setbody(event.target.value);
              }}
            />
          </Form.Group>
          <Form.Select
            aria-label="Default select example"
            value={category}
            onChange={(event) => {
              event.preventDefault();
              setcategory(event.target.value);
            }}
          >
            <option>Category</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Australia">Australia</option>
            <option value="North America">North America</option>
            <option value="South America">South America</option>
            <option value="Africa">Africa</option>
            <option value="Antartica">Antartica</option>
          </Form.Select>
          <br />
          <Button variant="primary" type="submit" onClick={submit}>
            Compose
          </Button>
        </Form>
      </div>
      <div>
        <h1>{message}</h1>
      </div>
    </>
  );
};
