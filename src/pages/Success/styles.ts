import styled from 'styled-components'

export const SuccessContainer = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > div {
    .success__title {
      > h1 {
        font-family: 'Baloo 2';
        font-size: 2rem;
        font-weight: 800;
        color: ${(props) => props.theme['yellow-dark']};
      }

      > p {
        font-size: 1.25rem;
        color: ${(props) => props.theme['base-subtitle']};
      }
    }
  }

  img {
    width: auto;
    max-width: 30.75rem;
    height: auto;
    max-height: 18rem;
  }
`

export const SuccessInfo = styled.div`
  padding: 2.5rem;
  background: ${(props) => props.theme.white};
  border-radius: 0.375rem 2.25rem;
  position: relative;
  margin-top: 3rem;

  &::before {
    content: '';
    z-index: -1;
    background: linear-gradient(to right, #dbac2c, #8047f8);
    border-radius: 7px 37px;
    position: absolute;
    inset: -1px;
  }
`

export const SuccessItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:not(:first-child) {
    margin-top: 2rem;
  }

  .item__icon {
    color: white;
    padding: 0.5rem;
    border-radius: 50%;
    line-height: 0;
  }

  span {
    font-weight: 700;
  }
`
