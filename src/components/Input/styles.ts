import styled, { css } from 'styled-components';

export interface ContainerProps {
  isErrored: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
  & + div {
    margin-top: 1rem;
  }

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
        border-color: var(--color-line-in-white);
      `}
  }
`;
