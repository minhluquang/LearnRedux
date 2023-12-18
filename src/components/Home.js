import FormAddNew from "./FormAddNew";
import Header from "./Header";
import TableUser from "./TableUser";
import Container from "react-bootstrap/Container";

const Home = () => {
  return (
    <>
      <Header />
      <Container>
        <FormAddNew />
        <TableUser />
      </Container>
    </>
  );
};

export default Home;
