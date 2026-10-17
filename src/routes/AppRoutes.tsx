
import { Routes, Route } from "react-router";
import Home from "../pages/Home";
import FilmDetails from "../pages/FilmDetails"

const AppRoutes = () => {
    return(
        <Routes >
            <Route path="/" element={<Home/>} />
            <Route path="/films/:id" element={<FilmDetails />} />
        </Routes>
    )
}


export default AppRoutes;