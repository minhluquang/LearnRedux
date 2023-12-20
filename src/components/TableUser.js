import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

import Table from "react-bootstrap/Table";
import { deleteUserRedux, fetchAllUser } from "../action/actions";
import { useDispatch, useSelector } from "react-redux";

const TableUser = () => {
  const dispatch = useDispatch();
  const listUsers = useSelector((state) => state.user.listUsers);

  const isLoading = useSelector((state) => state.user.isLoading);
  const isError = useSelector((state) => state.user.isError);

  useEffect(() => {
    dispatch(fetchAllUser());
  }, []);

  const handleDelete = (user) => {
    dispatch(deleteUserRedux(user.id));
  };

  return (
    <>
      {isError ? (
        <>Something went wrongs, please try again...</>
      ) : (
        <>
          {isLoading ? (
            <>Loading...</>
          ) : (
            <>
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
                            <Button
                              variant="danger"
                              onClick={() => handleDelete(item)}
                            >
                              Delete
                            </Button>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </Table>
            </>
          )}
        </>
      )}
    </>
  );
};

export default TableUser;
