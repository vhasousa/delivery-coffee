import styled from 'styled-components'

import backgroundBlur from '../../../assets/background-blur.png'

export const HeroContainer = styled.section`
  padding: 3rem;
  position: relative;

  &::before {
    content: '';
    height: 100%;
    position: absolute;
    background-image: url(${backgroundBlur});
    background-size: cover;
    width: 100%;

    -webkit-filter: blur(2rem);
    -moz-filter: blur(2rem);
    -ms-filter: blur(2rem);
    -o-filter: blur(2rem);
    filter: blur(2rem);
  }

  .hero__wrapper {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-areas: 'a b';
    max-width: 1200px;
    margin: 0 auto;
    justify-items: end;

    div {
      h1 {
        font-family: 'Baloo 2';
        font-size: 3rem;
        color: ${(props) => props.theme['base-title']};
        line-height: 1.4;
      }

      h3 {
        font-size: 1.25rem;
        font-weight: 400;
        margin-top: 1.5rem;
      }

      .itens {
        margin-top: 4rem;
        display: grid;
        grid-template-columns: 14.5rem 1fr;
        column-gap: 2rem;
        row-gap: 1rem;
      }
    }
  }
`
