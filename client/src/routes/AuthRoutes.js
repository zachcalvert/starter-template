import React from "react";
import { Route } from "react-router-dom";
import AuthGuard from "../guards/AuthGuard";
import Home from "../pages/Home";

const AuthRoutes = [
    <Route key="Home" path="/" element={<AuthGuard component={<Home />} />} />,
]

export default AuthRoutes;
