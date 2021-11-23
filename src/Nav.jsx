import { useEffect, useState, useRef } from 'react'
import styled, { createGlobalStyle } from 'styled-components'

import { Container } from './BaseStyles'

const NavbarContainer = styled(Container)`
  margin-bottom: 0;
`

const StyledNav = styled.nav`
  display: flex;
  height: 6.5em;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 48em) {
    height: 7.875em;
  }
`

const BtnMenuToggle = styled.button`
  padding: 0.625em;
  margin-left: -0.625em;

  @media (min-width: 48em) {
    display: none;
  }
`

const MenuToggleIcon = styled.span`
  display: block;
  position: relative;
  width: 1.875em;
  height: 1.25em;
  background: linear-gradient(
    to bottom,
    transparent 0%,
    transparent 40%,
    #4b4b4b 40%,
    #4b4b4b 55%,
    transparent 55%,
    transparent 100%
  );

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 50%;
    height: 15%;
    background-color: #4b4b4b;
    will-change: transform;
    transition: transform 300ms;
  }

  &::before {
    left: 0;
    top: 0;
  }

  ::after {
    right: 0;
    bottom: 5%;
  }

  .menu-visible &::before {
    transform: translate(100%);
  }

  .menu-visible &::after {
    transform: translate(-100%);
  }
`

const LogoLink = styled.a`
  width: 5.375em;
  margin-right: auto;
`

const Menu = styled.div`
  position: absolute;
  top: 6.5em;
  bottom: 0;
  right: 100%;
  width: 100vw;
  z-index: 1100;
  overflow: auto;
  text-align: center;
  background-color: white;
  visibility: hidden;
  will-change: transform, visibility;
  transition: transform 200ms ease-out, visibility 200ms;

  &.menu-visible {
    visibility: visible;
    transform: translate(100%);
    transition: transform 250ms ease-in;
  }

  @media (min-width: 48em) {
    position: static;
    width: auto;
    visibility: visible;
    overflow: visible;
    display: flex;

    &.menu-visible {
      transform: translate(0);
      transition: none;
    }
  }
`

const MenuLink = styled.a`
  display: block;
  font-size: 2em;
  padding: 0.625em;
  font-weight: 500;
  color: #4b4b4b;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  @media (min-width: 48em) {
    font-size: 1.625em;
  }

  @media (min-width: 80em) {
    font-size: 1.5em;
    padding: 0.625em 1.25em;
  }
`

const BtnOpenSearch = styled.button`
  padding: 0.25em;
  margin-left: auto;

  @media (min-width: 80em) {
    padding: 0.4375em;
  }

  svg {
    width: 1.625em;
    height: 1.625em;
  }
`

const BtnCart = styled.a`
  padding: 0.25em;
  margin-right: -0.25em;

  @media (min-width: 80em) {
    padding: 0.4375em;
    margin-right: -0.4375em;
  }

  svg {
    width: 1.6875em;
    height: 1.6875em;
  }
`

const SearchBackdrop = styled.div`
  position: absolute;
  z-index: 1110;
  pointer-events: none;
  top: 0;
  left: 0;
  width: 100vw;
  height: 104px;
  background-color: rgba(255, 255, 255, 0);
  backdrop-filter: blur(0);
  will-change: background-color, backdrop-filter;
  transition: background-color 300ms, backdrop-filter 300ms;

  &.search-visible {
    background-color: rgba(255, 255, 255, 0.78);
    backdrop-filter: blur(10px);
  }

  @media (min-width: 48em) {
    height: 7.875em;
  }
`

const Search = styled(Container)`
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  pointer-events: auto;
  visibility: hidden;
  opacity: 0;
  will-change: opacity, visibility;
  transition: opacity 250ms cubic-bezier(0.165, 0.84, 0.44, 1), visibility 250ms;

  .search-visible & {
    visibility: visible;
    opacity: 1;
    transition: opacity 250ms cubic-bezier(0.895, 0.03, 0.685, 0.22),
      visibility 250ms;
  }
`

const SearchInput = styled.input`
  -webkit-appearance: none;
  border-radius: 0;
  font-size: inherit;
  height: 2.5em;
  padding-left: 1em;
  border: 2px solid #4b4b4b;
  font-family: inherit;
  width: 100%;

  @media (min-width: 48em) {
    width: 20em;
  }
`

const BtnCloseSearch = styled.button`
  font-size: 2.5em;
  padding-left: 0.5em;
  font-family: inherit;
  color: #4b4b4b;

  @media (min-width: 48em) {
    padding-right: 0.5em;
    margin-right: 0.8em;
  }
`

const BodyOverflowStyles = createGlobalStyle`
  html.menu-visible,
  body.menu-visible {
    height: 100%;
    overflow: hidden;
  }
`

function Nav() {
  const [menuVisible, setMenuVisible] = useState(false)
  const [searchVisible, setSearchVisible] = useState(false)

  const searchInputEl = useRef(null)
  const btnOpenSearchEl = useRef(null)

  useEffect(() => {
    ;[document.documentElement, document.body].forEach((el) =>
      menuVisible
        ? el.classList.add('menu-visible')
        : el.classList.remove('menu-visible')
    )
  }, [menuVisible])

  return (
    <NavbarContainer>
      <BodyOverflowStyles />
      <StyledNav>
        <BtnMenuToggle
          onClick={() => setMenuVisible(!menuVisible)}
          className={menuVisible && 'menu-visible'}
          aria-label="Toggle menu"
        >
          <MenuToggleIcon />
        </BtnMenuToggle>

        <LogoLink href="#">
          <img src="img/logo.png" alt="SHPX Logo" />
        </LogoLink>

        <Menu
          className={menuVisible && 'menu-visible'}
          role="nav"
          aria-label="Menu"
        >
          <MenuLink href="#">Home</MenuLink>
          <MenuLink href="#">Menu</MenuLink>
          <MenuLink href="#">Another</MenuLink>
          <MenuLink href="#">Item</MenuLink>
        </Menu>

        <SearchBackdrop
          className={searchVisible && 'search-visible'}
          onTransitionEnd={(e) => {
            if (e.propertyName !== 'visibility') return

            if (searchVisible) {
              searchInputEl.current.focus()
            } else {
              btnOpenSearchEl.current.focus()
            }
          }}
        >
          <Search as="form" role="search">
            <SearchInput
              onKeyDown={(e) => e.key === 'Escape' && setSearchVisible(false)}
              ref={searchInputEl}
              type="search"
              name="search"
              placeholder="Search for products"
              aria-label="Search for products"
            />
            <BtnCloseSearch
              onClick={() => setSearchVisible(false)}
              type="reset"
              aria-label="Close search"
            >
              <span aria-hidden="true">&times;</span>
            </BtnCloseSearch>
          </Search>
        </SearchBackdrop>

        <BtnOpenSearch
          onClick={() => setSearchVisible(true)}
          aria-label="Open search"
          ref={btnOpenSearchEl}
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 27 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M26.7064 25.293L21.3036 19.8901C23.2116 17.6179 24.1687 14.6968 23.9755 11.7361C23.7822 8.77534 22.4535 6.00348 20.2663 3.99855C18.0792 1.99361 15.2025 0.910387 12.2361 0.974759C9.26977 1.03913 6.44277 2.24613 4.34466 4.34406C2.24655 6.44199 1.03929 9.26888 0.974659 12.2352C0.910025 15.2016 1.993 18.0784 3.99774 20.2657C6.00248 22.453 8.77422 23.782 11.735 23.9755C14.6957 24.1691 17.6168 23.2122 19.8892 21.3044L25.2921 26.7073C25.4797 26.8948 25.734 27.0002 25.9992 27.0002C26.2645 27.0002 26.5188 26.8948 26.7064 26.7073C26.8939 26.5197 26.9993 26.2654 26.9993 26.0001C26.9993 25.7349 26.8939 25.4806 26.7064 25.293ZM2.99999 12.5C2.99999 10.6211 3.55715 8.78437 4.60103 7.2221C5.6449 5.65983 7.1286 4.44219 8.8645 3.72316C10.6004 3.00413 12.5105 2.816 14.3533 3.18256C16.1962 3.54912 17.8889 4.4539 19.2175 5.7825C20.5461 7.1111 21.4509 8.80384 21.8175 10.6467C22.184 12.4895 21.9959 14.3996 21.2768 16.1355C20.5578 17.8714 19.3402 19.3551 17.7779 20.399C16.2156 21.4429 14.3789 22 12.5 22C9.98131 21.9972 7.5666 20.9954 5.78562 19.2144C4.00464 17.4334 3.00284 15.0187 2.99999 12.5Z"
              fill="#4B4B4B"
            />
          </svg>
        </BtnOpenSearch>

        <BtnCart href="#" aria-label="Open cart">
          <svg
            aria-hidden="true"
            viewBox="0 0 27 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M25.4643 14.5366L26.9839 6.17887C27.0101 6.03477 27.0043 5.88666 26.967 5.74503C26.9296 5.6034 26.8616 5.4717 26.7677 5.35925C26.6739 5.24679 26.5565 5.15633 26.4238 5.09425C26.2912 5.03218 26.1465 5 26 5H5.83462L5.22412 1.64225C5.14053 1.18134 4.89772 0.764418 4.53808 0.464269C4.17844 0.16412 3.72481 -0.000196925 3.25637 1.77115e-07H1C0.734784 1.77115e-07 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1C0 1.26522 0.105357 1.51957 0.292893 1.70711C0.48043 1.89464 0.734784 2 1 2H3.25625L6.68825 20.8754C6.20001 21.3054 5.84132 21.863 5.65247 22.4856C5.46361 23.1081 5.45207 23.7711 5.61914 24.3998C5.78621 25.0286 6.12527 25.5984 6.59825 26.0451C7.07122 26.4918 7.65938 26.7979 8.29667 26.9288C8.93395 27.0597 9.59512 27.0104 10.2059 26.7864C10.8167 26.5623 11.353 26.1724 11.7544 25.6605C12.1559 25.1485 12.4067 24.5348 12.4786 23.8881C12.5505 23.2415 12.4408 22.5877 12.1616 22H18.8384C18.5134 22.6852 18.4198 23.4573 18.5716 24.2003C18.7235 24.9433 19.1125 25.6168 19.6802 26.1196C20.2479 26.6223 20.9635 26.9271 21.7194 26.9879C22.4753 27.0488 23.2305 26.8626 23.8713 26.4572C24.5122 26.0518 25.004 25.4492 25.2728 24.7401C25.5416 24.031 25.5728 23.2538 25.3617 22.5255C25.1507 21.7972 24.7087 21.1571 24.1024 20.7016C23.4961 20.2461 22.7583 19.9999 22 20H8.56188L8.01637 17H22.5126C23.2153 17.0003 23.8957 16.7539 24.4352 16.3036C24.9747 15.8534 25.3389 15.228 25.4643 14.5366ZM10.5 23.5C10.5 23.7967 10.412 24.0867 10.2472 24.3334C10.0824 24.58 9.84811 24.7723 9.57403 24.8858C9.29994 24.9993 8.99834 25.0291 8.70736 24.9712C8.41639 24.9133 8.14912 24.7704 7.93934 24.5607C7.72956 24.3509 7.5867 24.0836 7.52882 23.7926C7.47094 23.5017 7.50065 23.2001 7.61418 22.926C7.72771 22.6519 7.91997 22.4176 8.16665 22.2528C8.41332 22.088 8.70333 22 9 22C9.39769 22.0004 9.77897 22.1586 10.0602 22.4398C10.3414 22.721 10.4996 23.1023 10.5 23.5ZM23.5 23.5C23.5 23.7967 23.412 24.0867 23.2472 24.3334C23.0824 24.58 22.8481 24.7723 22.574 24.8858C22.2999 24.9993 21.9983 25.0291 21.7074 24.9712C21.4164 24.9133 21.1491 24.7704 20.9393 24.5607C20.7296 24.3509 20.5867 24.0836 20.5288 23.7926C20.4709 23.5017 20.5007 23.2001 20.6142 22.926C20.7277 22.6519 20.92 22.4176 21.1666 22.2528C21.4133 22.088 21.7033 22 22 22C22.3977 22.0004 22.779 22.1586 23.0602 22.4398C23.3414 22.721 23.4996 23.1023 23.5 23.5ZM6.19825 7H24.8018L23.4965 14.179C23.4547 14.4094 23.3333 14.6179 23.1535 14.7679C22.9737 14.918 22.7469 15.0001 22.5128 15H7.65275L6.19825 7Z"
              fill="#4B4B4B"
            />
          </svg>
        </BtnCart>
      </StyledNav>
    </NavbarContainer>
  )
}

export default Nav
