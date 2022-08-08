import axios from "axios";
import type { InferGetStaticPropsType, NextPage } from "next";
import ContactDialog from "../../components/contactDialog/ContactDialog";
import Estate from "../../components/estate/Estate";
import Gallery from "../../components/gallery/Gallery";
import CustomFab from "../../components/ui/CustomFab";
import MainLayout from "../../layout/MainLayout";
import ApiPropertyResponse from "../../model/api/ApiPropertyResponse";
import PropertyAdapter from "../../model/web/PropertyAdapter";
import mockIndex from "../../mock/indexResponse.json";
import mockEstate from "../../mock/estateResponse.json";

const MOCK = true;

const SingleProperty: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  estateJson,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const estate = PropertyAdapter.fromApiResponse(JSON.parse(estateJson) as ApiPropertyResponse);
  return (
    <MainLayout>
      <Gallery gallery={estate.gallery} />
      <Estate property={estate} />
      <CustomFab property={estate} />
      <ContactDialog />
    </MainLayout>
  );
};

export default SingleProperty;

export const getStaticProps = async ({ params }: any) => {
  const estateResponse = MOCK ? mockEstate : await axios.get(`${process.env.API_URL}/properties/${params.slug}`);

  if (estateResponse.data && estateResponse.status == 200) {
    return {
      props: {
        estateJson: JSON.stringify(estateResponse.data),
      },
    };
  }

  return {
    notFound: true,
  };
};

export const getStaticPaths = async () => {
  let paths = [] as { params: { slug: string } }[];

  const indexResponse = MOCK ? mockIndex : await axios.get(`${process.env.API_URL}/properties/index`);

  if (indexResponse.data && indexResponse.status == 200) {
    paths = (indexResponse.data as string[]).map((element) => {
      return { params: { slug: element } };
    });
  }

  return {
    paths,
    fallback: false,
  };
};
