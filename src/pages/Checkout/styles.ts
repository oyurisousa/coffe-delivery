import styled from 'styled-components'

export const CheckoutContainer = styled.main`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 448px;
`

export const CompleteOrder = styled.section``
export const AddressForm = styled.form`
  width: 100%;
  max-width: 35rem;
  display: flex;
  justify-content: space-between;
  gap: 1rem 0.75rem;
  flex-wrap: wrap;
  border: 1px solid red;

  input {
    height: 2.625rem;
    border: 0;
    background-color: ${(props) => props.theme['base-input']};
    border: 1px solid ${(props) => props.theme['base-button']};
    padding: 0.75rem;
    /* padding-left: 2rem; */
    border-radius: 1rem;
  }
  ::placeholder {
    /* padding-left: 0.75rem; */
  }
  #cep {
    flex: 1/2;
    /* flex: 1; */
    /* max-width: 12.5rem; */
  }
  #street {
    flex: 1 40rem;
    /* width: 100%; */
    /* max-width: 35rem; */
  }
  #number {
    flex: 1;
    /* width: 100%; */
    /* max-width: 12.5rem; */
  }
  #complement {
    flex: 2;
    /* width: 100%; */
    max-width: 21.75rem;
  }
  #neighborhood {
    flex: 33%;
    /* width: 35%; */
    /* max-width: 12.5rem; */
  }
  #city {
    flex: 1/2;
    /* width: 35%; */
    /* max-width: 17.25rem; */
  }
  #uf {
    flex: 1 3.75rem;
    /* width: 15%; */
    max-width: 3.75rem;
  }
`
export const PaymentMethod = styled.div``

export const SelectedCoffees = styled.aside``
export const ConfirmOrder = styled.div`
  width: Fixed (448px) px;
  height: Hug (498px) px;
  padding: 40px 0px 0px 0px;
  gap: 24px;
  border-radius: 6px 44px 6px 44px;
  background-color: ${(props) => props.theme['base-card']};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
