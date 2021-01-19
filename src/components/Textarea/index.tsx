import React, {
  TextareaHTMLAttributes,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useField } from '@unform/core';

import ErrorMessage from '../ErrorMessage';
import { Container } from './styles';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label: string;
}

const Textarea: React.FC<TextareaProps> = ({ name, label, ...rest }) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const [isFilled, setIsFilled] = useState(false);

  const { fieldName, defaultValue, registerField, error } = useField(name);

  const handleTextAreaBlur = useCallback(() => {
    setIsFilled(!!textAreaRef.current.value);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: textAreaRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container isErrored={!!error} isFilled={isFilled}>
      <label htmlFor={name}>
        {label}
        <textarea
          ref={textAreaRef}
          defaultValue={defaultValue}
          onBlur={handleTextAreaBlur}
          id={name}
          {...rest}
        />
      </label>
      {error && <ErrorMessage title={error} isFilled={isFilled} />}
    </Container>
  );
};

export default Textarea;
