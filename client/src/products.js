//hardcoded array of products to be displayed in our store

const products = [
    {
        id: "price_1NLsueK2Y9JWRQJiM0ZCW7iD",
        name: "Coffee",
        price: 4.99
    },
    {
        id: "price_1NLsvwK2Y9JWRQJiblke0BUD",
        name: "Pens",
        price: 4.99
    },
    {
        id: "price_1NLswhK2Y9JWRQJiY6xd3D5i",
        name: "Laptop",
        price: 499.99
    },
    {
        id: "price_1NLsxaK2Y9JWRQJiIV0QiQCm",
        name: "Lamp",
        price: 14.99
    },
    {
        id: "price_1NLsy7K2Y9JWRQJiXutc09s9",
        name: "Chair",
        price: 44.99
    },
    {
        id: "price_1NLsyxK2Y9JWRQJilzNNVGKM",
        name: "Phone",
        price: 444.99
    },
]

function findProductByID(id){
    let selected_product = products.find(product => product.id === id)
    return selected_product
}

export { products, findProductByID }