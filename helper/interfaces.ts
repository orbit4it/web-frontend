export interface ButtonLandingProps {
  link: string;
  title: string;
  textSize: string;
  animate: boolean;
  viewportOnce: boolean;
}

export interface CardLandingProps {
  judul: string;
  desc: string;
  cardRef: React.RefObject<HTMLDivElement>;
  classname: string;
  judulClassname: string;
  descClassname: string;
}

export interface AwanProps {
  classname?: string;
}

export interface VisiMisiProps {
  classname?: string;
  img: string;
  alt: string;
  imgWidth: number;
  imgHeight: number;
  imgClassname?: string;
  judul: string;
  desc: string;
  misi: boolean;
}

export interface CredentialsInputProps {
  classname?: string;
  type: string;
  placeholder: string;
  required: boolean;
  inputClassname?: string;
  labelText: string;
  labelClassname?: string;
  onchange: (value: string) => void;
}

export interface GaleryProjectProps {
  index: number;
  title: string;
  pictures: string[];
  youtube: string | null;
  activeId: number;
  handleActiveId: (id: number) => void;
}

export interface OptionProps {
  value: any;
  selectedValue: any;
  optionHovered: any;
  handleHovered: (value: any) => void;
  handleSelected: (value: any) => void;
  handleShowed: (value: boolean) => void;
  textSize: string | null;
}

export interface ExpandDropdownProps {
  options: any;
  showOptions: boolean;
  selectedOption: string;
  handleShowOptions: (isShow: boolean) => void;
  mapOptions: any;
  colorShowed?: string;
  colorNotShowed: string;
  className?: string;
  position: Positions;
}

export enum Positions {
  topleft = 'top-left',
  topright = 'top-right',
  bottomleft = 'bottom-left',
  bottomright = 'bottom-right',
  centertop = 'center-top',
  centerbottom = 'center-bottom',
}

export interface TestimoniProps {
  image: string;
  name: string;
  honor: string;
  message: string;
}

export interface DivisionProps {
  image: string;
  name: string;
  link: string;
}

export interface SwiperStyles {
  [key: string]: string;
}

export interface GaleryStyles {
  [key: string]: string;
}

export interface DivisionsProps {
  id?: number;
  name?: string;
  waGroupLink?: string;
}

export interface CalendarProps {
  filterBy: string;
  schedules?: ScheduleProps[];
}

export interface ScheduleProps {
  id: number;
  type: string;
  title: string;
  start: string;
  end: string;
  location: string;
  subject?: string;
}

export interface KelasProps {
  grade?: string;
  id?: number;
  name?: string;
  vocational?: string;
}

export interface MateriCardProps {
  classname?: string;
  judul: string;
  publisher: string;
  waktu: string;
  img: string;
  desc: string;
  textLink: string;
  link: string;
  alt: string;
}

export interface StrukturProps {
  image: string;
  name: string;
  fullName: string;
  jabatan: string;
  imgWidth: string;
  imgHeight: string;
}

export interface CommentsProps {
  classname?: string;
  imgProfil?: string;
  nama: string;
  stars: number;
  comment: string;
  waktu: string;
}

export interface RatingStarsProps {
  rating: number;
  onChangeRating: (rating: number) => void;
}
