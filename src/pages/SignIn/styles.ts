import styled from 'styled-components';
import backgroundImg from '../../assets/images/background.svg';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 2rem;
  background: var(--color-primary);

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 80%;
    height: 100%;

    h1 {
      margin-bottom: 2rem;
      color: var(--color-title-in-primary);
    }

    button {
      width: 100%;
      height: 5.6rem;
      margin-top: 4rem;
      border: 0;
      border-radius: 0.8rem;
      color: var(--color-button-text);
      background: var(--color-secundary);
      transition: background 0.2s;
      cursor: pointer;

      &:hover {
        background: var(--color-secundary-dark);
      }
    }
  }

  @media (min-width: 700px) {
    background: var(--color-background);
    max-width: 600px;

    form {
      width: 85%;

      h1 {
        color: var(--color-text-title);
      }
    }
  }
`;

export const ContentFooter = styled.footer`
  width: 80%;

  div {
    display: flex;
    justify-content: space-between;
  }

  p,
  span {
    color: var(--color-text-in-primary);
  }

  span {
    font-size: 1.3rem;
  }

  a {
    color: var(--color-text-title);
    font-weight: bold;
  }

  @media (min-width: 700px) {
    p {
      color: var(--color-text-base);
    }

    span {
      color: var(--color-text-complement);
    }

    a {
      color: var(--color-primary);
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  display: none;
  background: url(${backgroundImg}) no-repeat center;
  background-size: 360px auto;
  background-color: var(--color-primary);
  padding: 0 2rem;

  h1 {
    font-weight: 500;
    font-size: 2.5rem;
    color: var(--color-text-in-primary);
    max-width: 300px;
  }

  img {
    width: 30rem;
    margin-bottom: 1rem;
  }

  @media (min-width: 700px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  @media (min-width: 1100px) {
    background-size: 600px;

    img {
      width: initial;
    }

    h1 {
      font-size: 3rem;
    }
  }
`;
