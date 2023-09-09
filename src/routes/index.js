import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/";
import Login from "../Pages/Login";
import SignUp from "../Pages/Signup";

//Verifica se você esta logado
const Private = ({ Item }) => {
  const signed = false
  return signed > 0 ? <Item /> : <Login />;
}


const RoutesApp = () => {
  return (
    <BrowserRouter>
        <Fragment>
          <Routes>
          <Route exact path="/home" element={<Home />}/>
            <Route path="/" element={<Login />}/>
            <Route exact path="/Signup" element={<SignUp />}/>
            <Route path="*" element={<Login />}/>
          </Routes>
        </Fragment>
    </BrowserRouter>
  );
}

export default RoutesApp;