import styled from 'styled-components'

export const HeaderContainer = styled.header`
  height: 104px;
  margin: 0 auto;
  padding: 0 1.25rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const HeaderContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const HeaderContentActions = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`

export const Location = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.2rem;

  background-color: ${(props) => props.theme['purple-light']};
  border-radius: 6px;
  padding: 0.5rem;
  color: ${(props) => props.theme['purple-dark']};
`
