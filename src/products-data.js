const products = [
  {
    id: 1,
    category: 'Chair',
    name: 'Chair',
    link: '#',
    price: 18,
    img: 'chair.png',
    alt: 'Chair',
  },
  {
    id: 2,
    category: 'Chair',
    name: 'Chair Two',
    link: '#',
    price: 18,
    img: 'chair2.png',
    alt: 'Chair 2',
  },
  {
    id: 3,
    category: 'Lamp',
    name: 'Lamp',
    link: '#',
    price: 18,
    img: 'lamp.png',
    alt: 'Lamp',
  },
  {
    id: 4,
    category: 'Chair',
    name: 'Chair Three',
    link: '#',
    price: 18,
    img: 'chair3.png',
    alt: 'Chair 3',
  },
  {
    id: 5,
    category: 'Table',
    name: 'Table',
    link: '#',
    price: 18,
    img: 'table.png',
    alt: 'Table',
  },
  {
    id: 6,
    category: 'Sofa',
    name: 'Sofa',
    link: '#',
    price: 18,
    img: 'sofa.png',
    alt: 'Sofa',
  },
]

export function getProducts(category) {
  if (category === 'All') return products
  return products.filter((product) => product.category === category)
}
