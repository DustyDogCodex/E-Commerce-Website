const express = require('express')
const cors = require('cors')
const asyncHandler = require('express-async-handler')
require('dotenv').config()
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static("public"))

const port = process.env.PORT || 5000

//strip checkout post request
app.post('/checkout',
    asyncHandler(async(req,res) => {
        /* stripe requires incoming requests to identify products not with id but with price (using the price_id created thru their cms) */
        /* for this reason, req.body.items will be passed thru a function converting ids into stripe's price_ids */
        const items = req.body.items
        
        let cartItems = []
        items.forEach(item => {
            cartItems.push({
                price: item.id,
                quantity: item.quantity
            })
        });
        console.log(cartItems)

        //starting stripe checkout session
        const session = await stripe.checkout.sessions.create({
            line_items: cartItems,
            mode: 'payment',
            success_url: "http://localhost:3000/success",
            cancel_url: "http://localhost:3000/cancel"
        })
        
        /* once a stripe checkout session is created through the await code block above, it can be sent to the frontend through res.send */
        res.json({ url: session.url })
    })
)

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})