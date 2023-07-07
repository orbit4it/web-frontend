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
	image: string
	name: string
	honor: string
	message: string
}

export interface SwiperStyles {
	[key: string]: string;
}
