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

  .payment__options--container {
    width: 100%;
    display: grid;
    grid-template-columns: 33% 33% 33%;
    grid-gap: 0.5rem;
    margin-top: 1rem;
  }

  .payment__option {
    input {
      appearance: none;
      visibility: hidden;

      &:checked + label div {
        background: ${(props) => props.theme['purple-light']};
        border-color: ${(props) => props.theme.purple};
      }

      &:not(:checked):hover + label div {
        background: ${(props) => props.theme['base-hover']};
      }
    }

    .payment__option--label {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      padding: 1rem;
      border-radius: 0.25rem;
      background: ${(props) => props.theme['base-button']};
      color: ${(props) => props.theme['base-text']};
      border: 1px solid transparent;
      cursor: pointer;
      transition: all 0.4s ease 0s;

      svg {
        color: ${(props) => props.theme.purple};
      }

      span {
        font-size: 0.75rem;
      }
    }
  }
`
