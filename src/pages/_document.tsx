import {Html, Head, Main, NextScript} from 'next/document'
import { getCssText } from '../styles'

export default function Document() {
    return (
        <Html>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
                <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@700&family=Roboto:wght@400;700&display=swap" rel="stylesheet"/>
                <style id='stitches' dangerouslySetInnerHTML={{__html: getCssText()}} />
            </Head>

            <body>
                <Main/> {/*indica em qual lugar irao ser carregados os conteudos das paginas*/}
                <NextScript /> {/*Indica em qual local do Html serão carregados os scripts da pagina*/}
            </body>
        </Html>
    )
} 