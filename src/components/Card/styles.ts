import styled from 'styled-components'

export const CardContainer = styled.article`
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  background: ${(props) => props.theme['base-card']};
  width: 16rem;
  border-radius: 0.375rem 2.25rem 0.375rem 2.25rem;
  text-align: center;
  padding: 0 1.25rem 1.25rem 1.25rem;

  img {
    margin-top: -1.25rem;
  }

  .card__tag {
    display: flex;
    gap: 0.5rem;

    span {
      background: ${(props) => props.theme['yellow-light']};
      color: ${(props) => props.theme['yellow-dark']};
      padding: 0.375rem;
      border-radius: 1rem;
      font-size: 0.625rem;
      font-weight: 700;
      margin-top: 1rem;
    }
  }

  h3 {
    font-family: 'Baloo 2';
    font-size: 1.25rem;
    font-weight: 700;
    color: ${(props) => props.theme['base-subtitle']};
    line-height: 2.6;
  }

  p {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-label']};
  }

  footer {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    margin-top: 2rem;

    div {
      display: flex;
      gap: 0.375rem;
    }

    div {
      display: flex;
      align-items: center;

      span {
        font-size: 0.875rem;
      }

      p {
        font-family: 'Baloo 2';
        font-weight: 700;
        font-size: 1.5rem;
        color: ${(props) => props.theme['base-text']};
      }

      div {
        background: ${(props) => props.theme['base-button']};
        padding: 0.625rem;
        border-radius: 0.375rem;

        button {
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
      }

      .card__cart {
        padding: 0.625rem;
        border-radius: 0.375rem;
        border: none;
        background: ${(props) => props.theme['purple-dark']};
        line-height: 0;
        color: ${(props) => props.theme.white};
      }
    }
  }
`
