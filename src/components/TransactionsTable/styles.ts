import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 4rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      color: var(--text-body);
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height:1.5rem;
    }

    td {
      padding: 1rem 2rem;
      border: 0;
      background: var(--shape);
      color: var(--text-body);
      border-radius: 0.25rem;

      button {
        border: 0;
        background: transparent;
        width: 1.5rem;
        transition: filter 0.2s;

        &:hover {
          filter: brightness(0.9)
        }        
      }

      &:first-child {
        color: var(--title)
      }

      &.deposit {
        color: var(--green)
      }

      &.withdraw {
        color: var(--red)
      }
    }
  }
`
