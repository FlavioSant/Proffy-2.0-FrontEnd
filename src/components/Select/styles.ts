import styled, { css } from 'styled-components';
import { ContainerProps } from '../Input/styles';

export const Container = styled.div<ContainerProps>`
  margin-top: 1rem;

  & + div {
    margin-top: 1rem;
  }

  label {
    font-size: 1.4rem;
  }

  .react-select__control {
    position: relative;
    width: 100%;
    height: 5.6rem;
    margin-top: 0.8rem;
    border-radius: 0.8rem;
    border: 1px solid var(--color-line-in-white);
    background: var(--color-input-background);
    outline: 0;
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

    &:focus-within::after {
      width: calc(100% - 3.2rem);
      height: 2px;
      content: '';
      background: var(--color-primary-light);
      position: absolute;
      left: 1.6rem;
      right: 1.6rem;
      bottom: 0rem;
    }
  }
`;