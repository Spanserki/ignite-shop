import { NextApiRequest, NextApiResponse } from "next"
import { stripe } from "../../lib/stripe";

export default async function handler(req:NextApiRequest, res: NextApiResponse) {
    const {priceId} = req.body;

    const sucessUrl = `http://localhost:3000/success?session_id={CHECKOUT_SESSION_ID}`;
    const cancelUrl = `http://localhost:3000/`;

    const checkoutSession = await stripe.checkout.sessions.create({
        success_url: sucessUrl,
        cancel_url: cancelUrl,
        mode: 'payment',

        line_items: [

            { price: priceId, quantity: 1 },
            
        ],
    })

    return res.status(201).json({checkoutUrl: checkoutSession.url},);
}