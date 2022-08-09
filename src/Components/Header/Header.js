import { Button } from "@chakra-ui/react"
import React from "react"
import { useNavigate } from "react-router-dom"
import { ContainerHeader } from "./Styled";

const Header = () => {
    const json = localStorage.getItem("COMPRAS");
    const cart = JSON.parse(json);

    const navigate = useNavigate()
    const goToCart = () => {
        navigate("/cart")
    }

    const goToHome = () => {
        navigate("/")
    }
    return(
        <ContainerHeader>
            <div className="btn">
            <Button onClick={goToHome}>Home</Button>
            <img className="logo" src="assets/logo.png"/>
            <Button onClick={goToCart}><img src="assets/icon.png"/> {cart && cart.length}</Button>
            </div>
        </ContainerHeader>
    )
}
export default Header