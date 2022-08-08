import { FC } from "react";
import Property from "../../model/web/Property";
import Local from "../../model/web/Local";
import LocalDetails from "./LocalDetails";
import Land from "../../model/web/Land";
import Commercial from "../../model/web/Commercial";
import LandDetails from "./LandDetails";
import CommercialDetails from "./CommercialDetails";
import Other from "../../model/web/Other";
import OtherDetails from "./Other";

type Props = {
  property: Property;
};

const EstateDetails: FC<Props> = ({ property }) => {
  const propertyDetails = () => {
    if (property instanceof Local) return <LocalDetails local={property} />;
    if (property instanceof Land) return <LandDetails land={property} />;
    if (property instanceof Commercial) return <CommercialDetails commercial={property} />;
    if (property instanceof Other) return <OtherDetails other={property} />;
    else return <></>;
  };

  return propertyDetails();
};

export default EstateDetails;
