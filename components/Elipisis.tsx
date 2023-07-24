import React from 'react';

type ElipsisProps = {};

const Elipisis: React.FC<ElipsisProps> = () => {
  return (
    <div className="loading">
      <div className="circle bg-indigo-600"></div>
      <div className="circle bg-indigo-600"></div>
      <div className="circle bg-indigo-600"></div>
      <div className="shadow"></div>
      <div className="shadow"></div>
      <div className="shadow"></div>
    </div>
  );
};

export default Elipisis;
