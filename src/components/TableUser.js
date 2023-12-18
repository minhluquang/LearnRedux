import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

import axios from "axios";

import Table from "react-bootstrap/Table";

const TableUser = () => {
  const [userList, setUserList] = useState([]);

  const fetchAllUser = async () => {
    const res = await axios.get("http://localhost:8080/users/all");
    if (res && res.data) {
      setUserList(res.data);
    }
  };

  useEffect(() => {
    fetchAllUser();
  }, []);

  const handleDelete = (user) => {
    console.log(user);    
  }

  return (
    <Table striped bordered hover className="mt-3">
      <thead>
        <tr>
          <th>ID</th>
          <th>Username</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {userList.map((item) => {
          return (
            <tr key={`users-${item.id}`}>
              <td>{item.id}</td>
              <td>{item.username}</td>
              <td>{item.email}</td>
              <td>
                <Button variant="danger" onClick={() => handleDelete(item)}>Delete</Button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default TableUser;
