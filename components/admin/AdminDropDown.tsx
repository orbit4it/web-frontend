'use client';
import { container } from '@/helper/animate';
import { Positions } from '@/helper/interfaces';
import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { FaAngleDown } from 'react-icons/fa';
import { twMerge } from 'tailwind-merge';

interface ExpandDropdownProps {
  options: any;
  showOptions: boolean;
  selectedOption: string;
  handleShowOptions: (isShow: boolean) => void;
  mapOptions: any;
  colorShowed?: string;
  colorNotShowed: string;
  className?: string;
  position: Positions;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  textSize?: 'text-xs' | 'text-sm' | 'text-base' | 'text-lg' | 'text-xl';
}

const AdminDropDown: React.FC<ExpandDropdownProps> = ({
  options,
  showOptions,
  handleShowOptions,
  selectedOption,
  mapOptions,
  colorNotShowed,
  colorShowed = colorNotShowed,
  className = '',
  position,
  size = 'md',
  textSize = 'text-xs',
}) => {
  return (
    <motion.div
      layout="size"
      transition={{ duration: 0.5, type: 'keyframes' }}
      style={{ borderRadius: '12px' }}
      className={twMerge(
        `absolute rounded-full py-1 px-4 flex flex-col gap-2 items-start`,
        position == Positions.topleft
          ? 'left-0 top-0'
          : position == Positions.topright
          ? 'right-0 top-0'
          : position == Positions.bottomleft
          ? 'left-0 bottom-0'
          : position == Positions.bottomright
          ? 'right-0 bottom-0'
          : position == Positions.centertop
          ? 'left-1/2 -translate-x-1/2 top-0'
          : position == Positions.centerbottom
          ? 'bottom-0 left-1/2 -translate-x-1/2'
          : 'top-0 left-0',
        showOptions ? colorShowed : colorNotShowed,
        size == 'sm'
          ? 'min-w-[3rem] lg:min-w-[5rem] xl:min-w-[7rem]'
          : size == 'md'
          ? 'min-w-[5rem] lg:min-w-[7rem] xl:min-w-[9rem]'
          : size == 'lg'
          ? 'min-w-[7rem] lg:min-w-[9rem] xl:min-w-[11rem]'
          : 'min-w-[9rem] lg:min-w-[11rem] ',
        className
      )}
    >
      <motion.div
        layout="position"
        transition={{ duration: 0.4, type: 'keyframes' }}
        className="w-full flex items-center justify-between"
      >
        <p
          className={twMerge(
            textSize == 'text-xs'
              ? 'text-xs xl:text-sm'
              : textSize == 'text-sm'
              ? 'text-sm xl:text-base'
              : textSize,
            'font-medium text-white'
          )}
        >
          {selectedOption}
        </p>
        <FaAngleDown
          onClick={() => handleShowOptions(!showOptions)}
          color="white"
          className="w-5 cursor-pointer"
        />
      </motion.div>
      {showOptions && (
        <AnimatePresence>
          <motion.ul
            layout
            variants={container}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.5 }}
            className="w-full flex flex-col gap-2 "
          >
            {options.length > 0 && mapOptions}
            {options.length === 0 && <p className="text-xs">Loading ...</p>}
          </motion.ul>
        </AnimatePresence>
      )}
    </motion.div>
  );
};

export default AdminDropDown;
