class Address {
  city: { name: string };
  district: string;
  zipCode: string;
  street: string;
  buildingNumber: string;
  localNumber: string;

  constructor(
    city: string,
    district: string,
    zipCode: string,
    street: string,
    buildingNumber: string,
    localNumber: string
  ) {
    this.city = { name: city };
    this.district = district;
    this.zipCode = zipCode;
    this.street = street;
    this.buildingNumber = buildingNumber;
    this.localNumber = localNumber;
  }
}

export default Address;
