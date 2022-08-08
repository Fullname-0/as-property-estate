import Property from "./Property";
import Address from "./Address";
import Image from "./Image";

class Commercial extends Property {
  landArea: number;
  market: string;
  pricePerMeter: number;
  buildingType: string;
  buildYear: number;

  constructor(
    title: string,
    slug: string,
    searchType: string,
    price: number,
    description: string,
    area: number,
    landArea: number,
    market: string,
    buildingType: string,
    buildYear: number,
    address: Address,
    image: Image,
    gallery: Image[]
  ) {
    super(title, slug, searchType, price, description, area, address, image, gallery);
    this.landArea = landArea;
    this.market = market;
    this.buildingType = buildingType;
    this.buildYear = buildYear;
    this.pricePerMeter = Math.round(price / area);
  }
}

export default Commercial;
