import Address from "../web/Address";
import ApiImageResponse from "./ApiImageResponse";
import ApiLocalDetails from "./ApiLocalDetails";

interface ApiPropertyResponse {
  title: string;
  slug: string;
  search_type: {
    name: string;
  }
  general: {
    title: string;
    price: number;
    description: string;
    area: number;
    address: Address;
  };
  details: ApiLocalDetails[] | any[];
  coverImage: ApiImageResponse;
  gallery: ApiImageResponse[];
}

export default ApiPropertyResponse;
