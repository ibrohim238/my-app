import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import DefaultLayout from "../components/Layout/DefaultLayout";
import App from "../App";
import ProductIndex from "../components/products/ProductIndex";
import ProductShow from "../components/products/ProductShow";
import Home from "../components/home/Home";
import NoPage from "../components/NoPage";
import React from "react";
import ProductCreate from "../components/products/ProductCreate";

export default (
    <Router>
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route index element={<App />} />
                <Route path="products">
                    <Route index element={<ProductIndex/>}/>
                    <Route path="create" element={<ProductCreate/>}/>
                    <Route path=":id" element={<ProductShow/>}/>
                </Route>
                <Route path="home" element={<Home/>} />
                <Route path="*" element={<NoPage/>} />
            </Route>
        </Routes>
    </Router>
)