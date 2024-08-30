import * as RadioGroup from '@radix-ui/react-radio-group'
import styled from 'styled-components'

export const CheckoutContainer = styled.main`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 448px;
`

export const CompleteOrder = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
export const AddressForm = styled.div`
  width: 100%;
  max-width: 40rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2.5rem;
  gap: 2rem;
  background-color: ${(props) => props.theme['base-card']};
  border-radius: 0.375rem;

  .info_address {
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;

    div {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;

      h4 {
        font-weight: normal;
      }
      p {
        font-size: 14px;
      }
    }
  }

  form {
    width: 100%;
    display: flex;
    gap: 1rem 0.75rem;
    flex-wrap: wrap;
    /* border: 1px solid red; */

    input {
      height: 2.625rem;
      border: 0;
      background-color: ${(props) => props.theme['base-input']};
      color: ${(props) => props.theme['base-text']};
      border: 1px solid ${(props) => props.theme['base-button']};
      padding: 0.75rem;

      border-radius: 1rem;

      &::placeholder {
        color: ${(props) => props.theme['base-label']};
      }
    }
    #cep {
      flex: 1 35rem;
      max-width: 12.5rem;
    }
    #street {
      flex: 1 35rem;
    }
    #number {
      flex: 1;
    }
    #complement {
      flex: 2;

      max-width: 21.75rem;
    }
    #neighborhood {
      flex: 1;
    }
    #city {
      flex: 1.5;
    }
    #uf {
      flex: 1/5 3.75rem;

      max-width: 3.75rem;
    }
  }
`
export const PaymentMethod = styled.div`
  width: 100%;
  max-width: 40rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2.5rem;
  gap: 2rem;
  background-color: ${(props) => props.theme['base-card']};
  border-radius: 0.375rem;

  .info_payment {
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;

    div {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;

      h4 {
        font-weight: normal;
      }
      p {
        font-size: 14px;
      }
    }
  }
`

export const SelectedCoffees = styled.aside``
export const ConfirmOrder = styled.div`
  width: Fixed (448px) px;
  height: Hug (498px) px;
  padding: 2.5rem 0;
  gap: 24px;
  border-radius: 6px 44px 6px 44px;
  background-color: ${(props) => props.theme['base-card']};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .orders_added_cart {
    width: 100%;
    max-width: 23rem;
  }

  .total_cart {
    width: 100%;
    max-width: 23rem;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 0.75rem;

    div {
      display: flex;
      justify-content: space-between;

      color: ${(props) => props.theme['base-text']};
      line-height: 1.3;
      font-size: 14px;

      span {
        &::before {
          content: 'R$ ';
        }
      }
    }
    .delivery_fee span,
    .total_itens span {
      font-size: 16px;
    }

    div.total {
      font-size: 20px;
      font-weight: bold;
    }
  }
`

export const Separator = styled.div`
  width: 100%;
  max-width: 23rem;
  height: 1px;
  margin: 1rem 0;

  background-color: ${(props) => props.theme['base-button']};
`

export const ButtonFibalizeOrder = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 23rem;
  height: 2.875rem;
  padding: 0.75rem 0.5rem;

  background-color: ${(props) => props.theme.yellow};
  border-radius: 0.375rem;
  border: 0;
  cursor: pointer;

  font-weight: bold;
  line-height: 1.6;
  color: ${(props) => props.theme.white};
  transition: 0.3s;

  &:disabled:hover {
    opacity: 0.6;
    cursor: not-allowed;
  }
`

export const PaymentType = styled(RadioGroup.Root)`
  width: 100%;
  max-width: 35rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  margin-top: 0.5rem;
`
export const PaymentTypeButton = styled(RadioGroup.Item)`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  gap: 0.75rem;
  height: 51px;
  padding: 1rem;

  border-radius: 0.375rem;
  background-color: ${(props) => props.theme['base-button']};
  border: 0;
  cursor: pointer;

  font-size: 12px;
  line-height: 1.6;
  color: ${(props) => props.theme['base-text']};
`
