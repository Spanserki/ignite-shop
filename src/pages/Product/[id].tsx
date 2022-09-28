import Image from "next/image"
import { useRouter } from "next/router"
import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product"
import camisa1 from '../../assets/1.png'

export default function Product() {

    const {query} = useRouter()
    return (
        <ProductContainer>
            <ImageContainer>
                <Image  src={camisa1}/>
            </ImageContainer>

            <ProductDetails>
                <h1>Camiseta X</h1>
                <span>R$ 79,90</span>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, sed similique exercitationem alias ipsum illum enim aliquam nostrum autem reprehenderit perspiciatis, veniam officia magni velit debitis consequatur soluta amet voluptates.</p>

                <button>
                    Comprar agora
                </button>
            </ProductDetails>
        </ProductContainer>
    )
}