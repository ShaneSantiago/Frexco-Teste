import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "../Header/Header"
import Cart from "../Pages/Cart/Cart"
import Home from "../Pages/Home/Home"

const Routers = () => {
    return(
        <BrowserRouter>
        <Header />
            <Routes>
            <Route exact path="/" element={<Home />}>
            </Route>

            <Route exact path="/cart" element={<Cart />}>
            </Route>
            </Routes>
        </BrowserRouter>
    )
}
export default Routers