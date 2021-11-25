import { Container, Todo, Hero, Quote } from './BaseStyles'
import Nav from './Nav'
import Showcase from './Showcase'
import ProductsSection from './ProductsSection'

function App() {
  return (
    <div>
      <Nav />

      <Hero />

      <ProductsSection />

      <Showcase />

      <Container>
        <Quote />
      </Container>
    </div>
  )
}

export default App
