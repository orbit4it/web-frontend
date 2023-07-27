import React from 'react';
import { BsCaretDownFill, BsCaretUpFill } from 'react-icons/bs';

type OrderByProps = {
  handleOrderByAsc: () => void;
  handleOrderByDesc: () => void;
  size?: number;
};

const OrderBy: React.FC<OrderByProps> = ({
  handleOrderByAsc,
  handleOrderByDesc,
  size = 14,
}) => {
  return (
    <span className="flex flex-col">
      <button className="bg-transparent">
        <BsCaretUpFill size={size} color="white" onClick={handleOrderByAsc} />
      </button>
      <button className="bg-transparent">
        <BsCaretDownFill
          size={size}
          color="white"
          onClick={handleOrderByDesc}
        />
      </button>
    </span>
  );
};

export default OrderBy;
