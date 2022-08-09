import axios from "axios"
import React, { useContext, useEffect, useState } from "react"
import GlobalContext from "../../Global/GlobalContext"
import { BASE_URL } from "../../Services/Url"
import { Container } from "./Styled"
import { Table, Thead, Tr, Th, Td, Tbody, Button } from "@chakra-ui/react"


const Home = () => {
    const { states, setters, request } = useContext(GlobalContext);
    const {fruits} = states
    const {setFruits} = setters


    useEffect(() => {
        allFruits()
    }, [])

    const allFruits = () => {
        axios.get(`${BASE_URL}/all`)
        .then((res) => {
            setFruits(res.data)
        })
        .catch((erro) => {
            console.log(erro)
        })
    }


    return(
        <Container>
            <Table colorScheme='teal' size='sm'>
    <Thead>
      <Tr>
        <Th>Nome</Th>
        <Th>Carboidratos</Th>
        <Th>Gorduras Totails</Th>
        <Th>Proteina</Th>
        <Th>Açucar</Th>
      </Tr>
    </Thead>
    
            {states.fruits?.map((fruit) => {
                return <Tbody >
                   <Tr>
                     <Td>{fruit.name}</Td>
                     <Td>{fruit.nutritions.carbohydrates}</Td>
                     <Td>{fruit.nutritions.fat}</Td>
                     <Td>{fruit.nutritions.protein}</Td>
                     <Td>{fruit.nutritions.sugar}</Td>
                     <Button onClick={() => request.addToCart(fruit)}>Comprar</Button>
                   </Tr>
                 </Tbody>
                
            })}
     </Table>
        </Container>
    )
}
export default Home