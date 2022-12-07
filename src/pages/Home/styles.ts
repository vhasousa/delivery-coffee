import styled from 'styled-components'

export const HomeContainer = styled.main`
  .coffees {
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    margin: 4rem auto;

    h2 {
      font-size: 2rem;
      font-weight: 800;
      font-family: 'Baloo 2';
      color: ${(props) => props.theme['base-title']};
    }
  }

  .coffee-cards {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin-top: 3rem;
    gap: 3rem;
  }
`
