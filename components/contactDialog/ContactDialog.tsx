import { Dialog, DialogContent, DialogContentText, Button, DialogTitle, TextField } from "@mui/material";
import { ChangeEvent, FC, useContext, useEffect, useState } from "react";
import ContactContext from "../../store/contact-context";
import SendIcon from "@mui/icons-material/Send";
import CallIcon from "@mui/icons-material/Call";
import CardEstate from "../estateList/CardEstate";

const ContactDialog: FC = () => {
  const ctx = useContext(ContactContext);

  const clickToCall = () => {
    window.open("tel:+48-505-064-964");
  };

  return (
    <Dialog open={ctx.isModalOpen} onClose={ctx.onOpenCloseModal} disableScrollLock>
      <DialogTitle>Skontaktuj się z nami</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Jeżeli są Państwo zainteresowani naszą ofertą, prosimy o przesłanie wiadomości lub kontakt telefoniczny. Nasi
          doradcy są do Państwa dyspozycji!
        </DialogContentText>
        {ctx.property && <CardEstate estate={ctx.property} small />}
        <TextField
          fullWidth
          label="Imię"
          error={!ctx.isFirstNameValid}
          sx={{ mb: 3 }}
          onChange={ctx.onFirstNameChange}
          value={ctx.firstName}
        ></TextField>
        <TextField
          fullWidth
          label="Email"
          error={!ctx.isEmailValid}
          type="email"
          sx={{ mb: 3 }}
          onChange={ctx.onEmailChange}
          value={ctx.email}
        ></TextField>
        <TextField
          fullWidth
          label="Numer telefonu"
          error={!ctx.isPhoneNumberValid}
          type="tel"
          sx={{ mb: 3 }}
          onChange={ctx.onPhoneNumberChange}
          value={ctx.phoneNumber}
        ></TextField>
        <TextField
          fullWidth
          label="Wiadmość"
          error={!ctx.isMessageValid}
          multiline
          rows={5}
          sx={{ mb: 3 }}
          onChange={ctx.onMessageChange}
          value={ctx.message}
        ></TextField>
        <Button
          fullWidth
          type="submit"
          variant="contained"
          onClick={ctx.sendMessage}
          sx={{ mb: 3 }}
          startIcon={<SendIcon />}
        >
          Wyślij wiadomość
        </Button>
        <Button fullWidth onClick={clickToCall} variant="outlined" sx={{ mb: 3 }} startIcon={<CallIcon />}>
          Zadzwoń
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default ContactDialog;
