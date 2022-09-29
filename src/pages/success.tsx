import { GetServerSideProps } from "next";
import Link from "next/link";
import { SuccessCOntainer, ImageContainer } from "../styles/pages/success";


export default function Success() {
    return (
        <SuccessCOntainer>
            <h1>Compra efetuada!</h1>

            <ImageContainer>

            </ImageContainer>

            <p>
                Uhhhuuulll <strong> Guilherme Spanserki</strong>, sua <strong>Camiseta Beyond the Limits</strong> ja esta a caminho da sua casa
            </p>

            <Link href="/">
                Voltar ao catalogo
            </Link>
        </SuccessCOntainer>
    )
}

