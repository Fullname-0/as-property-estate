import { ChangeEvent, createContext, FC, useContext, useReducer } from "react";
import emailjs from "emailjs-com";
import Property from "../model/web/Property";
import { useSnackbar } from "notistack";

type ContactContextType = {
  isModalOpen: boolean;
  property: Property | null;
  isFirstNameValid: boolean;
  isEmailValid: boolean;
  isPhoneNumberValid: boolean;
  isMessageValid: boolean;
  isValidated: boolean;
  firstName: string;
  email: string;
  phoneNumber: string;
  message: string;
  onOpenCloseModal: (estate: Property) => void;
  onFirstNameChange: (value: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onEmailChange: (value: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onPhoneNumberChange: (value: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onMessageChange: (value: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  sendMessage: () => void;
};

type ActionType = {
  type: string;
  value?: any;
};

const OPEN_CLOSE_MODAL = "openCloseModal";
const SET_FIRST_NAME = "setFirstName";
const SET_EMAIL = "setEmail";
const SET_PHONE_NUMBER = "setPhoneNumber";
const SET_MESSAGE = "setMessage";
const SET_VALIDATION = "setValidation";
const PHONE_NUMBER_REG = new RegExp("^[0-9+]{8,13}$");
const EMAIL_REG = new RegExp("^([A-Za-z0-9_\\-.])+@([A-Za-z0-9_\\-.])+\\.([A-Za-z]{2,4})$");

const INITIAL_CONTACT_STATE: ContactContextType = {
  isModalOpen: false,
  isFirstNameValid: false,
  isEmailValid: false,
  isPhoneNumberValid: false,
  isMessageValid: false,
  isValidated: false,
  property: null,
  firstName: "",
  email: "",
  phoneNumber: "",
  message: "",
  onOpenCloseModal: (estate: Property) => {},
  onFirstNameChange: (value) => {},
  onEmailChange: (value) => {},
  onPhoneNumberChange: (value) => {},
  onMessageChange: (value) => {},
  sendMessage: () => {},
};

const contactReducer = (state: ContactContextType, action: ActionType): ContactContextType => {
  switch (action.type) {
    case OPEN_CLOSE_MODAL: {
      return {
        ...state,
        isModalOpen: !state.isModalOpen,
        property: state.property ? null : action.value,
        firstName: "",
        email: "",
        phoneNumber: "",
        message: "",
        isFirstNameValid: true,
        isEmailValid: true,
        isPhoneNumberValid: true,
        isMessageValid: true,
        isValidated: false,
      };
    }
    case SET_FIRST_NAME: {
      return {
        ...state,
        firstName: action.value,
        isFirstNameValid: state.isValidated ? action.value != "" : true,
      };
    }
    case SET_EMAIL: {
      return {
        ...state,
        email: action.value,
        isEmailValid: state.isValidated ? EMAIL_REG.test(action.value) : true,
      };
    }
    case SET_PHONE_NUMBER: {
      return {
        ...state,
        phoneNumber: action.value,
        isPhoneNumberValid: state.isValidated ? PHONE_NUMBER_REG.test(action.value.replace("/s/g", "")) : true,
      };
    }
    case SET_MESSAGE: {
      return {
        ...state,
        message: action.value,
        isMessageValid: state.isValidated ? action.value != "" : true,
      };
    }
    case SET_VALIDATION: {
      return {
        ...state,
        isValidated: true,
        isFirstNameValid: state.firstName != "",
        isEmailValid: EMAIL_REG.test(state.email),
        isPhoneNumberValid: PHONE_NUMBER_REG.test(state.phoneNumber.replace("/s/g", "")),
        isMessageValid: state.message != "",
      };
    }
    default:
      return state;
  }
};

export const ContactContextProvider: FC = ({ children }) => {
  const { enqueueSnackbar } = useSnackbar();
  const [contactState, dispatch] = useReducer(contactReducer, INITIAL_CONTACT_STATE);

  const handleOpenCloseModal = (estate: Property) => {
    dispatch({ type: OPEN_CLOSE_MODAL, value: estate });
  };

  const handleFirstNameChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    dispatch({ type: SET_FIRST_NAME, value: event.target.value });
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    dispatch({ type: SET_EMAIL, value: event.target.value });
  };

  const handlePhoneNumberChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    dispatch({ type: SET_PHONE_NUMBER, value: event.target.value });
  };

  const handleMessageChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    dispatch({ type: SET_MESSAGE, value: event.target.value });
  };

  const validateForm = () => {
    dispatch({
      type: SET_VALIDATION,
    });
    return contactState.firstName != "" &&
      contactState.message != "" &&
      PHONE_NUMBER_REG.test(contactState.phoneNumber.replace("/s/g", "")) &&
      EMAIL_REG.test(contactState.email);
  };

  const handleSendMessage = () => {
    if (validateForm()) {
      const templateParams = {
        name: contactState.firstName,
        email: contactState.email,
        phone: contactState.phoneNumber,
        notes: contactState.message,
      };
      dispatch({ type: OPEN_CLOSE_MODAL });

      emailjs.send("service_8ox2t3pp", "template_q50j08h", templateParams, "user_0hDUecBzPkEQ4D0B6gAvb").then(
        () => {
          enqueueSnackbar("Dziękujemy za wiadomość. Odpowiemy najszybciej jak potrafimy, dziękujemy za cierpliwość.", {
            variant: "success",
            anchorOrigin: { vertical: "bottom", horizontal: "right" },
          });
        },
        () => {
          enqueueSnackbar("Coś poszło nie tak... Spróbuj ponownie później.", {
            variant: "error",
            anchorOrigin: { vertical: "bottom", horizontal: "right" },
          });
        }
      );
    }
  };

  const contextValue: ContactContextType = {
    ...contactState,
    onOpenCloseModal: handleOpenCloseModal,
    onFirstNameChange: handleFirstNameChange,
    onEmailChange: handleEmailChange,
    onPhoneNumberChange: handlePhoneNumberChange,
    onMessageChange: handleMessageChange,
    sendMessage: handleSendMessage,
  };
  return <ContactContext.Provider value={contextValue}>{children}</ContactContext.Provider>;
};

const ContactContext = createContext<ContactContextType>({
  ...INITIAL_CONTACT_STATE,
});

export default ContactContext;
