import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import LuggageIcon from "@mui/icons-material/Luggage";

export const Naviagtionbar = () => {
  return (
    <>
      <div>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">
              <div className="navbaricon">
                <LuggageIcon
                  style={{ color: "white", display: "inline-block" }}
                />
                <div style={{ display: "inline-block" }}>Ghummakad</div>
              </div>
            </Navbar.Brand>
            <Nav className="me-auto">
              <Link to="/" className="nav-link">
                Home
              </Link>
              <Link to="/login" className="nav-link">
                Login
              </Link>
              <Link to="/register" className="nav-link">
                Register
              </Link>
              <Link to="/readbycategory" className="nav-link">
                Read
              </Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    </>
  );
};