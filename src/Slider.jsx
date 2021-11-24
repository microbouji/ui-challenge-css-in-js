import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

import { bodyPadding, Heading } from './BaseStyles'

const StyledSlider = styled.div`
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  scrollbar-width: none;
  -webkit-overflow-scrolling: touch;
  display: flex;
  overflow-x: auto;
  margin-bottom: 1.25em;

  &::-webkit-scrollbar {
    display: none;
  }
`

const StyledSlide = styled.div`
  scroll-snap-align: start;
  width: 100%;
  flex-shrink: 0;

  @media (min-width: 48em) {
    display: grid;
    grid-template-columns: 2fr 1fr;
  }
`

const SlideImageLink = styled.a`
  display: block;

  img {
    display: block;
    width: 100%;
    height: 24em;
    object-fit: cover;
  }

  ${StyledSlide}:first-child & {
    padding-left: ${bodyPadding};
  }
  ${StyledSlide}:first-child & img {
    border-radius: 0 0 0 60px;
  }

  ${StyledSlide}:last-child & {
    padding-right: ${bodyPadding};
  }
  ${StyledSlide}:last-child & img {
    border-radius: 0 60px 0 0;
  }

  @media (min-width: 48em) {
    &&& {
      padding: 0 0 0 ${bodyPadding};
      position: relative;
      z-index: 1040;
    }

    &&& img {
      height: 100%;
      max-height: calc(2 / 3 * 100vw - ${bodyPadding});
      border-radius: 0 0 0 100px;
    }
  }

  @media (min-width: 80em) {
    &&& {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &&& img {
      width: auto;
      height: auto;
      max-height: 52em;
      object-fit: contain;
    }
  }
`

const SlideText = styled.div`
  padding: 0 ${bodyPadding};

  p {
    font-size: 1.25em;
    line-height: 1.5;
    margin-bottom: 1em;
  }

  @media (min-width: 48em) {
    padding-left: 2em;
    margin-bottom: 5em;
    position: relative;
    z-index: 1020;
  }

  @media (min-width: 80em) {
    padding-left: 4.25em;
    margin-bottom: 7em;

    p {
      font-size: 1.5em;
    }
  }
`

const SliderControls = styled.div`
  display: flex;
  padding-left: ${bodyPadding};

  @media (min-width: 48em) {
    position: absolute;
    z-index: 1030;
    left: calc(2 / 3 * 100% + 2em);
    bottom: 3em;
    padding: 0;
  }

  @media (min-width: 80em) {
    left: calc(2 / 3 * 100% + 4.25em);
    bottom: 6em;
  }
`

const SliderControlButton = styled.button`
  width: 3.125em;
  height: 3.125em;
  background-color: #faf4ef;

  &[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }

  svg {
    width: 1.8125em;
    height: 1.5em;
    vertical-align: middle;
  }

  @media (min-width: 80em) {
    width: 4.375em;
    height: 4.375em;

    svg {
      width: 2.4375em;
    }
  }
`

const SliderControlButtonNext = styled(SliderControlButton)`
  margin-left: 0.75em;
`

function PrevBtn(props) {
  return (
    <SliderControlButton tabindex="-1" aria-hidden="true" {...props}>
      <svg viewBox="0 0 39 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0.939339 10.9393C0.353554 11.5251 0.353554 12.4749 0.939339 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97918 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.939339 10.9393ZM39 10.5L2 10.5L2 13.5L39 13.5L39 10.5Z"
          fill="#4B4B4B"
        />
      </svg>
    </SliderControlButton>
  )
}

function NextBtn(props) {
  return (
    <SliderControlButtonNext tabindex="-1" aria-hidden="true" {...props}>
      <svg viewBox="0 0 39 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M38.0607 10.9393C38.6464 11.5251 38.6464 12.4749 38.0607 13.0607L28.5147 22.6066C27.9289 23.1924 26.9792 23.1924 26.3934 22.6066C25.8076 22.0208 25.8076 21.0711 26.3934 20.4853L34.8787 12L26.3934 3.51472C25.8076 2.92893 25.8076 1.97918 26.3934 1.3934C26.9792 0.807611 27.9289 0.807611 28.5147 1.3934L38.0607 10.9393ZM-1.11902e-08 10.5L37 10.5L37 13.5L1.11902e-08 13.5L-1.11902e-08 10.5Z"
          fill="#4B4B4B"
        />
      </svg>
    </SliderControlButtonNext>
  )
}

export function Slide({ id, title, img, alt, link, children }) {
  return (
    <StyledSlide role="group" aria-labelledby={`slide-${id}-title`}>
      <SlideImageLink href={link}>
        <img
          src={`img/showcase/${img}.jpg`}
          sizes="(min-width: 48em) 63vw, 100vw"
          srcSet={`
            img/showcase/${img}-960w.jpg  960w,
            img/showcase/${img}.jpg      1600w
          `}
          alt={alt}
        />
      </SlideImageLink>
      <SlideText>
        <Heading id={`slide-${id}-title`}>{title}</Heading>
        {children}
      </SlideText>
    </StyledSlide>
  )
}

export function Slider({ children }) {
  const slider = useRef(null)
  const firstSlide = useRef(null)
  const lastSlide = useRef(null)
  let [currentSlide, setCurrentSlide] = useState(null)

  function scrollIntoView(el) {
    el.scrollIntoView({ block: 'nearest' })
  }

  useEffect(() => {
    firstSlide.current = slider.current.firstChild
    lastSlide.current = slider.current.lastChild

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return

          setCurrentSlide(entry.target)
        })
      },
      { root: slider.current, threshold: 0.5 }
    )

    Array.from(slider.current.children).forEach((slide) => {
      observer.observe(slide)
    })
  }, [])

  return (
    <React.Fragment>
      <StyledSlider ref={slider}>
        {children.map((SlideComponent, i) =>
          React.cloneElement(SlideComponent, { id: i, key: i })
        )}
      </StyledSlider>

      <SliderControls>
        <PrevBtn
          disabled={currentSlide === firstSlide.current}
          onClick={() => scrollIntoView(currentSlide.previousSibling)}
        />

        <NextBtn
          disabled={currentSlide === lastSlide.current}
          onClick={() => scrollIntoView(currentSlide.nextSibling)}
        />
      </SliderControls>
    </React.Fragment>
  )
}
