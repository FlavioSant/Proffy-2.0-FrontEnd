import React, { TextareaHTMLAttributes, useEffect, useRef } from 'react';
import { useField } from '@unform/core';

import './styles.css';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label: string;
}

const Textarea: React.FC<TextareaProps> = ({ name, label, ...rest }) => {
  const textAreaRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: textAreaRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <div>
      <div className="textarea-block">
        <label htmlFor={name}>{label}</label>
        <textarea
          ref={textAreaRef}
          defaultValue={defaultValue}
          id={name}
          style={error && { borderColor: '#f34f4f' }}
          {...rest}
        />
      </div>
      {error && <span className="error">{error}</span>}
    </div>
  );
};

export default Textarea;
