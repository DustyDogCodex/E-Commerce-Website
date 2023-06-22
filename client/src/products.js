//hardcoded array of products to be displayed in our store
import { v4 as uuidv4 } from 'uuid';

const products = [
    {
        id: uuidv4(),
        name: "Coffee",
        price: 4.99
    },
    {
        id: uuidv4(),
        name: "Pens",
        price: 4.99
    },
    {
        id: uuidv4(),
        name: "Laptop",
        price: 499.99
    },
    {
        id: uuidv4(),
        name: "Lamp",
        price: 14.99
    },
    {
        id: uuidv4(),
        name: "Chair",
        price: 44.99
    },
    {
        id: uuidv4(),
        name: "Phone",
        price: 444.99
    },
]

function findProductByID(id){
    let selected_product = products.find(product => product.id === id)
    return selected_product
}

export { products, findProductByID }