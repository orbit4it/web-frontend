import { ButtonLandingProps } from '@/helper/interfaces';
import Link from 'next/link';
import React from 'react';
import { motion as m } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

const ButtonLandingPage: React.FC<ButtonLandingProps> = ({
  link,
  title,
  textSize,
  animate,
  viewportOnce,
}) => {
  return (
    <m.div
      initial={animate ? { opacity: 0, translateY: 100 } : {}}
      whileInView={animate ? { opacity: 1, translateY: -5 } : {}}
      transition={{ duration: 1, ease: [0.075, 0.82, 0.165, 1], delay: 0.4 }}
      viewport={animate ? { once: viewportOnce } : {}}
    >
      <Link href={link}>
        <button
          className={twMerge(
            ` border-secondary border-2 py-1 px-4 rounded-full hover:bg-secondary font-semibold ${textSize} text-white`
          )}
        >
          {title}
        </button>
      </Link>
    </m.div>
  );
};

export default ButtonLandingPage;
