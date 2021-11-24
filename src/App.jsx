import { Container, Todo, Hero, Quote } from './BaseStyles'
import Showcase from './Showcase'

function App() {
  return (
    <div>
      <Todo smPadding="none">TODO: Nav</Todo>

      <Hero />

      <Todo>TODO: Products</Todo>

      <Showcase />

      <Container>
        <Quote />
      </Container>
    </div>
  )
}

export default App
