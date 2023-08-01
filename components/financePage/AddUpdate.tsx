import { Positions } from '@/helper/interfaces';
import React from 'react';
import ExpandDropdown from '../ExpandDropdown';
import Modal from '../Modal';
import Option from '../Option';

type AddUpdateFinanceProps = {};

const AddUpdate: React.FC<AddUpdateFinanceProps> = () => {
  const [showTypeOptions, setShowTypeOptions] = React.useState(false);
  const [selectedType, setSelectedType] =
    React.useState<string>('Tipe Transaksi');
  const [hoveredOption, setHoveredOption] = React.useState<string>('null');
  const viewOptions = [
    { id: 1, label: 'Pemasukan' },
    { id: 2, label: 'Pengeluaran' },
  ];

  const mapTypeOptions = viewOptions.map((view) => (
    <Option
      key={view.id}
      handleHovered={setHoveredOption}
      handleSelected={setSelectedType}
      handleShowed={setShowTypeOptions}
      optionHovered={hoveredOption}
      selectedValue={selectedType}
      value={view.label}
      textSize="text-base"
    />
  ));
  return (
    <Modal>
      <div className="w-fit flex gap-5 flex-col items-center justify-center">
        <div className="inputBox relative w-96">
          <input type="text" className="w-full" required />
          <span>Nama Transaksi</span>
        </div>
        <div className="flex gap-2 w-96">
          <div className="relative w-[50%]">
            <input
              type="date"
              className="p-[10px] border border-white bg-transparent rounded-[10px] outline-none text-white text-[1em] placeholder:text-transparent"
              required
            />
          </div>
          <div className="relative w-[50%]">
            <ExpandDropdown
              colorNotShowed="bg-transparent"
              colorShowed="bg-d-primary"
              mapOptions={mapTypeOptions}
              position={Positions.topleft}
              selectedOption={selectedType}
              showOptions={showTypeOptions}
              size="xl"
              textSize="text-base"
              rounded="rounded-md"
              className="border border-white p-[10px] z-10"
              options={viewOptions}
              handleShowOptions={setShowTypeOptions}
            />
          </div>
        </div>
        <div className="inputBox relative w-96">
          <textarea typeof="text" className="" required maxLength={100} />
          <span>Deskripsi Transaksi</span>
          <h1 className="block absolute bottom-0 right-0 mb-2 text-sm font-inter text-white mr-3"></h1>
        </div>
      </div>
    </Modal>
  );
};

export default AddUpdate;
