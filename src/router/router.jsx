import { useState } from "react";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import Sidenav from "../components/Sidenav/Sidenav";
import { SignUpPage, NotFound, HomeC, LoginC } from "../pages/index.js";
import Transfer from "../pages/Transfer";
import Account from "../pages/Accounts";
import AutComponent from "../components/AutComponent";
export function Routers() {
  const navigate = useNavigate();
  const location = useLocation();
  const [token, setToken] = useState(sessionStorage.getItem("token"));

  function login(loginData) {
    const { dni, username, password } = loginData;
    const URL = "https://nocountrybackend.onrender.com/api/v1/users/login";

    axios
      .post(URL, { dni, username, password })
      .then((response) => {
        const { token } = response.data;
        setToken(token);
        sessionStorage.setItem("token", token);
        navigate("/home");
      })
      .catch((error) => {
        console.error(error);
      });
  }
  function register(registerData) {
    const {
      name,
      email,
      password,
      date_of_birth,
      dni,
      address,
      username,
      phone_number,
    } = registerData;
    const URL = "https://nocountrybackend.onrender.com/api/v1/users/signup";

    axios
      .post(URL, {
        name,
        email,
        password,
        date_of_birth,
        dni,
        address,
        username,
        phone_number,
      })
      .then((response) => {
        const { token } = response.data;
        setToken(token);
        sessionStorage.setItem("token", token);
        navigate("/home");
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <Routes>
      <Route element={<AutComponent/>}>
        <Route exact path="/" element={<HomeC />} />
        <Route path="/login" element={<LoginC />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/transfers" element={<Transfer />} />
        <Route path="/accounts" element={<Account />} />
      </Route>
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}
