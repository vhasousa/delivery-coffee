import styled from 'styled-components'

export const HeaderContainer = styled.header`
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 1rem 0 1rem 0;

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
      background: ${(props) => props.theme['yellow-light']};
      padding: 0.5rem;
      border-radius: 6px;
      svg {
        color: ${(props) => props.theme['yellow-dark']};
        vertical-align: middle;
      }
    }
  }
`
