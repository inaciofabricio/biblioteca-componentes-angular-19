export interface IMenu {
	path: string;
	nome: string;
	visible: boolean;
	subMenu?: ISubMenu[]
}

export interface ISubMenu {
	path: string;
	nome: string;
}

export interface IColor {
	id: string;
	category: string;
	itens: IIten[]
}

export interface IIten {
	name: string;
	hexadecimal: string;
}

export interface ISize {
	id: string;
	category: string;
	itens: IItenSize[]
}

export interface IItenSize {
	name: string;
	size: string;
}

export interface ITypografy {
	name: string;
	category: string;
	itens: ITypografyItem[];
}

export interface ITypografyItem {
	size: string;
	lineHeight: string;
	fontSize: string;
	fontStyle: string;
}
