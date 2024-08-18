import styled from 'styled-components'

export const InfoContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 45%;
    max-width: 600px;
  }
`

export const InfoContent = styled.div`
  width: 100%;
  max-width: 588px;
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 3rem;
    font-family: 'baloo 2', sans-serif;
    font-weight: 900;
    line-height: 1.3;
    color: ${(props) => props.theme['base-title']};
    margin-bottom: 1rem;
  }
`

export const AdvantageContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 3rem;

  .advantage {
    width: 48%;
    display: flex;
    justify-content: start;
    gap: 1rem;
    align-items: center;

    span {
      font-size: 1rem;
    }
  }

  .advantage:nth-child(1) .advantage-icon {
    background-color: ${(props) => props.theme['yellow-dark']};
  }
  .advantage:nth-child(2) .advantage-icon {
    background-color: ${(props) => props.theme['base-text']};
  }
  .advantage:nth-child(3) .advantage-icon {
    background-color: ${(props) => props.theme.yellow};
  }
  .advantage:nth-child(4) .advantage-icon {
    background-color: ${(props) => props.theme.purple};
  }

  .advantage-icon {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 32px;
    height: 32px;
    border-radius: 50%;
    /* &:nth-child(2) {
      
    }
    &:nth-child(3) {
    }
    &:nth-child(4) {
      background-color: ${(props) => props.theme['base-text']};
    } */
  }
  /* .advantage-icon:nth-child(4) {
    background-color: ${(props) => props.theme.purple};
  } */
`

export const CoffeeListContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  h2 {
    font-size: 2rem;
    font-weight: 800;
    font-family: 'baloo 2', sans-serif;
    line-height: 2.6;
  }
`
export const CoffeeListContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-grow: 50px;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 auto;
  width: 100%;
  gap: 2.5rem;
  transition: flex-wrap 1s;
`
