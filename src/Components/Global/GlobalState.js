import React, { useState } from "react"
import GlobalContext from "./GlobalContext"


const GlobalState = (props) => {
    const [fruits, setFruits] = useState([])
    const [cart, setCart] = useState([])


    const addToCart = (product) => {
        const ProductExist = cart.find((item) => item.id === product.id);
        if (ProductExist) {
          setCart(
            cart.map((item) =>
              item.id === product.id
                ? { ...ProductExist, amount: ProductExist.amount + 1 }
                : item
            )
          );
        } else {
          setCart([...cart, { ...product, amount: 1 }]);
        }
        alert(`${product.name} adicionado com sucesso`);
      };
      
      localStorage.setItem("COMPRAS", JSON.stringify(cart));
      if (!fruits) return null;



    const clearCart = () => {
        setCart([])
        alert("Obrigado por comprar com a gente")
    }

    const removeFromCart = (product) => {
        setCart(cart.filter((item) => item.id !== product.id));
        alert(`${product.name} removido com sucesso`);
      };


      const removeItemCart = (product) => {
    const ProductExist = cart.find((item) => item.id === product.id);
    if (ProductExist.amount === 1) {
      setCart(cart.filter((item) => item.id !== product.id));
    } else {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...ProductExist, amount: ProductExist.amount - 1 }
            : item
        )
      );
    }
    alert("Item removido com sucesso!");
  };

    const states = {
        fruits,
        cart
    }
    const setters = {
        setFruits,
        setCart
    }

    const request = {
        addToCart,
        clearCart,
        removeFromCart,
        removeItemCart
    }
    return(
        <GlobalContext.Provider value={{states, setters, request}}>
            {props.children}
        </GlobalContext.Provider>
    )
}
export default GlobalState