import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
import App from "../../App";
import DomesticFlightPage from '../Pages/DomesticFlightPage/DomesticFlightPage';

class Router extends Component {
    render() {
        return (
            <>
                <Header />
                <Routes>
                    <Route exact path="/" element={<App />} />
                    <Route exact path="/flight" element={<DomesticFlightPage />} />
                </Routes>
            </>
        )
    }

}
export default Router;