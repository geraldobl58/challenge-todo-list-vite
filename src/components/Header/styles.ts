import styled from 'styled-components'

export const Container = styled.header`
  background: var(--gray-700);
  padding: 4.5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    content: '';
    display: inline-block;
    width: 2rem;
    height: 2rem;
    background: url('/logo.svg');
    background-size: contain;
    background-repeat: no-repeat;
  }

  span {
    display: block;
    line-height: 1.6;
    font-size: 2.5rem;
    font-weight: 900;
  }
  
  .blue {
      color: var(--blue);
  }

  .purpleDark {
    color: var(--purpleDark);
  }

`