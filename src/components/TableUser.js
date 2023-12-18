import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

import Table from "react-bootstrap/Table";
import { fetchAllUser } from "../action/actions";
import { useDispatch, useSelector } from "react-redux";

const TableUser = () => {
  const dispatch = useDispatch();
  const listUsers = useSelector((state) => state.user.listUsers);

  useEffect(() => {
    dispatch(fetchAllUser());
  }, []);

  const handleDelete = (user) => {
    console.log(user);
  };

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
        {listUsers &&
          listUsers.length > 0 &&
          listUsers.map((item) => {
            return (
              <tr key={`users-${item.id}`}>
                <td>{item.id}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>
                  <Button variant="danger" onClick={() => handleDelete(item)}>
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
      </tbody>
    </Table>
  );
};

export default TableUser;
