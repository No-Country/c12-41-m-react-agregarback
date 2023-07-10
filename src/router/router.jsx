import { Router, Route, Routes, useNavigate, useLocation } from "react-router-dom";
import { SignUpPage, NotFound, HomeC, LoginC } from '../pages/index.js';
import Transfer from '../pages/Transfer';
import Accounts from "../pages/Accounts/index.jsx";
import Proteccion from "../components/Proteccion/Proteccion.jsx";



export function Routers() {

  return (
    <Routes>
      <Route element={<Proteccion />}>
        <Route path="/accounts" element={<Accounts />} />
      </Route>
      {/* <PrivateRoute exact path="/accounts"
        element={<Accounts/>}
        isAuthenticated={isAuthenticated} /> */}
      <Route exact path="/" element={<HomeC />} />
      <Route path="/*" element={<NotFound />} />
      <Route path="/login" element={<LoginC />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/transfers" element={<Transfer />} />
    </Routes>
  )


}