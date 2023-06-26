export interface NavLink {
	name: string;
	link: string;
	title: string;
}

export interface NavbarProps {
	beranda?: string;
	tentang?: string;
	divisi?: string;
	masuk?: string;
}

export interface ButtonLandingProps {
	link: string;
	title: string;
}
