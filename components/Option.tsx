import { item } from '@/helper/animate';
import { OptionProps } from '@/helper/interfaces';
import { motion } from 'framer-motion';
import React from 'react';
import { twMerge } from 'tailwind-merge';
const Option: React.FC<OptionProps> = ({
  value,
  handleHovered,
  handleSelected,
  handleShowed,
  selectedValue,
  optionHovered,
  textSize = 'text-base',
}) => {
  return (
    <motion.li
      variants={item}
      layout="position"
      onMouseEnter={() => handleHovered(value)}
      onMouseLeave={() => handleHovered(0)}
      onClick={() => {
        handleSelected(value);
        handleShowed(false);
      }}
      value={value}
      key={value}
    >
      <motion.p
        style={{ color: value == selectedValue ? '#EE2ED1' : 'white' }}
        className={twMerge(textSize, 'text-white cursor-pointer')}
      >
        {value}
      </motion.p>
      <motion.div
        layout="size"
        style={{ width: optionHovered == value ? '100%' : '0' }}
        className="w-0 h-[.5px] bg-tertiary"
      />
    </motion.li>
  );
};

export default Option;
