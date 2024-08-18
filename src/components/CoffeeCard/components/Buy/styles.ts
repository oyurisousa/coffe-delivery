import styled from 'styled-components'

export const BuyContainer = styled.div`
  width: 100%;
  padding: 0 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.25rem;

  .price {
    font-family: 'Baloo 2';
    font-size: 24px;
    font-weight: 800;
    line-height: 31.2px;

    &::before {
      content: 'R$ ';
      font-size: 14px;
      font-weight: 400;
      line-height: 18.2px;
    }
  }
  .count {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
    padding: 0.5rem;
    border-radius: 0.375rem;
    background-color: ${(props) => props.theme['base-button']};
    .countdown {
      font-size: 16px;
      font-weight: 400;
      line-height: 20.8px;
      text-align: center;
    }

    svg {
      cursor: pointer;
      padding: 0.125rem;
    }
  }
  .cart {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    border-radius: 0.375rem;
    background-color: ${(props) => props.theme['purple-dark']};
  }
`
