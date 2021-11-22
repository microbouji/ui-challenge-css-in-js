import { Container, Todo, Hero, Quote } from './BaseStyles'

function App() {
  return (
    <div>
      <Todo smPadding="none">TODO: Nav</Todo>

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
