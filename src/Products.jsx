import React, { useEffect, useState } from 'react'
import { Transition, TransitionGroup } from 'react-transition-group'
import styled from 'styled-components'

import { bodyPadding, Heading, SubHeading } from './BaseStyles'

const timeout = 400

const ProductsSelect = styled.select`
  appearance: none;
  border: 0;
  background: transparent url(img/down-arrow.svg) right center no-repeat;
  font-size: 1.25em;
  font-family: inherit;
  margin-right: ${bodyPadding};
  padding-right: 1em;

  @media (min-width: 48em) {
    display: none;
  }
`

const ProductsRadiogroup = styled.div`
  display: none;

  @media (min-width: 48em) {
    display: flex;
    justify-content: center;
    margin-bottom: 2.5em;
  }

  @media (min-width: 80em) {
    margin-bottom: 4.875em;
  }
`

const RadioInput = styled.input.attrs({ type: 'radio' })`
  position: absolute !important;
  width: 1px !important;
  height: 1px !important;
  padding: 0 !important;
  margin: -1px !important;
  overflow: hidden !important;
  clip: rect(0, 0, 0, 0) !important;
  white-space: nowrap !important;
  border: 0 !important;
`

const Label = styled.label`
  font-size: 1.5em;
  padding: 0 1.125em;
  font-weight: 500;
  opacity: 0.5;
  cursor: pointer;

  &:hover,
  ${RadioInput}:checked + & {
    opacity: 1;
  }

  ${RadioInput}:focus-visible + & {
    outline-style: auto;
    outline-offset: -2px;
  }
`

const StyledProductsList = styled.ul`
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  display: grid;
  overflow-x: auto;
  grid-auto-flow: column;
  grid-auto-columns: 80%;
  column-gap: 1.75em;
  padding-bottom: 2em;

  opacity: 1;
  will-change: opacity, transform;
  transition: opacity ${timeout}ms ease-out, transform ${timeout}ms ease-in;

  ${({ state }) =>
    state === 'exiting' &&
    `
      opacity: 0;
      transform: scale(0.9) translateY(-5%);
    `};

  @media (min-width: 48em) {
    grid-template-columns: repeat(3, 1fr);
    grid-auto-flow: row;
    gap: 4em 2em;
  }

  @media (min-width: 80em) {
    gap: 6em 4em;
  }
`

const StyledProduct = styled.li`
  scroll-snap-align: start;
  position: relative;
  display: ${({ state }) => (state === 'entering' ? 'none' : 'flex')};
  padding: 2.25em 2.25em 0;
  flex-direction: column;
  background-color: #faf4ef;
  border-radius: 0 0 0 50px;
`

const ProductName = styled(Heading)`
  font-size: 1.625em;
  margin: 0 0 0.5em;

  a {
    text-decoration: none;
    color: #4b4b4b;
  }

  a::before {
    content: '';
    cursor: inherit;
    display: block;
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 1100;
    width: 100%;
    height: 100%;
  }

  @media (min-width: 48em) {
    font-size: 2.25em;
  }
`

const ProductPrice = styled(SubHeading).attrs({ as: 'h3' })`
  font-size: 1.25em;
  color: #737373;
  margin: 0;

  @media (min-width: 48em) {
    font-size: 1.5em;
  }
`

const ProductImg = styled.img`
  margin-top: auto;
  align-self: center;
  position: relative;
  bottom: -2em;
`

const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
})

function Product({ name, link, price, img, alt, ...props }) {
  return (
    <StyledProduct {...props}>
      <ProductName>
        <a href={link}>{name}</a>
      </ProductName>
      <ProductPrice>{currencyFormatter.format(price)}</ProductPrice>
      <ProductImg src={`img/products/${img}`} alt={alt} />
    </StyledProduct>
  )
}

export function ProductsFilters({ filters, activeFilter, onChangeFilter }) {
  return (
    <React.Fragment>
      <ProductsRadiogroup
        role="radiogroup"
        aria-label="Filter products"
        aria-controls="products-list"
      >
        {filters.map((filter, i) => (
          <React.Fragment key={i}>
            <RadioInput
              id={filter}
              name="category"
              value={filter}
              checked={filter === activeFilter}
              onChange={() => onChangeFilter(filter)}
            />
            <Label htmlFor={filter}>{filter}</Label>
          </React.Fragment>
        ))}
      </ProductsRadiogroup>

      <ProductsSelect
        aria-controls="products-list"
        value={activeFilter}
        onChange={(e) => onChangeFilter(e.target.value)}
      >
        {filters.map((filter, i) => (
          <option key={i} value={filter}>
            {filter}
          </option>
        ))}
      </ProductsSelect>
    </React.Fragment>
  )
}

export function ProductsList({ products }) {
  const [listFadeOut, setListFadeOut] = useState(false)

  useEffect(() => setListFadeOut(true), [products])

  return (
    <Transition
      in={!listFadeOut}
      timeout={timeout}
      onExited={() => setListFadeOut(false)}
    >
      {(state) => (
        <StyledProductsList
          id="products-list"
          aria-live="polite"
          aria-atomic="true"
          aria-relevant="additions removals"
          state={state}
        >
          <TransitionGroup component={null}>
            {products.map(({ id, ...props }) => (
              <Transition key={id} timeout={timeout}>
                {(state) => <Product state={state} {...props} />}
              </Transition>
            ))}
          </TransitionGroup>
        </StyledProductsList>
      )}
    </Transition>
  )
}
