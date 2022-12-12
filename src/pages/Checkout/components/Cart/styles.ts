import styled from 'styled-components'

export const CartContainer = styled.section`
  width: 28rem;
  background: ${(props) => props.theme['base-card']};
  border-radius: 0.375rem 2.75rem 0.375rem 2.75rem;
  padding: 2.5rem;
`

export const CartItem = styled.div`
  margin-top: 1.5rem;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${(props) => props.theme['base-button']};
  padding-bottom: 1.5rem;

  img {
    width: 4rem;
  }

  > div {
    > div {
      margin-top: 0.5rem;
      display: flex;
      gap: 0.5rem;

      .cart__remove {
        padding: 0 0.5rem 0 0.5rem;
        display: flex;
        align-items: center;
        gap: 0.25rem;

        svg {
          color: ${(props) => props.theme.purple};
        }

        span {
          line-height: 0;
          color: ${(props) => props.theme['base-text']};
        }
      }

      button {
        border: none;
        font-size: 0.75rem;
        background: ${(props) => props.theme['base-button']};
        border-radius: 0.375rem;
      }
    }
  }
`

export const Price = styled.div`
  display: flex;
  gap: 0.375rem;
  font-weight: 700;
  color: ${(props) => props.theme['base-text']};
`

export const CartQuantity = styled.div`
  display: flex;
  align-items: center;

  background: ${(props) => props.theme['base-button']};
  padding: 0.625rem;
  border-radius: 0.375rem;

  > button {
    border: none;
    background: transparent;

    svg {
      line-height: 0;
      color: ${(props) => props.theme.purple};
    }
  }

  input {
    border: none;
    background: transparent;
    outline: none;
    height: 1.25rem;
    width: 1.25rem;
    text-align: center;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    &[type='number'] {
      -moz-appearance: textfield;
    }
  }
`

export const TotalPrices = styled.div`
  margin-top: 1.5rem;

  div {
    display: flex;
    justify-content: space-between;
    margin-top: 0.875rem;
  }

  > button {
    margin-top: 1.5rem;
    width: 100%;
    padding: 1rem 0 1rem 0;
    border: none;
    background: ${(props) => props.theme.yellow};
    color: ${(props) => props.theme.white};
    border-radius: 0.3rem;
    font-weight: 700;
    transition: 0.3s;

    &:hover {
      background: ${(props) => props.theme['yellow-dark']};
    }
  }
`

export const Total = styled.div`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${(props) => props.theme['base-subtitle']};
`
