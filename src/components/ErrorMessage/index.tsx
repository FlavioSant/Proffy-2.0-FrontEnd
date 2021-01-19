import React from 'react';
import { MdErrorOutline } from 'react-icons/md';

import { ErrorContainer } from './styles';

interface ErrorMessageProps {
  title: string;
  isFilled: boolean;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ title, isFilled }) => (
  <ErrorContainer isFilled={isFilled}>
    {title} <MdErrorOutline size={20} />
  </ErrorContainer>
);

export default ErrorMessage;
