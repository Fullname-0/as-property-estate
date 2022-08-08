import type { InferGetStaticPropsType, NextPage } from "next";
import Banner from "../components/banner/Banner";
import MainLayout from "../layout/MainLayout";
import EstateList from "../components/estateList/EstateList";
import { useContext, useEffect } from "react";
import EstateContext from "../store/estate-context";
import axios from "axios";
import ApiPropertyResponse from "../model/api/ApiPropertyResponse";
import Property from "../model/web/Property";
import PropertyAdapter from "../model/web/PropertyAdapter";
import ContactDialog from "../components/contactDialog/ContactDialog";
import About from "../components/about/About";
import mockEstates from "../mock/estatesResponse.json";
import mockCities from "../mock/citiesResponse.json";
import mockSearchTypes from "../mock/searchResponse.json";

const MOCK = true;

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  estates,
  citiesOptions,
  buildingTypesOptions,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { setEstates, setCitiesOptions, setSearchTypesOptions } = useContext(EstateContext);

  useEffect(() => {
    setEstates(JSON.parse(estates));
    setCitiesOptions(citiesOptions);
    setSearchTypesOptions(buildingTypesOptions);
  }, []);

  return (
    <MainLayout>
      <Banner />
      <main>
        <EstateList />
        <About />
      </main>
      <ContactDialog />
    </MainLayout>
  );
};

export default Home;

export const getStaticProps = async () => {
  let estates = [] as Property[];
  let citiesOptions = [] as string[];
  let searchTypesOptions = [] as string[];

  const estatesResponse = MOCK ? mockEstates : await axios.get(`${process.env.API_URL}/properties`);
  const citiesOptionsResponse = MOCK ? mockCities : await axios.get(`${process.env.API_URL}/cities`);
  const searchTypesOptionsResponse = MOCK ? mockSearchTypes : await axios.get(`${process.env.API_URL}/search-types`);

  if (
    estatesResponse.status != 200 ||
    citiesOptionsResponse.status != 200 ||
    searchTypesOptionsResponse.status != 200
  ) {
    return {
      notFound: true,
    };
  }
  if (estatesResponse.data) {
    const estatesData = estatesResponse.data as ApiPropertyResponse[];
    estates = estatesData.map((element) => PropertyAdapter.fromApiResponse(element));
  }
  if (citiesOptionsResponse.data) {
    citiesOptions = (citiesOptionsResponse.data as any[]).map((element: any) => element.name);
  }
  if (searchTypesOptionsResponse.data) {
    searchTypesOptions = (searchTypesOptionsResponse.data as any[]).map((element: any) => element.name);
  }

  return {
    props: {
      estates: JSON.stringify(estates),
      citiesOptions: citiesOptions,
      buildingTypesOptions: searchTypesOptions,
    },
  };
};
