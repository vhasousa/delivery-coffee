import styled from 'styled-components'

export const CheckoutContainer = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  div {
    > h2 {
      font-family: 'Baloo 2';
      font-size: 1rem;
      color: ${(props) => props.theme['base-subtitle']};
      margin-bottom: 1rem;
    }
  }
`
