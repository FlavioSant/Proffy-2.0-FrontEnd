import styled, { css } from 'styled-components';

interface ContainerProps {
  isErrored: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
  label {
    font-size: 1.4rem;
    position: relative;

    &:focus-within::after {
      width: calc(100% - 3.2rem);
      height: 2px;
      content: '';
      background: var(--color-primary-light);
      position: absolute;
      left: 1.6rem;
      right: 1.6rem;
      bottom: -1.6rem;
    }
  }

  input {
    width: 100%;
    height: 5.6rem;
    margin-top: 0.8rem;
    border: 1px solid var(--color-line-in-white);
    border-radius: 0.8rem;
    background: var(--color-input-background);
    outline: 0;
    padding: 0 1.6rem;
    font: 1.6rem Archivo;

    ${(props) =>
      props.isErrored &&
      css`
        border-color: var(--color-input-error);
      `}

    ${(props) =>
      props.isFilled &&
      css`
        border-color: var(--color-input-filled);
      `}
  }

  span {
    display: flex;
    align-items: center;
    margin-top: 0.3rem;
    color: var(--color-input-error);
    font-size: 1.4rem;

    svg {
      margin-left: 0.3rem;
    }

    ${(props) =>
      props.isFilled &&
      css`
        display: none;
      `}
  }
`;
