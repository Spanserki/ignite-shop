import { styled } from "../styles"

const Button = styled('button', {
  backgroundColor: "$rocketseat",

  '&:hover': {
    backgroundColor: 'blue'
  },
})

export default function Home() {
  return (
    <Button>Enviar</Button>
  )
}
