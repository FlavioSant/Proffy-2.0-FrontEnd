import React, { InputHTMLAttributes, useEffect, useRef } from 'react';
import { useField } from '@unform/core';

import './styles.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

const Input: React.FC<InputProps> = ({ name, label, ...rest }) => {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <div>
      <div className="input-block">
        <label htmlFor={name}>{label}</label>
        <input
          ref={inputRef}
          defaultValue={defaultValue}
          id={name}
          type="text"
          style={error && { borderColor: '#f34f4f' }}
          {...rest}
        />
      </div>
      {error && <span className="error">{error}</span>}
    </div>
  );
};

export default Input;
