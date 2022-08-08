import ApiPropertyResponse from "../api/ApiPropertyResponse";
import Commercial from "./Commercial";
import Image from "./Image";
import Land from "./Land";
import Local from "./Local";
import Other from "./Other";
import Property from "./Property";

class PropertyAdapter {
  static fromApiResponse = (response: ApiPropertyResponse): Property => {
    switch (response.details[0].__component) {
      case "meta.localdetails": {
        const coverImage = new Image(response.coverImage);
        const gallery = response.gallery?.map((el) => new Image(el));
        return new Local(
          response.title,
          response.slug,
          response.search_type?.name,
          response.general.price,
          response.general.description,
          response.general.area,
          response.details[0]?.market.name,
          response.details[0]?.roomsNumber,
          response.details[0]?.buildYear,
          response.details[0]?.buildingType.name,
          response.general.address,
          coverImage,
          gallery
        );
      }
      case "meta.commercial-details": {
        const coverImage = new Image(response.coverImage);
        const gallery = response.gallery?.map((el) => new Image(el));
        return new Commercial(
          response.title,
          response.slug,
          response.search_type?.name,
          response.general.price,
          response.general.description,
          response.general.area,
          response.details[0]?.landArea,
          response.details[0]?.market.name,
          response.details[0]?.buildingType.name,
          response.details[0]?.buildYear,
          response.general.address,
          coverImage,
          gallery
        );
      }
      case "meta.land-details": {
        const coverImage = new Image(response.coverImage);
        const gallery = response.gallery?.map((el) => new Image(el));
        return new Land(
          response.title,
          response.slug,
          response.search_type?.name,
          response.general.price,
          response.general.description,
          response.general.area,
          response.details[0]?.landType.name,
          response.details[0]?.purpose,
          response.general.address,
          coverImage,
          gallery
        );
      }
      default: {
        const coverImage = new Image(response.coverImage);
        const gallery = response.gallery?.map((el) => new Image(el));
        return new Other(
          response.title,
          response.slug,
          response.search_type?.name,
          response.general.price,
          response.general.description,
          response.general.area,
          response.details[0]?.buildYear,
          response.general.address,
          coverImage,
          gallery
        );
      }
    }
  };
}

export default PropertyAdapter;
