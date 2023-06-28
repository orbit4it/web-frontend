import Navbar from '@/components/Navbar';
import React from 'react';

interface GaleryType {
  index: number;
  title: string;
  pictures: Array<string>;
  youtube: string | null;
}

export default function page() {
  return <div className=" bg-black w-screen h-screen"></div>;
}
