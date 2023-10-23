import type { IUserFields } from "./Iuser";
export class UserData implements IUserFields {
	public name: string;
	public email: string;
	public password: string;
	public gen: string;
	public location: {
		address: {
			street: string;
			city: string;
			state: string;
		};
	};

	constructor(
		name: string,
		email: string,
		password: string,
		gen: string,
		location: {
			address: {
				street: string;
				city: string;
				state: string;
			};
		}
	) {
		this.name = name;
		this.email = email;
		this.password = password;
		this.gen = gen;
		this.location = location;
	}
}
