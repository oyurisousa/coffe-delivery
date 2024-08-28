import styled from 'styled-components'

interface CoffeeCardContainerProps {
  variant?: 'catalog' | 'cart'
}

export const CoffeeCardContainer = styled.div<CoffeeCardContainerProps>`
  width: 100%;
  max-width: 275px;
  padding: 0 1% 1% 1%;
  background-color: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  img {
    margin-top: -20px;
  }

  h3 {
    font-size: 20px;
    font-family: 'baloo 2', sans-serif;
    font-weight: bold;
    line-height: 26px;
    text-align: center;
  }

  p {
    font-size: 14px;
    line-height: 18.2px;
    text-align: center;
    color: ${(props) => props.theme['base-label']};
  }
`

export const Tag = styled.span`
  background-color: ${(props) => props.theme['yellow-light']};
  padding: 4px 8px;
  border-radius: 100px;
  color: ${(props) => props.theme['yellow-dark']};
  font-weight: bold;
  font-size: 10px;
  line-height: 13px;
`

export const CoffeeCardCartContainer = styled.div`
  width: 100%;
  max-width: 368px;
  padding: 0.25rem 0.25rem;
  background-color: ${(props) => props.theme['base-card']};

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem 1rem;

  .info-cart {
    display: flex;
    flex-direction: column;
    flex: 1;

    .title-price {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  h3 {
    font-family: Roboto;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.3;
    text-align: left;
  }

  span {
    font-size: 16px;
    font-weight: bold;
    line-height: 1.3;
    text-align: right;
    color: ${(props) => props.theme['base-text']};
  }
`
