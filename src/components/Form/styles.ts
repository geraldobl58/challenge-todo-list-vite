import styled from 'styled-components'

export const Container = styled.form`
  display: flex;
  gap: 0.5rem;
  margin-top: -1.75rem;
`

export const Input = styled.input`
  flex: 1;
  background: var(--gray-500);
  border: 1px solid var(--gray-700);
  border-radius: 8px;
  height: 3.375rem;
  padding: 1rem;
  color: var(--gray-100);
  transition: 0.2s;

  &:focus {
    box-shadow: 0 0 0 2px var(--blue);
  }
`
export const Button = styled.button`
  background: var(--blueDark);
  border-radius: 8px;
  color: var(--gray-100);
  border: none;
  width: 5.75rem;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background: var(--purpleDark);
  }
`