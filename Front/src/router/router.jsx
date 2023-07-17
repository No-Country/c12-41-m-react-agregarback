import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { SignUpPage, NotFound, HomeC, LoginC, Contacto } from '../pages/index.js';
import { GridLoader } from "react-spinners";
import NoProtectedLayout from "../components/Layout/NoProtected/index.jsx";
const Transfer = lazy(() => import('../pages/Transfer'));
const Accounts = lazy(() => import('../pages/Accounts'));
const Profile = lazy(() => import('../pages/Profile'))
const Proteccion = lazy(() => import('../components/Proteccion/Proteccion.jsx'));
const ProtectedLayout = lazy(() => import('../components/Layout/Protected'));
//Proveedor Redux
import CustomProvider from "../redux/customProvider.jsx";

export function Routers() {

  return (
    <Suspense fallback={
      <div className="bg-dark flex flex-row justify-center items-center h-screen">
        <GridLoader color="white" />
      </div>}>


      <Routes>
        <Route element={<ProtectedLayout />}>
          <Route element={<Proteccion />}>
            {/* Todo lo que envuelve CustomProvider tiene acceso al estado global (protectedStore) */}
            <Route element={<CustomProvider />}>
              <Route path="/accounts" element={<Accounts />} />
              <Route path="/transfers" element={<Transfer />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/cards" element={<div>This is cards</div>} />
              <Route path="/investments" element={<div>This is investments</div>} />
              <Route path="/loans" element={<div>This is loans</div>} />
              <Route path="/help" element={<div>This is help</div>} />
              <Route path="/logout" element={<div>This is logout</div>} />
              <Route path="/token" element={<div>This is token</div>} />
            </Route>
          </Route>
        </Route>

        <Route element={<NoProtectedLayout />}>
          <Route exact path="/" element={<HomeC />} />
          <Route path="/login" element={<LoginC />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/contact" element={<Contacto />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense >
  )


}
