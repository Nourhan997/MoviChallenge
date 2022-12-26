//REACT UTILITIES
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//LOGIN COMPONENT
import PageNotFound from "../../layout/PageNotFound";
import MoviesDetails from "../../components/moviesdetails/moviesdetails";
import ProtectedRoutes from "./ProtectedRoutes";
import Home from "../../components/Home/home";
import Menu from "../../layout/Menu/Menu";
import Footer from "../../layout/footer/footer";
import Login from "../../components/login/login";
import Dashboard from "../../components/Dashboard/dashboard";
import Movielist from "../../components/movielist/movielist";

function AppRouter(props) {
  return (
    <BrowserRouter>
      <Menu></Menu>
      <Routes>
        <Route element={<ProtectedRoutes shouldbeloggedIn={false} />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/moviesDetails/:id" element={<MoviesDetails />} />
          <Route path="/movielist/:search" element={<Movielist />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
        <Route element={<ProtectedRoutes shouldbeloggedIn={true} />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default AppRouter;
