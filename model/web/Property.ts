import Address from "./Address";
import Image from "./Image";

class Property {
  title: string;
  slug: string;
  searchType: string;
  price: number;
  description: string;
  area: number;
  address: Address;
  coverImage: Image;
  gallery: Image[];

  constructor(
    title: string,
    slug: string,
    searchType: string,
    price: number,
    description: string,
    area: number,
    address: Address,
    coverImage: Image,
    gallery: Image[]
  ) {
    this.title = title;
    this.slug = slug;
    this.searchType = searchType;
    this.price = price;
    this.description = description;
    this.area = area;
    this.address = address;
    this.coverImage = coverImage;
    this.gallery = gallery;
  }
}

export default Property;
