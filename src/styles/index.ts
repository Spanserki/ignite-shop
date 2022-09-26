import {createStitches} from '@stitches/react'

export const { //exportando configuraçoes
    config,
    styled,
    css,
    globalCss,
    keyframes,
    getCssText,
    theme,
    createTheme,

} = createStitches({
    theme: { //Tema global
        colors: {
            rocketseat: '#8257e6'
        }
    }
})