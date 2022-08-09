import React, { useContext } from "react"
import GlobalContext from "../../Global/GlobalContext"
import { useNavigate } from "react-router-dom"
import { Button } from "@chakra-ui/react"
import { ContainerCart } from "./Styled";

const Cart = (props) => {
    const { states, setters, request } = useContext(GlobalContext);
    const {fruits, cart} = states
    const {setCart} = setters

    const navigate = useNavigate()

    const goToHome = () => {
        navigate("/")
    }
    return(
        <ContainerCart>
            {states.cart.length === 0 ? (
                <div className="sem-compras">
                    <h2>Carrinho vázio</h2>
                    <Button onClick={goToHome}>
                        Fazer compras
                    </Button>
                </div>
            ) :
                    <div className="itens">
                        <Button onClick={() => request.clearCart()}>Limpar</Button>
                    {states.cart?.map((item) => {
                        return <div className="infos">
                           <p className="info-name">Nome: {item.name}</p>
                           <p>Quantidade: {item.amount}</p>
                           <div className="btn">
                           <Button colorScheme='green' onClick={() =>  request.addToCart(item)}>+</Button>
                           <Button colorScheme='red' onClick={() =>  request.removeItemCart(item)}>-</Button>
                            </div>
                           
                         </div>
                        
                    })}
                    </div>
             
        }
        </ContainerCart>
    )
}
export default Cart