import React, { useState, useEffect } from "react";
import "../../App.css";
import { FormControl, InputLabel, Input } from "@mui/material";
import Button from "@mui/material/Button";

const Login = () => {
  const [data, setData] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api/login");
      const json = await response.json();
      setData(json);
    }
    fetchData();
  }, []);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   localStorage.setItem("admin", username);
  //   localStorage.setItem("admin", password);
  //   if (username === "admin" && password === "admin") {
  //     console.log("login success");
  //     window.location.href = "/dashboard";
  //   } else {
  //     console.log("Login Failed");
  //     setError("Invalid Credentials");
  //   }
  // };

  // Create a handleSubmit function to check the data from the api and set the local storage and redirect to dashboard
  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === data.username && password === data.password) {
      console.log("login success");
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      window.location.href = "/dashboard";
    } else {
      console.log("Login Failed");
      setError("Invalid Credentials");
    }
  };
  

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Throw an error if the username or password is empty
  //   if (data.username === "" || data.password === "") {
  //     setError("Username or password is empty");
  //   } else {
  //     if (data.username === username && data.password === password) {
  //       // set the username and password in the local storage
  //       localStorage.setItem("admin", username);
  //       localStorage.setItem("admin", password);
  //       // Navigate to the dashboard page
  //       window.location.href = "/dashboard";
  //     } else {
  //       if (data.username !== username && data.password !== password) {
  //         // get the username and password from the local storage
  //         localStorage.getItem("admin", username);
  //         localStorage.getItem("admin", password);
  //         window.location.href = "/dashboard";
  //       } else {
  //         setError("Incorrect username or password");
  //       }
  //     }
  //   }
  // };
  return (
    <form onSubmit={handleSubmit}>
      <p>
        Username: <b>admin</b> Password: <b>admin</b>
      </p>
      <FormControl margin="dense">
        <InputLabel htmlFor="username">Username</InputLabel>
        <Input
          type="text"
          id="username"
          aria-describedby="my-helper-text"
          variant="outlined"
          onChange={(e) => setUsername(e.target.value)}
        />
      </FormControl>
      <br />
      <FormControl margin="dense">
        <InputLabel htmlFor="passsword">Password</InputLabel>
        <Input
          type="password"
          id="password"
          aria-describedby="my-helper-text"
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormControl>
      <p>{error}</p>
      <br />
      <Button on variant="outlined" type="submit" className="btn btn-primary">
        Submit
      </Button>
    </form>
  );
};

export default Login;
