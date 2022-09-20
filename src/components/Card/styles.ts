import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 0.75rem;
  background: var(--gray-500);
  border: 1px solid #333333;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.06);
  border-radius: 8px;
  color: var(--gray-100);
  gap: 0.75rem;
  padding: 1rem;
  
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Content = styled.div`
  flex: 1;
  line-height: 1.4;
  display: fle;
`

export const BoxContainer = styled.div`
  color: var(--gray-300);
`

export const Status = styled.div`
  cursor: pointer;
  position: relative;

  &:before {
    content: '';
    display: inline-block;
    height: 17.45px;
    width: 17.45px;
    border: 2px solid var(--blue);
    border-radius: 50%;
    transition: 0.2s;
  }
`

export const StatusIcon = styled.div`
  position: absolute;
  left: 3px;
  top: 2px;
`