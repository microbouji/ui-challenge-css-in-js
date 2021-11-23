import { Container, Todo, Hero, Quote } from './BaseStyles'
import Nav from './Nav'

function App() {
  return (
    <div>
      <Nav />

      <Hero />

      <Todo>TODO: Products</Todo>

      <Todo>TODO: Showcase</Todo>

      <Container>
        <Quote />
      </Container>
    </div>
  )
}

export default App
