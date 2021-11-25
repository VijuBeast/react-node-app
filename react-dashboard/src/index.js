import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

  


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
  
  
  
	      // <form>
	    //   {data && (<div><h1>{data.username} {data.password}</h1></div>)}
	    //   <p>Username: <b>admin</b> Password: <b>admin</b></p>
	    //   <FormControl margin="dense">
	    //     <InputLabel htmlFor="username">Username</InputLabel>
	    //     <Input
	    //       type="text"
	    //       id="username"
	    //       aria-describedby="my-helper-text"
	    //       variant="outlined"
	    //       onChange={(e) => setUsername(e.target.value)}
	    //     />
	    //   </FormControl>
	    //   <br />
	    //   <FormControl margin="dense">
	    //     <InputLabel htmlFor="passsword">Password</InputLabel>
	    //     <Input
	    //       type="password"
	    //       id="password"
	    //       aria-describedby="my-helper-text"
	    //       onChange={(e) => setPassword(e.target.value)}
	    //     />
	    //   </FormControl>
	    //   <p>{error}</p>
	    //   <br />
	    //   <Button variant="outlined" type="submit" className="btn btn-primary">
	    //     Submit
	    //   </Button>
    // </form>
    // <div className="form-container">
    //   <form onSubmit={handleSubmit}>
    //     <div className="form-group">
    //       <label htmlFor="username">Username</label>
    //       <input
    //         type="text"
    //         className="form-control"
    //         placeholder="Enter username"
    //         onChange={(e) => setUsername(e.target.value)}
    //       />
    //     </div>
    //     <div className="form-group">
    //       <label htmlFor="password">Password</label>
    //       <input
    //         type="password"
    //         className="form-control"
    //         placeholder="Enter password"
    //         onChange={(e) => setPassword(e.target.value)}
    //       />
    //     </div>
    //     <p>{error}</p>
    //     <Button variant="outlined" type="submit" className="btn btn-primary">
    //       Submit
    //     </Button>
    //   </form>
    // </div>
//     MOM

// // 1. From today tasks completed login and dashboard view.
// // 2. After review call
// // 2.1 Have to get data through api.
// // 3. Role and Group both come from localStorage through web api.
// // 4. Tomorrow I'll cover above review call feedback and I'll work node to create api.
