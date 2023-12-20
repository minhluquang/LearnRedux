import Dropdown from "react-bootstrap/Dropdown";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useSelector } from "react-redux";

const Header = () => {
  const listUsers = useSelector((state) => state.user.listUsers);

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown
              title={`(${listUsers.length}) Users`}
              id="basic-nav-dropdown"
            >
              {listUsers &&
                listUsers.length > 0 &&
                listUsers.map((item, index) => {
                  return (
                    <Dropdown.Item key={`users-${index}`} href="#">
                      {item.email}
                    </Dropdown.Item>
                  );
                })}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
