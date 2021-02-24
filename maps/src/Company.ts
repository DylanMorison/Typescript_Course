import faker from "faker";

export class Company {
	name: string;
	catchPhrase: string;
	locaation: {
		lat: number;
		lng: number;
	};

	constructor() {
		this.name = faker.company.companyName();
		this.catchPhrase = faker.company.catchPhrase();
		this.locaation = {
			lat: parseFloat(faker.address.latitude()),
			lng: parseFloat(faker.address.longitude())
		};
	}
}


