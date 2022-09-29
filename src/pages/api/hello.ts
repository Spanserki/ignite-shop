import { NextApiRequest, NextApiResponse } from "next"
import { stripe } from "../../lib/stripe";

export default async function handler(req:NextApiRequest, res: NextApiResponse) {
    const priceId = '';

    const sucessUrl = `${process.env.NEXT_URL}/sucess`
    const cancelUrl = `${process.env.NEXT_URL}/`

    const checkoutSession = await stripe.checkout.sessions.create({
        success_url: sucessUrl,
        cancel_url: cancelUrl,
        mode: 'payment',

        line_items: [

            { price: priceId, quantity: 1 },
            
        ],
    })
}