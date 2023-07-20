export interface Order {
	_type: string;
	_grosse: string;
	_price: number;
}

export interface AllOrder {
	[key: string]: Order[];
}
