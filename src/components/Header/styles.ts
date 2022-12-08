import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme.background};
  position: sticky;
  z-index: 10;
  top: 0;

  .header__wrapper {
    max-width: 1200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    padding: 3rem 0 3rem 0;

    div {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    a {
      &:first-child {
        background: ${(props) => props.theme['purple-light']};
        padding: 0.5rem;
        border-radius: 6px;

        svg {
          color: ${(props) => props.theme.purple};
          vertical-align: middle;
        }

        span {
          color: ${(props) => props.theme['purple-dark']};
          vertical-align: middle;
        }
      }

      &:nth-child(2) {
        position: relative;
        background: ${(props) => props.theme['yellow-light']};
        padding: 0.5rem;
        border-radius: 6px;
        svg {
          color: ${(props) => props.theme['yellow-dark']};
          vertical-align: middle;
        }
      }
    }
  }
`

export const CartAmount = styled.div<{
  hasProduct: boolean
}>`
  position: absolute;
  padding: 0.5rem;
  right: -0.5rem;
  top: -0.6rem;

  border-radius: 100%;
  background: ${(props) => props.theme['yellow-dark']};

  font-weight: bold;
  font-size: 0.75rem;
  color: ${(props) => props.theme.white};
  line-height: 0.5rem;

  visibility: ${(props) => (props.hasProduct ? 'visible' : 'hidden')};
`
