import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
// import Cookies from 'js-cookie';
import LuggageIcon from "@mui/icons-material/Luggage";
import Dropdown from "react-bootstrap/Dropdown";
import Cookies from "js-cookie-remove-all";

export const UserNaviagtionbar = () => {
  const logout = () => {
    Cookies.removeAll();
  };
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
              <Link to="/userhome" className="nav-link">
                Home
              </Link>
              <Link to="/compose" className="nav-link">
                Compose
              </Link>
              <Link to="/readmyblog" className="nav-link">
                My Blogs
              </Link>
              <Link to="/userreadbycategory" className="nav-link">
                Read
              </Link>
              <Dropdown style={{ position: "absolute", right: "8vw" }}>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  My Account
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Link
                    to="/"
                    className="nav-link"
                    style={{ color: "black" }}
                    onClick={logout}
                  >
                    LogOut
                  </Link>
                  <Link
                    to="/updateuser"
                    className="nav-link"
                    style={{ color: "black" }}
                  >
                    Update Account Info
                  </Link>
                  <Link
                    to="/deleteuser"
                    className="nav-link"
                    style={{ color: "black" }}
                  >
                    Delete My Account
                  </Link>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Container>
        </Navbar>
      </div>
    </>
  );
};
