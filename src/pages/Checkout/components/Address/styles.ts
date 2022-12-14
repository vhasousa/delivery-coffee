import styled from 'styled-components'

export const AddressContainer = styled.section`
  background: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
  max-width: 40rem;
  border-radius: 0.375rem;

  .address__title {
    display: flex;
    gap: 0.375rem;
    align-items: flex-start;

    svg {
      color: ${(props) => props.theme['yellow-dark']};
    }

    h2 {
      font-weight: 400;
      color: ${(props) => props.theme['base-subtitle']};
      font-size: 1rem;
      line-height: 1.6;
      margin-bottom: 0;
    }

    p {
      color: ${(props) => props.theme['base-text']};
      font-size: 0.875rem;
    }
  }

  .address__info {
    margin-top: 2rem;

    > form {
      display: grid;
      grid-template-columns: 12.5rem 17.25rem 3.75rem;
      gap: 0.75rem 1rem;

      .cep {
        grid-column: span 3;
        width: 12.5rem;
      }

      .street {
        grid-column: span 3;
      }

      .number {
        grid-column: span 1;
      }

      .complement {
        grid-column: span 2;
      }

      &:focus {
        border: solid 1px ${(props) => props.theme['yellow-light']};
      }

      input {
        width: 100%;
        background: ${(props) => props.theme['base-input']};
        border: solid 1px ${(props) => props.theme['base-button']};
        padding: 1rem;
        border-radius: 0.25rem;

        &::placeholder {
          color: ${(props) => props.theme['base-label']};
        }
      }
    }
  }
`
