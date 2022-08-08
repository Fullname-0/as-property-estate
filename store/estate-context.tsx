import { ChangeEvent, ChangeEventHandler, createContext, FC, useReducer, useState } from "react";
import Property from "../model/web/Property";

type EstateContextType = {
  displayedEstates: Property[];
  filteredEstates: Property[];
  estates: Property[];
  city: string;
  estateType: string;
  priceFrom: number;
  priceTo: number;
  areaFrom: number;
  areaTo: number;
  page: number;
  totalPages: number;
  citiesOptions: string[];
  searchTypesOptions: string[];
  setCity: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  setEstateType: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  setPriceFrom: (priceFrom: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  setPriceTo: (priceTo: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  setAreaFrom: (areaFrom: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  setAreaTo: (areaTo: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  setEstates: (estates: Property[]) => void;
  setPage: (value: number) => void;
  search: () => void;
  setSearchTypesOptions: (searchTypesOptions: string[]) => void;
  setCitiesOptions: (citiesOptions: string[]) => void;
};

type ActionType = {
  type: string;
  value?: any;
};

const SET_ESTATES = "setEstates";
const SET_FILTERED_ESTATES = "setFilteredEstates";
const SET_CITY = "setCity";
const SET_ESTATE_TYPE = "setEstateType";
const SET_PRICE_FROM = "setPriceFrom";
const SET_PRICE_TO = "setPriceTo";
const SET_AREA_FROM = "setAreaFrom";
const SET_AREA_TO = "setAreaTo";
const SET_PAGE = "setPage";
const SET_SEARCH_TYPES_OPTIONS = "setSearchTypesOptions";
const SET_CITIES_OPTIONS = "setCitiesOptions";

const ESTATES_ON_PAGE = 10;
const ALL_CITIES = "Wszystkie miasta";
const ALL_PROPERTIES = "Wszystie nieruchomości";

const INITIAL_ESTATES_STATE = {
  displayedEstates: [],
  filteredEstates: [],
  estates: [],
  city: "",
  estateType: "",
  priceFrom: 0,
  priceTo: 0,
  areaFrom: 0,
  areaTo: 0,
  page: 1,
  totalPages: 1,
  citiesOptions: [],
  searchTypesOptions: [],
  setCity: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {},
  setEstateType: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {},
  setPriceFrom: (priceFrom: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {},
  setPriceTo: (priceTo: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {},
  setAreaFrom: (areaFrom: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {},
  setAreaTo: (areaTo: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {},
  setEstates: (estates: Property[]) => {},
  setPage: (value: number) => {},
  search: () => {},
  setSearchTypesOptions: (searchTypesOptions: string[]) => {},
  setCitiesOptions: (citiesOptions: string[]) => {},
};

const estateReducer = (state: EstateContextType, action: ActionType): EstateContextType => {
  switch (action.type) {
    case SET_CITY: {
      return {
        ...state,
        city: action.value,
      };
    }
    case SET_ESTATE_TYPE: {
      return {
        ...state,
        estateType: action.value,
      };
    }
    case SET_PRICE_FROM: {
      return {
        ...state,
        priceFrom: action.value,
      };
    }
    case SET_PRICE_TO: {
      return {
        ...state,
        priceTo: action.value,
      };
    }
    case SET_AREA_FROM: {
      return {
        ...state,
        areaFrom: action.value,
      };
    }
    case SET_AREA_TO: {
      return {
        ...state,
        areaTo: action.value,
      };
    }
    case SET_PAGE: {
      return {
        ...state,
        page: action.value,
        displayedEstates: state.filteredEstates.slice(
          action.value * ESTATES_ON_PAGE - ESTATES_ON_PAGE,
          action.value * ESTATES_ON_PAGE
        ),
      };
    }
    case SET_SEARCH_TYPES_OPTIONS: {
      return {
        ...state,
        searchTypesOptions: [...action.value, ALL_PROPERTIES],
        estateType: ALL_PROPERTIES,
      };
    }
    case SET_CITIES_OPTIONS: {
      return {
        ...state,
        citiesOptions: [...action.value, ALL_CITIES],
        city: ALL_CITIES,
      };
    }
    case SET_ESTATES: {
      return {
        ...state,
        estates: action.value,
        filteredEstates: action.value,
        displayedEstates: action.value.slice(0, ESTATES_ON_PAGE),
        page: 1,
        totalPages: Math.ceil(action.value.length / ESTATES_ON_PAGE),
      };
    }
    case SET_FILTERED_ESTATES: {
      return {
        ...state,
        filteredEstates: action.value,
        displayedEstates: action.value.slice(0, ESTATES_ON_PAGE),
        page: 1,
        totalPages: Math.ceil(action.value.length / ESTATES_ON_PAGE),
      };
    }
    default:
      return state;
  }
};

export const EstateContextProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(estateReducer, INITIAL_ESTATES_STATE);

  const estateHandler = (estates: Property[]) => {
    dispatch({ type: SET_ESTATES, value: estates });
  };

  const cityChangeHandler = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    dispatch({ type: SET_CITY, value: event.target.value });
  };

  const estateTypeChangeHandler = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    dispatch({ type: SET_ESTATE_TYPE, value: event.target.value });
  };

  const priceFromChangeHandler = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    dispatch({ type: SET_PRICE_FROM, value: event.target.value });
  };

  const priceToChangeHandler = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    dispatch({ type: SET_PRICE_TO, value: event.target.value });
  };

  const areaFromChangeHandler = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    dispatch({ type: SET_AREA_FROM, value: event.target.value });
  };

  const areaToChangeHandler = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    dispatch({ type: SET_AREA_TO, value: event.target.value });
  };

  const citiesOptionsHandler = (citiesOptions: string[]) => {
    dispatch({ type: SET_CITIES_OPTIONS, value: citiesOptions });
  };

  const propertiesTypeOptionsHandler = (propertiesOptions: string[]) => {
    dispatch({ type: SET_SEARCH_TYPES_OPTIONS, value: propertiesOptions });
  };
  const searchHandler = () => {
    const priceToFilter = (estate: Property) => {
      return state.priceTo == 0 || estate.price <= state.priceTo;
    };
    const areaToFilter = (estate: Property) => {
      return state.areaTo == 0 || estate.area <= state.areaTo;
    };
    const estateTypeFilter = (estate: Property) => {
      return (
        state.estateType.toUpperCase() === ALL_PROPERTIES.toUpperCase() ||
        estate.searchType.toUpperCase() === state.estateType.toUpperCase()
      );
    };
    const cityFilter = (estate: Property) => {
      return state.city === estate.address.city.name || state.city === ALL_CITIES;
    };

    const estateSublist = state.estates.filter((element) => {
      const isValid =
        element.price > state.priceFrom &&
        element.area > state.areaFrom &&
        cityFilter(element) &&
        priceToFilter(element) &&
        areaToFilter(element) &&
        estateTypeFilter(element);
      return isValid;
    });
    dispatch({ type: SET_FILTERED_ESTATES, value: estateSublist });
  };

  const setPageHandler = (value: number) => {
    if (value <= state.totalPages) {
      dispatch({ type: SET_PAGE, value: value });
    }
  };

  const contextValue: EstateContextType = {
    ...state,
    setCity: cityChangeHandler,
    setEstateType: estateTypeChangeHandler,
    setPriceFrom: priceFromChangeHandler,
    setPriceTo: priceToChangeHandler,
    setAreaFrom: areaFromChangeHandler,
    setAreaTo: areaToChangeHandler,
    setEstates: estateHandler,
    setPage: setPageHandler,
    search: searchHandler,
    setCitiesOptions: citiesOptionsHandler,
    setSearchTypesOptions: propertiesTypeOptionsHandler,
  };
  return <EstateContext.Provider value={contextValue}> {children} </EstateContext.Provider>;
};

const EstateContext = createContext<EstateContextType>({
  ...INITIAL_ESTATES_STATE,
});

export default EstateContext;
