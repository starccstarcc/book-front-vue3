export interface IUserFields {
	name: string;
	email: string;
	password: string;
	gen: string;
	location: {
		address: {
			street: string;
			city: string;
			state: string;
		};
	};
}

//https://bobbyhadz.com/blog/typescript-object-is-possibly-undefined
/*interface IAddress {
	street: string;
	city: string;
	state: string;
}*/
