import React from 'react';

import Select from 'react-select';
import { CSSRuleObject } from 'tailwindcss/types/config';

type WidthProp =
  | 'w-1'
  | 'w-2'
  | 'w-3'
  | 'w-4'
  | 'w-5'
  | 'w-6'
  | 'w-7'
  | 'w-8'
  | 'w-9'
  | 'w-10'
  | 'w-11'
  | 'w-12'
  | 'w-full'
  | 'w-auto'
  | 'w-1/2'
  | 'w-1/4'
  | 'w-1/5';

interface DropdownProps {
  options: Option[];
  searchAble?: boolean;
  width?: WidthProp | string;
  customStyles?: {
    option: CSSRuleObject;
    control: CSSRuleObject;
  };
  onChange?: (value: any) => void;
}

export interface Option {
  value: string | number;
  label: string | number;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  searchAble = false,
  width,
  customStyles,
  onChange,
}) => {
  const customSytles = {
    option: (defaultStyles: any, state: any) => ({
      ...defaultStyles,
      color: state.isSelected ? '#fff' : '#000',
      backgroundColor: state.isSelected ? '#661193' : '#fff',
      padding: '0.5rem',
      boxShadow: 'none',
      margin: '0',
    }),
    control: (defaultStyles: any) => ({
      ...defaultStyles,
      backgroundColor: '#fdfdfd66',
      border: 'none',
      borderRadius: '0.5rem',
      padding: '0.5rem',
    }),
    singleValue: (defaultStyles: any) => ({
      ...defaultStyles,
      color: '#fff',
    }),
    placeholder: (defaultStyles: any) => ({
      ...defaultStyles,
      color: '#d7d7d7',
    }),
  };
  return (
    <Select
      className={width}
      classNamePrefix="select"
      placeholder="Nama Kelas"
      name="dropdown"
      styles={customSytles}
      defaultValue={options[0]}
      options={options}
      isSearchable={searchAble}
      onChange={onChange}
    />
  );
};

export default Dropdown;
