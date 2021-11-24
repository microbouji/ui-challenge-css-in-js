import styled from 'styled-components'

import { Container } from './BaseStyles'
import { Slider, Slide } from './Slider'

const ShowcaseContainer = styled(Container).attrs({ as: 'section' })`
  padding: 0;
  background: linear-gradient(
    to bottom,
    transparent 0,
    transparent 78px,
    #faf4ef 78px,
    #faf4ef 164px,
    transparent 164px,
    transparent 100%
  );

  @media (min-width: 48em) {
    position: relative;
    background: none;

    &::before {
      content: '';
      position: absolute;
      z-index: 1010;
      top: 69px;
      right: calc(1 / 3 * 100%);
      width: 100vw;
      height: 207px;
      background-color: #faf4ef;
    }
  }
`

function Showcase() {
  return (
    <ShowcaseContainer aria-label="Showcase">
      <Slider>
        <Slide title="Lamp" img="lamp" alt="lamp photo" link="#">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          <p>
            Photo by{' '}
            <a href="https://unsplash.com/@justindkauffman?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Justin Kauffman
            </a>{' '}
            on{' '}
            <a href="https://unsplash.com/photos/fpoHihXiMhg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Unsplash
            </a>
          </p>
        </Slide>

        <Slide title="Chair" img="chair" alt="chair photo" link="#">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          <p>
            Photo by{' '}
            <a href="https://unsplash.com/@ninjason?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Jason Leung
            </a>{' '}
            on{' '}
            <a href="https://unsplash.com/photos/rjFSuf6fEc8?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Unsplash
            </a>
          </p>
        </Slide>

        <Slide title="Sofa" img="sofa" alt="sofa photo" link="#">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          <p>
            Photo by{' '}
            <a href="https://unsplash.com/@heftiba?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Toa Heftiba
            </a>{' '}
            on{' '}
            <a href="https://unsplash.com/photos/4t8_1MKvPd8?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Unsplash
            </a>
          </p>
        </Slide>
      </Slider>
    </ShowcaseContainer>
  )
}

export default Showcase
