import { Container, Todo, Hero, Quote } from './BaseStyles'
import Nav from './Nav'
import Showcase from './Showcase'

function App() {
  return (
    <div>
      <Nav />

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
