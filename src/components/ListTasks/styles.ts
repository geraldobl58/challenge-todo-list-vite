import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const TopHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
`

export const Box = styled.div`
  color: var(--blue);
  font-weight: bold;
  display: block;

  span {
    background: var(--gray-400);
    color: var(--gray-100);
    padding: 2px 8px;
    border-radius: 999px;
    font-size: 0.75rem;
  }
`


export const ListBox = styled.section`
  border-top: 1px solid var(--gray-400);
  padding: 4rem 1.5rem;
`

export const Empty = styled.section`
  color: var(--gray-300);
  line-height: 1.4;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  
`

export const Title = styled.section`
  font-weight: 700;
  margin-top: 2rem;
`

export const Subtitle = styled.section`
  padding-top: 0.5rem;
`