import Property from "./Property";
import Address from "./Address";
import Image from "./Image";

class Other extends Property {
  pricePerMeter: number;
  buildYear: number;

  constructor(
    title: string,
    slug: string,
    type: string,
    price: number,
    description: string,
    area: number,
    buildYear: number,
    address: Address,
    image: Image,
    gallery: Image[]
  ) {
    super(title, slug, type, price, description, area, address, image, gallery);
    this.buildYear = buildYear;
    this.pricePerMeter = Math.round(price / area);
  }
}

export default Other;
