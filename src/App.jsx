import { Container, Todo, Hero, Quote } from './BaseStyles'
import ProductsSection from './ProductsSection'

function App() {
  return (
    <div>
      <Todo smPadding="none">TODO: Nav</Todo>

      <Hero />

      <ProductsSection />

      <Todo>TODO: Showcase</Todo>

      <Container>
        <Quote />
      </Container>
    </div>
  )
}

export default App
