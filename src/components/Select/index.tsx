import React, { useRef, useEffect, useState, useCallback } from 'react';
import ReactSelect, { OptionTypeBase, Props } from 'react-select';
import { useField } from '@unform/core';

import ErrorMessage from '../ErrorMessage';
import { Container } from './styles';

interface SelectProps extends Props<OptionTypeBase> {
  name: string;
  label: string;
  options: Array<{ value: string; label: string }>;
}

const Select: React.FC<SelectProps> = ({ name, label, options, ...rest }) => {
  const selectRef = useRef(null);

  const [isFilled, setIsFilled] = useState(false);

  const { fieldName, defaultValue, registerField, error } = useField(name);

  const handleSelectBlur = useCallback(() => {
    setIsFilled(!selectRef.current.value);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      getValue: (ref: any) => {
        if (rest.isMulti) {
          if (!ref.state.value) {
            return [];
          }
          return ref.state.value.map((option: OptionTypeBase) => option.value);
        }
        if (!ref.state.value) {
          return '';
        }
        return ref.state.value.value;
      },
    });
  }, [fieldName, registerField, rest.isMulti]);

  return (
    <Container isErrored={!!error} isFilled={isFilled}>
      <label htmlFor={name}>
        {label}
        <ReactSelect
          ref={selectRef}
          defaultValue={defaultValue}
          onBlur={handleSelectBlur}
          classNamePrefix="react-select"
          placeholder="Selecione..."
          options={options}
          inputId={name}
          {...rest}
        />
      </label>
      {error && <ErrorMessage title={error} isFilled={isFilled} />}
    </Container>
  );
};

export default Select;
