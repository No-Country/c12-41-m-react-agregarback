import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
// import { SignUpPage, NotFound, HomeC, LoginC, Contacto, QaPage } from '../pages/index.js';
import { GridLoader } from "react-spinners";
// import NoProtectedLayout from "../components/Layout/NoProtected/index.jsx";
import Products from "../pages/Products/index.jsx";
const Transfer = lazy(() => import('../pages/Transfer'));
const Accounts = lazy(() => import('../pages/Accounts'));
const Profile = lazy(() => import('../pages/Profile'))
const LoanPri = lazy(() => import('../pages/Prestamos'))
const Proteccion = lazy(() => import('../components/Proteccion/Proteccion.jsx'));
const ProtectedLayout = lazy(() => import('../components/Layout/Protected/index.jsx'));

//Redux
const CustomProvider = lazy(() => import('../redux/customProvider.jsx'));
const Nosotros = lazy(() => import('../components/Nosotros/Nosotros.jsx'));
const Inversiones = lazy(() => import('../pages/Inversiones/index.jsx'));
// import CustomProvider from "../redux/customProvider.jsx";
// import Nosotros from "../components/Nosotros/Nosotros.jsx";
// import Inversiones from "../pages/Inversiones/index.jsx";


const NoProtectedLayout = lazy(() => import("../components/Layout/NoProtected/index.jsx"));
import { HomeC } from '../pages/index.js';
const SignUpPage = lazy(() => import("../pages/Formulario/SingUp"));
const NotFound = lazy(() => import("../pages/Error"));
const LoginC = lazy(() => import("../pages/Formulario/Login"));
const Contacto = lazy(() => import("../pages/Contactos"));
const QaPage = lazy(() => import("../pages/QaQuestions"));


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
              <Route path="/investments" element={<Inversiones/>}/>
              <Route path="/cards" element={<div>This is cards</div>} />
              <Route path="/investments" element={<div>This is investments</div>} />
              <Route path="/loans" element={<LoanPri />} />
              <Route path="/help" element={<div>This is help</div>} />
              <Route path="/logout" element={<div>This is logout</div>} />
              <Route path="/token" element={<div>This is token</div>} />
            </Route>
          </Route>
        </Route>

        <Route element={<NoProtectedLayout />}>
          <Route element={<CustomProvider />}>
            <Route path="/login" element={<LoginC />} />
          </Route>
          <Route path="*" element={<NotFound />} />
          <Route exact path="/" element={<HomeC />} />
          <Route exact path="/products" element={<Products />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/contact" element={<Contacto />} />
          <Route path="/preguntasfrecuentes" element={<QaPage />} />
        </Route>
      </Routes>
    </Suspense >
  )


}
