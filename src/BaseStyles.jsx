import styled, { css } from 'styled-components'

export const bodyPadding = '1.75em'

const padding = {
  horizontal: `0 ${bodyPadding}`,
  left: `0 0 0 ${bodyPadding}`,
  right: `0 ${bodyPadding} 0 0`,
  none: '0',
}

export const Container = styled.div`
  padding: ${({ smPadding = 'horizontal' }) => padding[smPadding]};
  margin-bottom: 4.5em;

  ${({ mdPadding = null }) =>
    mdPadding &&
    css`
      @media (min-width: 48em) {
        padding: ${padding[mdPadding]};
      }
    `}

  @media (min-width: 80em) {
    padding: ${({ lgPadding = 'none' }) => padding[lgPadding]};
    max-width: 78em;
    margin: 0 auto 5.5em;
  }
`

const StyledTodo = styled.div`
  border: 2px dashed #ccc;
  padding: 0 ${bodyPadding};
`

export function Todo({ children, ...props }) {
  return (
    <Container {...props}>
      <StyledTodo>
        <Heading>{children}</Heading>
      </StyledTodo>
    </Container>
  )
}

export const Heading = styled.h2`
  font-size: 1.875em;
  line-height: 1;
  margin: 1em 0;
  font-family: 'DM Serif Display', serif;
  font-weight: normal;
  color: #4b4b4b;

  @media (min-width: 48em) {
    font-size: 2.75em;
  }

  @media (min-width: 80em) {
    font-size: 4em;
  }
`

export const SubHeading = styled(Heading)`
  font-size: 1.25em;

  @media (min-width: 48em) {
    font-size: 1.5em;
  }

  @media (min-width: 80em) {
    font-size: 2em;
  }
`

export const Button = styled.button`
  display: inline-block;
  text-decoration: none;
  text-align: center;
  font-size: 1.25em;
  line-height: 1;
  min-width: 8.75em;
  padding: 0.75em 0;
  font-family: inherit;
  font-weight: 500;
  background-color: ${(props) => (props.primary ? '#4b4b4b' : '#ffffff')};
  color: ${(props) => (props.primary ? '#ffffff' : '#4b4b4b')};
  transition: background-color 200ms;

  &:hover {
    background-color: #252525;
  }
`

const HeroContainer = styled(Container)`
  position: relative;
  padding: 0;

  @media (min-width: 48em) {
    padding-bottom: 2.5em;
  }

  @media (min-width: 80em) {
    &::before {
      content: '';
      position: absolute;
      left: 100%;
      top: 69px;
      width: calc(50vw - 39em);
      height: 207px;
      background-color: #faf4ef;
    }
  }
`

const HeroImg = styled.img`
  display: block;
  margin-left: auto;
  width: 75%;
  height: 365px;
  object-fit: cover;
  object-position: left bottom;
  border-radius: 0 0 0 75px;

  @media (min-width: 48em) {
    height: auto;
  }
`

const HeroText = styled.div`
  position: absolute;
  left: ${bodyPadding};
  bottom: 87px;
  width: 60%;
  padding: 2em 0;
  background-color: rgba(255, 255, 255, 0.78);
  backdrop-filter: blur(20px);

  @media (min-width: 48em) {
    width: 40%;
    padding: 3.75em 1.75em 3.75em 0;
    min-width: 22em;
    bottom: 0;
  }

  @media (min-width: 80em) {
    left: 0;
  }
`

const HeroHeading = styled(Heading)`
  margin: 0.6em 0;
`

const HeroTextBody = styled.p`
  font-size: 0.75em;
  line-height: 1.2;

  @media (min-width: 48em) {
    font-size: 1.25em;
  }

  @media (min-width: 80em) {
    font-size: 1.5em;
  }
`

export function Hero() {
  return (
    <HeroContainer>
      <HeroImg
        src="/img/hero.jpg"
        sizes="75vw"
        srcSet="/img/hero-1024w.jpg 1024w, /img/hero.jpg 1920w"
        alt="Illustrating image of home furniture"
      />
      <HeroText>
        <HeroHeading>Modern Interior for your Dream House</HeroHeading>
        <HeroTextBody>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </HeroTextBody>
      </HeroText>
    </HeroContainer>
  )
}

const StyledQuote = styled.div`
  background: #faf4ef;
  border-radius: 0px 50px 0px 0px;
  padding: 2.5em;

  @media (min-width: 48em) {
    border-radius: 0px 60px 0px 0px;
  }

  @media (min-width: 80em) {
    border-radius: 0px 100px 0px 0px;
    padding: 5.125em 5.5em;
  }
`

const QuoteHeading = styled(Heading)`
  line-height: 1.5;
  margin: 0 0 0.6em;

  @media (min-width: 80em) {
    margin-bottom: 0.25em;
  }
`

const QuoteButton = styled(Button)`
  margin: 0 1.25em 0.6em 0;

  @media (min-width: 48em) {
    margin-bottom: 0;
  }
`

export function Quote() {
  return (
    <StyledQuote>
      <QuoteHeading>Get your quotation today</QuoteHeading>
      <QuoteButton as="a" href="#" primary>
        Quote me
      </QuoteButton>
      <Button as="a" href="#">
        Contact sales
      </Button>
    </StyledQuote>
  )
}
