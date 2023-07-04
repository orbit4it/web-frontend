import { CredentialsInputProps } from '@/helper/interfaces';
import React from 'react';
import { twMerge } from 'tailwind-merge';

const CredentialsInput: React.FC<CredentialsInputProps> = ({
  classname,
  type,
  placeholder,
  required,
  inputClassname,
  labelText,
  labelClassname,
  onchange,
}) => {
  return (
    <div className={`${twMerge('relative', classname)}`}>
      <input
        type={type}
        placeholder={placeholder}
        required={required}
        className={`${twMerge(
          'peer py-2 px-3 border-white placeholder-shown:border-[#75629A] border-[1px] rounded-lg placeholder-transparent bg-transparent outline-none w-[350px] relative z-0 placeholder-shown:z-10',
          inputClassname
        )}`}
        onChange={(e) => onchange(e.target.value)}
      />
      <label
        className={` ${twMerge(
          'absolute left-3 -top-3 px-2 bg-[#221538] text-white  peer-placeholder-shown:text-[#75629A] peer-placeholder-shown:top-2 peer-placeholder-shown:bg-transparent duration-200',
          labelClassname
        )}`}
      >
        {labelText} <span className=" text-purple">*</span>
      </label>
    </div>
  );
};

export default CredentialsInput;
