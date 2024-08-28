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
    cursor: pointer;
  }
`
export const BuyCartContainer = styled(BuyContainer)`
  justify-content: start;
  gap: 0.5rem;
  padding: 0.5rem 0;

  .count {
    padding: 0.3rem;
  }

  .cart {
    /* height: 32px; */

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.25rem;

    padding: 0.35rem;
    border-radius: 0.375rem;
    background-color: ${(props) => props.theme['base-button']};
    cursor: pointer;
    border: 0;

    span {
      font-size: 12px;
      line-height: 19.2px;
      text-align: left;
      font-weight: lighter;
    }
  }
`
