import styled, { css } from 'styled-components';
import { ContainerProps } from '../Input/styles';

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
      bottom: 0.5rem;
    }
  }

  textarea {
    width: 100%;
    height: 16rem;
    min-height: 8rem;
    margin-top: 0.8rem;
    border: 1px solid var(--color-line-in-white);
    border-radius: 0.8rem;
    background: var(--color-input-background);
    outline: 0;
    resize: vertical;
    padding: 1.2rem 1.6rem;
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
