import React, { useRef, useEffect } from 'react';
import ReactSelect, { OptionTypeBase, Props } from 'react-select';
import { useField } from '@unform/core';

import './styles.css';

interface SelectProps extends Props<OptionTypeBase> {
  name: string;
  label: string;
  options: Array<{ value: string; label: string }>;
}

const Select: React.FC<SelectProps> = ({ name, label, options, ...rest }) => {
  const selectRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

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
    <div>
      <div className="select-block">
        <label htmlFor={name}>{label}</label>
        <ReactSelect
          ref={selectRef}
          defaultValue={defaultValue}
          classNamePrefix="react-select"
          placeholder="Selecione..."
          options={options}
          inputId={name}
          styles={
            error && {
              control: (base) => ({
                ...base,
                borderColor: 'red !important',
              }),
            }
          }
          {...rest}
        />
      </div>
      {error && <span className="error">{error}</span>}
    </div>
  );
};

export default Select;
