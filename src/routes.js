import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./pages/home";

const publicRoutes = ({children, ...rest}) => {
    return (
        <Route {...rest}>{children}</Route>
    );
}

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <publicRoutes exact path="/">
                    <HomePage/>
                </publicRoutes>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;