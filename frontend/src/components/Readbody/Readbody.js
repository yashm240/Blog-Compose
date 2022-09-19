import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { API_CLIENT } from "../../shared/services/API_CLIENT";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

export const Readbody = () => {
  const [category, setcategory] = useState("Asia");
  const [blogs, setblogs] = useState();

  const submit = async () => {
    // console.log(category);
    const URL =
      process.env.REACT_APP_READ_BY_CATEGORY + "?category=" + category;
    const result = await API_CLIENT.get(URL);
    const a = result.data.data;
    // console.log(result);
    function getWordStr(str) {
      return str.split(/\s+/).slice(0, 20).join(" ");
    }
    setblogs(
      <>
        <br />
        <CardGroup>
          {a.map((value) => (
            <div className="book">
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>{value.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {value.category}
                  </Card.Subtitle>
                  <Card.Text>{getWordStr(value.body)}</Card.Text>

                  <Card.Text
                    style={{ color: "blue" }}
                    onClick={(event) => {
                      event.preventDefault();
                      // console.log(value);
                      setblogs(
                        <>
                          <h1>{value.title}</h1>
                          <h3>{value.category}</h3>
                          <h5>{value.body}</h5>
                        </>
                      );
                    }}
                  >
                    <u>read full</u>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}
        </CardGroup>
      </>
    );
  };

  return (
    <>
      <Form.Select
        aria-label="Default select example"
        value={category}
        onChange={(event) => {
          event.preventDefault();
          setcategory(event.target.value);
        }}
        style={{ width: "30vw", margin: "auto" }}
      >
        <option>Category</option>
        <option value="all">All</option>
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
        Get Blogs
      </Button>
      <div>
        <div style={{ display: "block", width: "70vw", margin: "auto" }}>
          {blogs}
        </div>
      </div>
    </>
  );
};
