import styled from 'styled-components'

export const CartContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme['yellow-light']};
  padding: 0.5rem;
  border-radius: 6px;
`

export const CountdownCart = styled.div`
  width: 20px;
  height: 20px;
  margin-top: -35px;
  margin-right: -35px;
  position: absolute;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;

  font-size: 12px;
  font-weight: bold;
  color: ${(props) => props.theme.white};
  border-radius: 50%;
  background-color: ${(props) => props.theme['yellow-dark']};
`
