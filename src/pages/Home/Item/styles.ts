import styled from 'styled-components'

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  div {
    background: ${(props) => props.theme.purple};
    color: white;
    padding: 0.5rem;
    border-radius: 50%;
    line-height: 0;
  }

  span {
    color: ${(props) => props.theme['base-text']};
    white-space: nowrap;
  }
`
