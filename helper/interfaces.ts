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

export interface TestimoniProps {
  image: string;
  name: string;
  honor: string;
  message: string;
}

export interface DivisionProps {
  image: string;
  name: string;
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
  jabatan: string;
}
