import { API_CLIENT } from "../../shared/services/API_CLIENT";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

export const MyblogsBody = () => {
  const [blogs, setblogs] = useState();
  const handleClick = async (event) => {
    event.preventDefault();
    const token = document.cookie.split("=");
    const data = { token: token[1] };
    const result = await API_CLIENT.post(
      process.env.REACT_APP_READ_BY_USER,
      data
    );
    // console.log(result.data);
    const a = result.data.data;
    // console.log("this is a ", a[0].title);
    function getWordStr(str) {
      return str.split(/\s+/).slice(0, 20).join(" ");
    }

    setblogs(
      <>
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
                          <br />
                          <br />
                          <Button
                            variant="primary"
                            type="submit"
                            onClick={async (event) => {
                              event.preventDefault();
                              const result = await API_CLIENT.delete(
                                process.env.REACT_APP_DELETE_BLOG,
                                value
                              );
                              // console.log(
                              //   "this is delete blogs result ",
                              //   result
                              // );
                            }}
                          >
                            Delete this Blog
                          </Button>
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
      <Button variant="primary" type="submit" onClick={handleClick}>
        Get all Blogs
      </Button>
      <br />
      <br />
      <div>
        <div style={{ display: "block", width: "70vw", margin: "auto" }}>
          {blogs}
        </div>
      </div>
    </>
  );
};
