import Property from "./Property";
import Address from "./Address";
import Image from "./Image";

class Local extends Property {
  market: string;
  roomsNumber: number;
  pricePerMeter: number;
  buildYear: number;
  buildingType: string;

  constructor(
    title: string,
    slug: string,
    type: string,
    price: number,
    description: string,
    area: number,
    market: string,
    roomsNumber: number,
    buildYear: number,
    buildingType: string,
    address: Address,
    image: Image,
    gallery: Image[]
  ) {
    super(title, slug, type, price, description, area, address, image, gallery);
    this.market = market;
    this.roomsNumber = roomsNumber;
    this.buildYear = buildYear;
    this.buildingType = buildingType;
    this.pricePerMeter = Math.round(price / area);
  }
}

export default Local;
