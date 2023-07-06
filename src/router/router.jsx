import { Route, Routes } from "react-router-dom";
import { HomeC } from "../pages/home";
import NotFound from "../pages/Error";
export function Routers() {
    return (
        <Routes>
            <Route exact path="/" element={ <HomeC/> }/>
            <Route path="/*" element={<NotFound/>}/>
            <Route path="/formulario" element={<Formulario/>}/>
        </Routes>
    )
}