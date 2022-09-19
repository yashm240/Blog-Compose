import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { API_CLIENT } from "../../shared/services/API_CLIENT";

export const DeleteUser = () => {
  const submit = async () => {
    const token = document.cookie.split("=");
    const result = await API_CLIENT.delete(
      process.env.REACT_APP_DELETE_USER,
      token
    );
  };
  return (
    <>
      <Button variant="primary" type="submit" onClick={submit}>
        <Link to="/" style={{ color: "white" }}>
          Delete My account Permanently
        </Link>
      </Button>
    </>
  );
};
