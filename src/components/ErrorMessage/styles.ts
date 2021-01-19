import styled, { css } from 'styled-components';

interface ErrorProps {
  isFilled: boolean;
}

export const ErrorContainer = styled.span<ErrorProps>`
  display: flex;
  align-items: center;
  margin-top: 0.3rem;
  color: var(--color-input-error);
  font-size: 1.3rem;

  svg {
    margin-left: 0.3rem;
  }

  ${(props) =>
    props.isFilled &&
    css`
      display: none;
    `}
`;
