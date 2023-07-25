import { item } from '@/helper/animate';
import { motion } from 'framer-motion';
import React from 'react';
import { twMerge } from 'tailwind-merge';

interface OptionProps {
  value: any;
  selectedValue: any;
  optionHovered: any;
  handleHovered: (value: any) => void;
  handleSelected: (value: any) => void;
  handleShowed: (value: boolean) => void;
  textSize?: 'text-xs' | 'text-sm' | 'text-base' | 'text-lg' | 'text-xl';
}

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
      onMouseLeave={() => handleHovered(null)}
      onClick={() => {
        handleSelected(value);
        handleShowed(false);
      }}
      value={value}
      key={value}
    >
      <motion.p
        style={{ color: value == selectedValue ? '#EE2ED1' : 'white' }}
        className={twMerge(
          textSize == 'text-xs'
            ? 'text-xs xl:text-sm'
            : textSize == 'text-sm'
            ? 'text-sm xl:text-base'
            : textSize,
          'text-white cursor-pointer'
        )}
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
