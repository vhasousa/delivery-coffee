import styled from 'styled-components'

export const PaymentMethodContainer = styled.section`
  background: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
  max-width: 40rem;
  border-radius: 0.375rem;
  margin-top: 1rem;

  .payment__title {
    display: flex;
    gap: 0.375rem;
    align-items: flex-start;

    svg {
      color: ${(props) => props.theme.purple};
    }

    h2 {
      font-weight: 400;
      color: ${(props) => props.theme['base-subtitle']};
      font-size: 1rem;
      line-height: 1.6;
    }

    p {
      color: ${(props) => props.theme['base-text']};
      font-size: 0.875rem;
    }
  }

  .payment__options {
    width: 100%;
    display: grid;
    grid-template-columns: 33% 33% 33%;
    grid-gap: 0.5rem;
    margin-top: 2rem;

    button {
      width: 100%;
      display: flex;
      align-items: center;
      gap: 0.75rem;

      padding: 1rem;
      border-radius: 0.25rem;
      background: ${(props) => props.theme['base-button']};
      color: ${(props) => props.theme['base-text']};
      border: 1px solid transparent;
      cursor: pointer;

      &:focus {
        border: 1px solid ${(props) => props.theme.purple};
        background: ${(props) => props.theme['purple-light']};
      }

      svg {
        color: ${(props) => props.theme.purple};
      }

      span {
        line-height: 0;
        font-size: 0.75rem;
      }
    }
  }
`
