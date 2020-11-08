import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";

const Users = () => {
  const [data, setData] = useState([]);
  const [mode, setMode] = useState("online");
  useEffect(() => {
    let url = "https://jsonplaceholder.typicode.com/users";
    fetch(url)
      .then((res) => {
        res.json().then((result) => {
          setData(result);
          localStorage.setItem("users", JSON.stringify(result));
        });
      })
      .catch((e) => {
        setMode("offline");
        let collection = localStorage.getItem("users");
        setData(JSON.parse(collection));
      });
  }, []);
  return (
    <div>
      <div>
        {mode === "offline" && <div class="alert alert-warning">Offline</div>}
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 &&
            data.map((i, k) => (
              <tr key={k}>
                <td>{i.id}</td>
                <td>{i.username}</td>
                <td>{i.email}</td>
                <td>{i.address.street}</td>
              </tr>
            ))}
        </tbody>
      </Table>{" "}
    </div>
  );
};

export default Users;
