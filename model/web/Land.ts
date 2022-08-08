import Property from "./Property";
import Address from "./Address";
import Image from "./Image";

class Land extends Property {
  pricePerMeter: number;
  landType: string;
  purpose: string;

  constructor(
    title: string,
    slug: string,
    searchType: string,
    price: number,
    description: string,
    area: number,
    landType: string,
    purpose: string,
    address: Address,
    image: Image,
    gallery: Image[]
  ) {
    super(title, slug, searchType, price, description, area, address, image, gallery);
    this.landType = landType;
    this.purpose = purpose;
    this.pricePerMeter = Math.round(price / area);
  }
}

export default Land;
