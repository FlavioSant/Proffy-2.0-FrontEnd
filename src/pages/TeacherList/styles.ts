import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  form {
    width: 100%;
    margin-top: 3.2rem;

    label {
      color: var(--color-text-in-primary);
    }

    .react-select__option {
      color: var(--color-text-complement);
    }

    button {
      width: 100%;
      height: 5.6rem;
      background: var(--color-secundary);
      color: var(--color-button-text);
      border: 0;
      border-radius: 0.8rem;
      cursor: pointer;
      font: 700 1.6rem Archivo;
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      transition: background-color 0.2s;
      margin-top: 3.2rem;

      &:hover {
        background: var(--color-secundary-dark);
      }
    }
  }

  @media (min-width: 700px) {
    max-width: 100%;

    form {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      column-gap: 16px;
      position: absolute;
      bottom: -28px;

      button {
        margin-top: 4.2rem;
      }
    }
  }
`;

export const MainContent = styled.main`
  margin: 3.2rem auto;
  width: 90%;

  @media (min-width: 700px) {
    padding: 3.2rem 0;
    max-width: 740px;
    margin: 0 auto;
  }
`;
